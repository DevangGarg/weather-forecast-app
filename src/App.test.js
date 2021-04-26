import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './containers/App';

describe('Testing App.js', () => {
    beforeEach(() => {
        render(<App/>);
        screen.debug()
    })
    it('Renders Weather Forescasting Text', () => {
        expect(screen.getByText('Weather Forecasting')).toBeInTheDocument();
      });
    it('Renders City Searching Text', () => {
        expect(screen.getByText('City Searching')).toBeInTheDocument();
    });
    it('Renders Search City Placeholder', () => {
        expect(screen.getByPlaceholderText('Search City')).toBeInTheDocument();
    });
});
