import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home'
import ProdutoHome from './pages/Produto/produtoHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './ErrorPage';
import NavBar from './components/NavBar';
import { Nav } from 'react-bootstrap';
import PaginaBase from './pages/PaginaBase';

//Aqui é a confiuração de rotas da pagina.
//para cada objeto na lista, é um caminho

//path: Caminho no URL da pagina para acessar
//element: O elemento/Pagina para carregar ao acessar a URL
//errorElement: Caso der erro na pagina (tipo Not Found) Ira mostrar o Elemento selecionado.
//children: Outros caminhos aonde vai se derivado do pai, ira ser mostrado na pagina aonde o elemento <outlet/> esta na pagina. (Não estoura erro caso não tenha, so não vai ser mostrado.)
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PaginaBase/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/Produto",
          element: <ProdutoHome/>
        }
      ]
    }
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
