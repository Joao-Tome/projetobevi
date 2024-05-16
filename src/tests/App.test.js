import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

test('renders app component', () => {
  render(<App />);
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});

test('Test Navega Pagina', () => {
  render(<App/>);
  const botao = screen.getByText("Produto");
  fireEvent.click(botao)
  const Element = screen.queryByText("Listagem de Produto");
  expect(Element).toBeInTheDocument();
  expect(screen.queryByText("Logar")).not.toBeInTheDocument();
})
