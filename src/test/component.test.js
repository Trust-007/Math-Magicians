import React from 'react';
import renderer from 'react-test-renderer';

import CalculatorContent from '../components/calculator/CalculatorContent'
import HomeContent from '../components/home/HomeContent'
import QuoteContent from '../components/quotes/QuoteContent'

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
})