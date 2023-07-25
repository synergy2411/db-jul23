import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Output from "./Output";

describe("Output Component", () => {
  test("renders heading element", () => {
    render(<Output />);

    const headingElement = screen.getByText(/output Works!/i);

    expect(headingElement).toBeInTheDocument();
  });

  test("renders 'toggle is false' when button is not clicked", () => {
    render(<Output />);

    const pElement = screen.queryByText(/Toggle is false/, { exact: false });

    expect(pElement).not.toBeNull();
  });

  test("renders 'toggle is true' when button is clicked", async () => {
    render(<Output />);

    const btnElement = screen.getByRole("button");

    userEvent.click(btnElement);

    const pElement = await screen.findByText(/Toggle is true/i);

    expect(pElement).toBeInTheDocument();
  });

  test("renders not to 'toggle is false' when the button is clicked", async () => {
    render(<Output />);

    const btnElement = screen.getByRole("button");

    userEvent.click(btnElement);

    const pElement = await screen.findByText(/Toggle is false/i);

    expect(pElement).not.toBeInTheDocument();
  });
});
