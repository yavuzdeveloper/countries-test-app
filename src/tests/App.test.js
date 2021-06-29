import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import axios from 'axios';
import TestRenderer from "react-test-renderer";

import App from "../App"
import { describe } from 'yargs';

//1 test:
test('1-App renders correctly', () => {
   render(<App />);
});

//2 test:
// describe("2-React logo", () => {
//     test("2-React logo", () => {
//         render(<App />);
//             const logoReact = screen.getByRole("img");

//             expect(logoReact).toHaveAttribute("src", 'https://avatars3.githubusercontent.com/u/60869810?v=4')
//             expect(logoReact).toHaveAttribute('alt', "react-logo");
//      });
// });

//3.test:
// describe("Img loading", () => {
//     test("3-Img loading", () => {
//        render(<App />);
//         const logoReact = screen.getByRole("img");

//         expect(logoReact).toHaveAttribute("src", "https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif")
//         expect(logoReact).toHaveAttribute('alt', "imgLoading" );
//     });
// });




//3 test:
test("4-title renders correctly", () => {
    render(<App />);
       const titleElement = screen.getByText(/countries/i);
    //    expect(titleElement).toBeInTheDocument(); //doc olmasını bekliyoruz.
    //    expect(titleElement).toHaveTextContent(/countries/i);
});




// async function getUsers() {
//     try {
//         const response = await axiosMock.get("/users");
//         return response.data.users;
//     } catch (e) {
//         throw new Error("Oops. Something wrong happened");
//     }
// }

// jest.mock("axios");

// const fakeUsers = ["john", "Emma", "Tom"];
// axiosMock.get.mockResolvedValue({ data: { users: fakeUsers } });

// test("get the users", async () => {
//     const users = await getUsers();
//     expect(users).toEqual(fakeUsers);
// });


//axios-mock;

// afterEach(cleanup);

// jest.mock('axios');// added??

// test('mocking axios request', async () => {
//   const data = {
//     countries: [
//       { name: 'country1' },
//       { name: 'country2' },
//       { name: 'country3' }
//     ]
//   };

//   mockedAxios.get.mockResolvedValueOnce(data);
//   const { getByText } = render(<App />);

//   await waitFor(() => {
//     expect(getByText('country1')).toBeInTheDocument();
//   });
// });

//***************
jest.mock('axios');

test("fetch", () => {
  const response = {
    countries: [
      { name: 'country1' },
      { name: 'country2' },
      { name: 'country3' }
    ]
  }
  axios.get.mockResolvedValue(response);

    const component = TestRenderer.create(
      <App />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});