import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component

  render(<UserForm />);

  // manipulate the component or find an element in it

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion - make sure the component is doing

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();

  // what we expect it to do
});



test("it calls onUserAdd when the form is submitted" , () => {
  // render the component

  render(<UserForm/>);


  // find the two inputs
  const [nameInput , emailInput] = screen.getAllByRole("textbox");

  





})


