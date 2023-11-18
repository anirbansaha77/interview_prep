import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('Layout component', () => {
  test('renders header with default content', () => {
    render(<Layout>Test Content</Layout>);
    expect(screen.getByText('Front End Interview Project')).toBeInTheDocument();
  });

});
