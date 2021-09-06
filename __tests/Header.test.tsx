import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/Components/header';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/DarthChat/i);
  expect(linkElement).toBeInTheDocument();
});
