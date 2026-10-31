import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero and name', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { level: 1, name: /adesh pandey/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Adesh Pandey/i).length).toBeGreaterThan(0);
});
