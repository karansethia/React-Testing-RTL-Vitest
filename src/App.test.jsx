import {render, screen} from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/starter code/i);
  expect(headingElement).toBeInTheDocument();
});
test("App contains a button", () => {
  render(<App />);

  //! getByRole defines the role of the targeted element according to the semantics of the html
  const buttonElement = screen.getByRole("button", {name: "Click me"}); //? name gets the text inside the targeted element
  expect(buttonElement).toBeInTheDocument();
});
