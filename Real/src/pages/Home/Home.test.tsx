import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this for additional matchers
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './index';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

describe('Home Component', () => {
  it('renders the component with the provided title', () => {
    render(<Home title="Custom Title" />, { wrapper: Router });
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('renders the component with the default title if none is provided', () => {
    render(<Home />, { wrapper: Router });
    expect(screen.getByText('GitHub Users2')).toBeInTheDocument();
  });
});
