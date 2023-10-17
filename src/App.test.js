import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const options = jest.mock("./utils/generateValidations", () => ({
  generateValidationOptions: jest.fn(() => [
    { message: "Test validation 1", validation: () => true },
    { message: "Test validation 2", validation: () => false },
  ]),
}));

describe("App component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
