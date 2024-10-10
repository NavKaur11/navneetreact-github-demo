/* global describe, test, expect */


// src/__tests__/App.test.js
// eslint-disable-next-line no-unused-vars
import React from 'react';   // Import React


import { render, screen } from '@testing-library/react';
import App from '../App'; 

describe('App component', () => {
    test('renders correctly', () => {
        render(<App />);
        expect(screen.getByText(/you clicked/i)).toBeInTheDocument(); // Example test
    });
});
