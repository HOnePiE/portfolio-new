import { render, screen } from '@testing-library/react';
import App from './App';

// CRA's Jest can't resolve this package's "exports" subpath.
jest.mock('@vercel/speed-insights/react', () => ({ SpeedInsights: () => null }), {
  virtual: true,
});

test('renders every section of the portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Phạm Anh Tuấn' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'My Skills' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'My Projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'My Resume' })).toBeInTheDocument();
});

test('CV download points at the file served from public/', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /download pdf cv/i });
  expect(link).toHaveAttribute('href', `${process.env.PUBLIC_URL}/pdf/CV.pdf`);
  expect(link).toHaveAttribute('download');
});
