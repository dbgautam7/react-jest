import { render, screen } from "@testing-library/react";
import { Counter } from "../components/Counter";
import userEvent from "@testing-library/user-event";

describe("Countr Component", () => {
  test("renders heading", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("0");
  });

  test("increments count on button click", async () => {
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
    await userEvent.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("sets amount input value to count value on button click", async () => {
    userEvent.setup();
    render(<Counter />, {});
    const amount = screen.getByRole("spinbutton");
    await userEvent.type(amount, "10");
    expect(amount).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });
});
