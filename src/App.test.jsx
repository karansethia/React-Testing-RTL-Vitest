import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import {expect} from "vitest";

// test("test", () => {
//   render(<App />);
//   const textElem = screen.getByText(/Hi/i);
//   expect(textElem).toBeInTheDocument();
// });

test("button starts with correct color and label", () => {
  render(<App />);
  const btn = screen.getByRole("button", {name: /blue/i});
  expect(btn).toHaveClass("red");
});

test("button changes color after click", () => {
  //todo -> render the app
  render(<App />);

  //todo -> find the button and check initial conditions
  const btn = screen.getByRole("button", {name: /blue/i});
  expect(btn).toHaveClass("red");

  //todo -> click the button
  fireEvent.click(btn);

  //todo -> check the button color

  expect(btn).toHaveClass("blue");
  expect(btn).toHaveTextContent(/red/i);
  expect(btn).toHaveStyle({"border-radius": "20px"});
});

// test("button starts with correct color", () => {
//   const {container} = render(<App />);
//   logRoles(container);   //! Use this logRoles method to log/understand the roles of every element inside the React component
//   const btn = screen.getByRole("button", {name: /blue/i});
//   expect(btn).toHaveClass("red");
// });

test("checkbox is unchecked and button is disabled", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", {name: /disable button/i});
  const btn = screen.getByRole("button", {name: /blue/i});
  expect(checkBox).not.toBeChecked();
  expect(btn).not.toBeDisabled();
});
