// src/__tests__/App.test.js
import React from 'react';

import { render, screen } from '@testing-library/react';
import App from '../App'; 

// Describe the test suite
describe('App Component', () => {
    // Test case to check if the component renders correctly
    test('renders learn react link', () => {
        render(<App />); // Render the App component
        const linkElement = screen.getByText(/learn react/i); // Search for the text 'learn react'
        expect(linkElement).toBeInTheDocument(); // Assertion to check if the text is present
    });
});
