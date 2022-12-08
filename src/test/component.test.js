import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CalculatorContent from '../components/calculator/CalculatorContent';
import HomeContent from '../components/home/HomeContent';
import QuoteContent from '../components/quotes/QuoteContent';
import Layout from '../components/layout/Layout';
import Calculator from '../components/calculator/Calculator';

describe('testing components', () => {
  it('renders Calculator component correctly', () => {
    const tree = renderer.create(<CalculatorContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Home Component correctly', () => {
    const tree = renderer.create(<HomeContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quote component correctly', () => {
    const tree = renderer.create(<QuoteContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('full app rendering/navigating', async () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/Home/)).toMatchSnapshot();
  });

  it('stimulate users interaction', () => {
    render(<Calculator />);
    expect(screen.queryByText('AC')).toBeTruthy();
    fireEvent.click(screen.getByText(/AC/i));
  });
});
