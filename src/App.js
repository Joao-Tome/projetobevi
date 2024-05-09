import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProdutoCreate from './pages/Produto/produtoCreate'; 
import Home from './Home'

//Aqui é a confiuração de rotas da pagina.
//para cada objeto na lista, é um caminho
//Path: Caminho no URL da pagina para acessar
//element: O elemento/Pagina para carregar ao acessar a URL
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Produto",
      element: <ProdutoCreate/>
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
