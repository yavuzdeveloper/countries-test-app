import React from 'react';
import { render, screen, debug } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


import Country from '../Country';
import App from '../App'


test('App renders correctly', () => {

    const { debug, screen, container } = render(<App />);

    console.log("TEXTCONTENT:",container.firstChild.textContent);
    
    expect(container.firstChild).toHaveTextContent(/conutries/i));

// screen.debug();
})