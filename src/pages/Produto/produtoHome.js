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
import ProdutoCreate from "./produtoCreate";
import ProdutoCard from "../../components/ProdutoCard";

import instanceAxios from "../../services/axios";
import Swal from "sweetalert2";

function ProdutoHome() {

  const [showModal, setShowModal] = useState(false);
  
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

  const CarregaListaProdutos = () => {
    
    if (instanceAxios.defaults.headers.common['Authorization'] === undefined ){
      Swal.fire({
        title: "Erro ao Criar o Produto!",
        text: "Usuario não esta Logado!",
        icon:"Danger"
      })
      return 
    }

    instanceAxios({
      method: "post",
      url: "/product/list"
    })
    .then( (resp) => {
      console.log(resp)
      setListProdutos(resp.data.data)
    })
    .catch( (error) => {
      Swal.fire({
        title: "Ocorreu um erro!",
        text: "Ocorreu um erro ao Enviar Listar os Produtos!",
        icon: "danger"
      })
      console.log(error)
    })
  }

  useEffect( () => {
    CarregaListaProdutos()
  },[])

  const closeModal = () => { setShowModal(false); CarregaListaProdutos() };
  const openModal = () => setShowModal(true);

    return (
      <>
      <Container fluid>
        <h1 className="titulo">
          Listagem de Produto
        </h1>

        {/* Linha dos Filtros e botoes */}
        <Row>
          <Col sm={12}  md={{offset:4, span:4}}>
            <Form>
              <Form.Group>
                <Form.Label> Nome do produto </Form.Label>
                <Form.Control placeholder="Nome do produto" type="text"/>
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

            <Button variant="secondary" className="btnoperacoes" onClick={ () => CarregaListaProdutos()}>
              <IoRefresh size={35}/>
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

              <Button variant="secondary" className="btnoperacoes" onClick={openModal} >
                <CiSquarePlus size={35}/>
              </Button>

            </OverlayTrigger>
          </Col>
        </Row>

        <Row className="mt-4">
          {listProdutos.map( (item) => {
            return (
              <Col sm={6} md={4} lg={3} xl={2} className="p-2">
                <ProdutoCard Produto={item}/>
              </Col>
            )
          })}
        </Row>

      </Container>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProdutoCreate closeModal={closeModal}/>
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
  