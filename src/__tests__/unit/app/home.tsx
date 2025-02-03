import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '~/app/page';

it('renders home page', () => {
  render(<HomePage />);
  // Ask text or part of them
  expect(screen.getByText('hola mundo')).toBeInTheDocument();
});
