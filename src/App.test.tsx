import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders IP Whitelisting title', () => {
  render(<App />);
  const titleElement = screen.getByText(/IP WHITELISTING/i);
  expect(titleElement).toBeInTheDocument();
});
