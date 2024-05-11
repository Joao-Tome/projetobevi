import {instanceAxios, AddApiKey} from './services/axios.js'
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar.js';

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
      {/* <NavBar/> */}
      <Button variant="primary">Primary</Button>{' '}
        <Button variant='primary' type='button' onClick={() => LogarAPI()}>
          Logar
        </Button>
        <Button variant='primary' type='button' onClick={() => TestarAPI()}>
          Testar API com o metodo ME
        </Button>
    </>
  );
}

export default Home;
