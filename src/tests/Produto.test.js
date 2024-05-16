
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import ProdutoHome from '../pages/Produto/produtoHome';
import App from '../App';
import { wait } from '@testing-library/user-event/dist/utils';

//Testa se tem os dois botãos na Home
test('Testa A pagina Home do Produto', () => {
  render(<ProdutoHome />);
  const linkElement = screen.getByText("Listagem de Produto");
  expect(linkElement).toBeInTheDocument();
  
});

test("Ir ate a tela de Criacao", () => {
    render(<App />);
    var botao = screen.getByText("Produto")
    fireEvent.click(botao)
    expect(screen.queryByText('Listagem de Produto')).toBeInTheDocument();
    //Verifica se a modal ja não esta aparecendo
    expect(screen.queryByText('Criar')).not.toBeInTheDocument();
    botao = screen.queryByTestId('Criar')
    fireEvent.click(botao)
    expect(screen.queryByText('Criar')).toBeInTheDocument();
});
