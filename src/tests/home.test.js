import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '../pages/Home';

//Testa se tem os dois botãos na Home
test('Testa A pagina Home', () => {
  render(<Home />);
  const linkElement = screen.getByText("Testar API!");
  expect(linkElement).toBeInTheDocument();
  
 const linkElement2 = screen.getByText("Logar");
  expect(linkElement2).toBeInTheDocument();
});
