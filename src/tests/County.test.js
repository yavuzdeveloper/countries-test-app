import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw' //moc servis working
import { setupServer } from 'msw/node' //jest node üzerinde çaıştığı için (browser üzerinde değil)



import Country from "../Country"
import App from '../App'


const getCountries =  setupServer(
    rest.get("https://restcountries.eu/rest/v2/all", (req, res, ctx) => {
        return res(ctx.json({ message: 'hello there' }));
    })
);


beforeEach(() => {
    render(<App />); 
});

test('Button Element renders correctly', () => {
    //  const { getByRole } = render(<Country />)
  
    // const buttonElement = screen.getByRole("button");
    // expect(buttonElement).toHaveTextContent(/detail show/i);

});