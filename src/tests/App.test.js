import React from 'react';
import { render, screen } from '@testing-library/react'

import App from "../App"
import { describe } from 'yargs';

//1 test:
test('App renders correctly', () => {
   render(<App />);
});

//2 test:
// describe("React logo", () => {
//     test("React logo", () => {
//        render(<App />);
//         const logoReact = screen.getByRole("img");

//         expect(logoReact).toHaveAttribute("src", 'https://avatars3.githubusercontent.com/u/60869810?v=4')
//         expect(logoReact).toHaveAttribute('alt', "react-logoww");
//     });
// });

//3.test:
// describe("Img loading", () => {
//     test("Img loading", () => {
//        render(<App />);
//         const logoReact = screen.getByRole("img");

//         expect(logoReact).toHaveAttribute("src", "https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif")
//         expect(logoReact).toHaveAttribute('alt', "imgLoading" );
//     });
// });





//3 test:
// test("title renders correctly", () => {
//     render(<App />);
//        const titleElement = screen.getByText(/countries/i);
//        expect(titleElement).toBeInTheDocument(); //doc olmasını bekliyoruz.
//        expect(titleElement).toHaveTextContent(/countries/i);
// });
