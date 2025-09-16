import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app correctly', () => {
  render(<App />);
  // Verificar que la app se renderiza sin errores
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});

test('app component loads without crashing', () => {
  const div = document.createElement('div');
  // Solo verificar que el componente se puede renderizar
  expect(() => {
    render(<App />, { container: document.body.appendChild(div) });
  }).not.toThrow();
});
