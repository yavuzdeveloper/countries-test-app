import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from "../App"


test('App renders correctly', () => {
   render(<App />);
});

describe("React logo", () => {
    test("React logo", () => {
        render(<App />);
            const logoReact = screen.getByRole("img");

            expect(logoReact).toHaveAttribute("src", 'https://avatars3.githubusercontent.com/u/60869810?v=4')
            expect(logoReact).toHaveAttribute('alt', "react-logo");
     });
});


test("title renders correctly", () => {
    render(<App />);
      const titleElement = screen.getByText(/countries/i);
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveTextContent(/countries/i);
});

