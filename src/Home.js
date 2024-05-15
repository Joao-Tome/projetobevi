import {instanceAxios, AddApiKey} from './services/axios.js'
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Container  from 'react-bootstrap/Container';

async function TestarAPI(){
  instanceAxios.post('/auth/me')
  .then((resp) => {
    Swal.fire("Deu certo")
  })
  .catch((error) => {
    Swal.fire("Deu errado")
  })

}

async function LogarAPI(){
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
    if (resp.data.access_token != null){
      AddApiKey(resp.data.access_token)
      Swal.fire({
        title:"Logado com Sucesso!",
        timer: 2000
      })
    }
  })
  .catch((error) => {
    console.log(error)
    Swal.fire("Deu errado")
  })
}

function Home() {
  return (
    <>
    <Container>
        <Row className='mt-3'>
          <Col className="text-start">
            <Button variant='primary' type='button' onClick={() => LogarAPI()}>
              Logar
            </Button>
          </Col>
          <Col className="text-end">
            <Button variant='primary' type='button' onClick={() => TestarAPI()}>
              Testar API com o metodo ME
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
