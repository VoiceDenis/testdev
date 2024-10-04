import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import as necessary

test('renders Action buttons', () => {
  render(<App />);
  
  // Get all buttons with the text "Click Action"
  const buttonElements = screen.getAllByText(/Click Action/i);
  
  // Assert that the buttons are in the document
  expect(buttonElements).toHaveLength(3); // Check if there are 3 buttons
  
  // Optionally, check that the first button is in the document
  expect(buttonElements[0]).toBeInTheDocument();
});
