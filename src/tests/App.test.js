import React from 'react';
import { render, screen, debug, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw' //moc servis working
import { setupServer } from 'msw/node' 

import App from '../App'
import Country from '../Country'



const getCountries = setupServer(
    rest.get("https://restcountries.eu/rest/v2/all", (req, res, ctx) => {
        return res(ctx.json({ message: 'hello there' }));
    })
);

beforeAll(() => getCountries.listen())//tüm tesler çalışmdan server ı dinlemeye başlıyo
afterEach(() => getCountries.resetHandlers())//herbir test çalıştıktan sonra hanle ler ları resetliyor.
afterAll(() => getCountries.close())//tüm testler çalıştıktan sonrada moc servis worker ı kapatıyor.


test('displays message', async () => {
  const { getByText } = render(<App />)

  //const btnSendRequest = getByText(/send/i)//butonu bulduk

  //fireEvent.click(btnSendRequest)//bulduğumuz butona tıkladık

  await waitFor(() => getByText(/hello/i))//react test lib. den waitFor func kullanyoruz. waitFor geriye promise döndürdüğü için await kulandık.
  //yani belirli aralıklarla ekranda hello text var mı yok mu ona bakıoyor (default u 1000msn) jest te 5000 msn çalışyo sonra time out veriyor
  //msw kulandığımız için işlem hiçbir zaman 100msn yi geçmeyecek
});









//1 test:
test('App renders correctly', () => {
   render(<App />);
});

//2 test:
test("React Logo renders correctly", () => {
    render(<App />);
    const logoReact = screen.getByRole("img");

    expect(logoReact).toHaveAttribute('src', "https://avatars3.githubusercontent.com/u/60869810?v=4");
    expect(logoReact).toHaveAttribute('alt', "react-logo");
});

//3 test:
test("title renders correctly", () => {
    render(<App />);
       const titleElement = screen.getByText(/countries/i);
       expect(titleElement).toBeInTheDocument(); //doc olmasını bekliyoruz.
       expect(titleElement).toHaveTextContent(/countries/i);
});

//4 test:
// test('Country renders correctly', () => {
//     render(<App />)
//     render(<Country />)
// });

//5 test:
// test('Button Element renders correctly', () => {
//     render(<App />)
//     //render(<Country />)
  
//     const buttonElement = screen.getByRole("button");
//     expect(buttonElement).toHaveTextContent(/detail show/i);

// });














// import React from 'react'; 
// import {shallow} from 'enzyme';

// import Logo from "./../Logo"; 
// import logoImage from "./../../../assets/images/logo.png;

// describe("<Logo />", () => {
//     it("renders an image", () => {
//         const logo = shallow(<Logo />);
        
//         expect(logo.find("img").prop("src")).toEqual(logoImage);

//      });
//  });

//  describe("<App />", () => {
//  test("renders an image", () => {
//         const {} = render(<App />);
        
//         //expect(logoReact.find("img").prop("src")).toEqual("https://avatars3.githubusercontent.com/u/60869810?v=4");

//      });
    //  });
