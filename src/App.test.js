import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "./App";

test("can receive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("Md Sohel");
  user.click(emailInput);
  user.keyboard("so_hell@gmail.com");
  //eslint-disable-next-line
  act(() => {
    user.click(button);
  });
  const name = screen.getByRole("cell", { name: "Md Sohel" });
  const email = screen.getByRole("cell", { name: "so_hell@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
