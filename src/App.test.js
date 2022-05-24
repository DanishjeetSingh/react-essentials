import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an h1', () => {
  const {getByText} = render(<App/>)
  const h1 = getByText(/Hello React Testing Library/)
  expect(h1).toHaveTextContent("Hello React Testing Library")
})