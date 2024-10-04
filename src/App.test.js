import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/hi/i); // Replace with actual button text
  expect(buttonElement).toBeInTheDocument();
});
