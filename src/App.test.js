import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders saving soon text', () => {
  const { getByText } = render(<App />);
  const paragraph = getByText(/Warning! This app is in development, saving is coming really soon.../i);
  expect(paragraph).toBeInTheDocument();
});
