import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Validation from "./Validation";

describe("Validation component", () => {
  const options = [
    {
      message: "Must be at least 8 characters long",
      validation: (password) => password.length >= 8,
    },
    {
      message: "Must contain a number",
      validation: (password) => /\d/.test(password),
    },
  ];

  it("renders correctly", () => {
    render(<Validation options={options} />);
    expect(screen).toMatchSnapshot();
  });

  it("renders an input element", () => {
    render(<Validation options={options} />);
    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders correct number of validation items", () => {
    render(<Validation options={options} />);
    const validationItems = screen.getAllByRole("listitem");
    expect(validationItems.length).toBe(options.length);
  });

  it("sets password state on input change", () => {
    render(<Validation options={options} />);
    const inputElement = screen.getByLabelText("Password");
    fireEvent.change(inputElement, { target: { value: "password123" } });
    expect(inputElement.value).toBe("password123");
  });
});
