import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders watch out text', () => {
  const { getByText } = render(<App />);
  const paragraph = getByText(/Watch out, coming soon/i);
  expect(paragraph).toBeInTheDocument();
});
