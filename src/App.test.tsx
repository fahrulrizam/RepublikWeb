import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Tambahkan untuk routing
import App from './App';

test('renders hero text on Home page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const heroElement = screen.getByText(/Bangun Karier Digitalmu/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders App without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
 
  expect(screen.getByRole('main')).toBeInTheDocument(); 
});
