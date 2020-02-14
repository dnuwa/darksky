import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app page correctly', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Get Weather/);
  expect(buttonElement).toBeInTheDocument();
});
