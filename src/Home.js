import logo from './logo.svg';
import './App.css';
import {instanceAxios, AddApiKey} from './services/axios.js'
import Swal from 'sweetalert2';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p>
      </header>
      <body>
        <button type='button' onClick={() => LogarAPI()}>
          Logar
        </button>
        <button type='button' onClick={() => TestarAPI()}>
          Testar API com o metodo ME
        </button>
      </body>
    </div>
  );
}

export default Home;
