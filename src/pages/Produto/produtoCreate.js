// import './App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import instanceAxios from "../../services/axios";
import Swal from 'sweetalert2';

//Modal de Criar o Produto
function ProdutoCreate({closeModal}) {

  //Lista de status
  //Normalmente retorna da API, mas como a API não retorna essa informação, irei deixar aqui mesmo.
  const listastatus = [
    {name: "Em Estoque", value: 1},
    {name: "Em Reposição", value: 2},
    {name: "Em Falta", value: 3},
  ]

  // Formato de envio ao API

  // {
  //   "name": "Produto 1",
  //   "description": "Descrição Produto 1",
  //   "price": 50.5,
  //   "status": 1,
  //   "stock_quantity": 10
  // }

  //Schema de Validação pelo yup
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().positive(),
    status: yup.number().required().min(1),
    stock_quantity: yup.number().required()
  })
  
  const EnviaAPI = (obj) => {
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
      url: "/product/create",
      data: obj
    })
    .then( (resp) => {
      Swal.fire({
        title: "Produto Criado com Sucesso!",
        text: "Produto " + obj.name + " Criado com Sucesso!",
        timer: 2000,
        icon: "success"
      }).then( () => {
        closeModal()
      })
    })
    .catch( (error) => {
      Swal.fire({
        title: "Ocorreu um erro!",
        text: "Ocorreu um erro ao Enviar criar o Produto!",
        icon: "danger"
      })
      console.log(error)
    })
  }

  const handleCancelar = () => {
    closeModal()
  }

  return (
    <>
      <Formik 
        validationSchema={validationSchema}
        onSubmit={ (values) => EnviaAPI(values)}
        initialValues={
          {
            name: "",
            description: "",
            price: 0,
            status: 0,
            stock_quantity: 0
          }
        }
      >
        {({handleSubmit, handleChange, values, touched, errors}) => (

          <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Col sm={12}>
              <Form.Group>
                <Form.Label> Nome </Form.Label>
                <Form.Control 
                  type='text'
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                  placeholder='Nome do Produto'
                  />
                <Form.Control.Feedback type='invalid'>É Obrigatorito o Nome do Produto</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label> Descrição </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Descrição do Produto'
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isValid={touched.description && !errors.description} 
                  isInvalid={!!errors.description}
                  />
                <Form.Control.Feedback type='invalid'>É Obrigatorito a descrição do Produto</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={5}>
              <Form.Group>
                <Form.Label> Preço </Form.Label>
                <InputGroup>
                  <InputGroup.Text>R$</InputGroup.Text>
                  <Form.Control 
                    type='number'
                    placeholder='50,00'
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    isValid={touched.price && !errors.price} 
                    isInvalid={!!errors.price}
                    />
                <Form.Control.Feedback type='invalid'>É Obrigatorito o Preço do Produto</Form.Control.Feedback>
                    </InputGroup>
              </Form.Group>
            </Col>

            <Col sm={12} md={7}>
              <Form.Group>
                <Form.Label> Status </Form.Label>
                <Form.Select
                  name="status"
                  value={values.status}
                  onChange={handleChange}
                  isValid={touched.status && !errors.status} 
                  isInvalid={errors.status}
                >
                  <option value={0}>Selecione um Status</option>
                  {listastatus.map( (item) => {
                    return <option value={item.value} key={item.value}>{item.name}</option>
                  })} 
                </Form.Select>
                <Form.Control.Feedback type='invalid'>É Obrigatorito o Status do Produto</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <Form.Group>
                <Form.Label> Quantidade no Estoque </Form.Label>
                <Form.Control
                  type='number'
                  placeholder='0'
                  name="stock_quantity"
                  value={values.stock_quantity}
                  onChange={handleChange}
                  isValid={touched.stock_quantity && !errors.stock_quantity } 
                  isInvalid={!!errors.stock_quantity}
                  />
              <Form.Control.Feedback type='invalid'>É Obrigatorito a Quantidade no estoque do Produto</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col className='mt-2 text-start'>
              <Button variant='danger' type='button' onClick={() => handleCancelar()}>
                Cancelar
              </Button>
            </Col>
            <Col className='mt-2 text-end'>
              <Button variant='primary' type='submit'>
                Criar Produto
              </Button>
            </Col>
          </Row>
        </Form>
        )}
      </Formik>
    </>
  );
}

export default ProdutoCreate;
