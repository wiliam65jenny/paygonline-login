import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PayGOnline header', () => {
  render(<App />);
  const headerElement = screen.getByText(/PayGOnline Portal/i);
  expect(headerElement).toBeInTheDocument();
});

test('displays initial total paid summary', () => {
  render(<App />);
  const totalPaidElement = screen.getByText(/Total Paid/i);
  expect(totalPaidElement).toBeInTheDocument();
});
