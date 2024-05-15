import { useState } from 'react';
import { instanceAxios, AddApiKey } from '../services/axios.js'
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Loading from '../components/Loading.js';

function Home() {

  const [isLoading, setIsLoading] = useState(false);

  async function TestarAPI() {
    setIsLoading(true)
    instanceAxios.post('/auth/me')
      .then((resp) => {
        console.log(resp)
        Swal.fire({
          title:"Logado!",
          html: "Nome: " + resp.data.name + "<br/>Email: " + resp.data.email
        })
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          title:"Não esta Logado!",
          icon:"error"
        })
      })
      .finally( () =>{
        setIsLoading(false)
      })

  }

  async function LogarAPI() {
    setIsLoading(true)
    instanceAxios({
      method: 'post',
      url: "/auth/login",
      data: {
        "email": process.env.REACT_APP_EMAIL_API,
        "password": process.env.REACT_APP_SENHA_API
      }
    })
      .then((resp) => {
        console.log(resp)
        if (resp.data.access_token != null) {
          AddApiKey(resp.data.access_token)
          Swal.fire({
            title: "Logado com Sucesso!",
            icon: "success",
            timer: 2000
          })
        }
      })
      .catch((error) => {
        console.log(error)
        Swal.fire({
          title: "Ocorreu um erro ao Logar!",
          icon: "error"
        })
      })
      .finally(() =>{
        setIsLoading(false)
      })
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Container>
        <Row className='mt-3'>
          <Col className="text-start">
            <Button variant='primary' type='button' onClick={() => LogarAPI()}>
              Logar
            </Button>
          </Col>
          <Col className="text-end">
            <Button variant='primary' type='button' onClick={() => TestarAPI()}>
            Testar API!
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
