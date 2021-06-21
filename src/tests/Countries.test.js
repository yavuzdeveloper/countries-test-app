import React from "react";
import { render } from "@testing-library/react";
import Countries from "../Countries"
import axiosMock from "axios";


test('Countries renders correctly', () => {
   render(<Countries />);
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


// 

