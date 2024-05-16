import "../../stylesheet/ProdutoHome.css"
import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { CiSquarePlus } from "react-icons/ci";
import { IoRefresh } from "react-icons/io5";
import ProdutoDetalhes from "./produtoDetalhes";
import ProdutoCard from "../../components/ProdutoCard";

import instanceAxios from "../../services/axios";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

function ProdutoHome() {

  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [idProduto, setIdProduto] = useState(0);

  const [txtProdutoPesquisa, setTxtProdutoPesquisa] = useState('')

  //Carrega um objeto padrão. quando tiver a resposta da api, ira ser sobrescrito
  const [listProdutos, setListProdutos] = useState([
    {
      id: 0,
      name: "Produto Teste React",
      description: "Produto Teste React",
      price: 10,
      status: 2,
      stock_quantity: 1,
      created_at: "2024-05-12",
      updated_at: "",
      deleted_at: null
    }
  ])

  const AbrirTelaProdutoDetalhes = (id) => {
    console.log(id)
    setIdProduto(id)
    openModal()
  }

  const CarregaListaProdutos = () => {
    //Verifica se tem o Codigo, não eh o mais ideal, mas pelo menos da para ver se esta logado ou não. 
    //Caso o token esteja vencido, não ira cair aqui, sei disso. so não sei uma outra forma sem ser "tentar novamente"
    if (instanceAxios.defaults.headers.common['Authorization'] === undefined) {
      Swal.fire({
        title: "Erro ao Criar o Produto!",
        text: "Usuario não esta Logado!",
        icon: "error"
      })
      return
    }
    setIsLoading(true)
    instanceAxios({
      method: "post",
      url: "/product/list"
    })
      .then((resp) => {
        console.log(resp)
        setListProdutos(resp.data.data)
      })
      .catch((error) => {
        Swal.fire({
          title: "Ocorreu um erro!",
          text: "Ocorreu um erro ao Enviar Listar os Produtos!",
          icon: "error"
        })
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  //Ao abrir a pagina, carrega a lista 1 vez (2 pq react tem seus motivos no modo debug)
  useEffect(() => {
    CarregaListaProdutos()
  }, [])

  const closeModal = () => { setShowModal(false); CarregaListaProdutos() };
  const openModal = () => setShowModal(true);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Container fluid>
        <h1 className="titulo">
          Listagem de Produto
        </h1>

        {/* Linha dos Filtros e botoes */}
        <Row>
          <Col sm={12} md={{ offset: 4, span: 4 }}>
            <Form>
              <Form.Group>
                <Form.Label> Nome do produto </Form.Label>
                <Form.Control placeholder="Nome do produto" type="text" value={txtProdutoPesquisa} onChange={(resp) => { setTxtProdutoPesquisa(resp.target.value); }} />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={12} md={3} className="mt-4 d-flex justify-content-end">

            <OverlayTrigger
              key={"overlayRecarregar"}
              placement="top"
              overlay={
                <Tooltip id={"tooltipRecarregar"}>
                  Recarregar
                </Tooltip>
              }>

              <Button variant="secondary" className="btnoperacoes" onClick={() => CarregaListaProdutos()}>
                <IoRefresh size={35} />
              </Button>

            </OverlayTrigger>

            <OverlayTrigger
              key={"overlayCriar"}
              placement="top"
              overlay={
                <Tooltip id={"tooltipCriar"}>
                  Criar
                </Tooltip>
              }>

              <Button variant="secondary" className="btnoperacoes" onClick={() => AbrirTelaProdutoDetalhes(0)} data-testid="Criar" >
                <CiSquarePlus size={35} />
              </Button>

            </OverlayTrigger>
          </Col>
        </Row>

        <Row className="mt-4">
          {/* Filtra a lista de acordo com o que esta no txtProdutoPesquisa */}
          {listProdutos.filter((item) => { return item.name.includes(txtProdutoPesquisa) }).map((item) => {
            return (
              <Col sm={6} md={4} lg={3} xl={2} className="p-2" key={item.id}>
                <button
                  className="button-card"
                  onClick={() => { AbrirTelaProdutoDetalhes(item.id) }}
                >
                  <ProdutoCard Produto={item} />
                </button>
              </Col>
            )
          })}
        </Row>

      </Container>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{idProduto !== 0 ? "Alterar Produto" : "Criar Produto"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProdutoDetalhes closeModal={closeModal} idProduto={idProduto} setIsLoading={setIsLoading} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ProdutoHome;
