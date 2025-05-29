import { render, screen } from "@testing-library/react";
import { Counter2 } from "../components/Counter2";
import userEvent from "@testing-library/user-event";

describe("Counter 2 Component", () => {
  test("renders correctly", () => {
    render(<Counter2 count={0} />);
    const countElement = screen.getByRole("paragraph");
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveTextContent("0");
  });

  test("handlers are called on button clicks", async () => {
    userEvent.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <Counter2
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    await userEvent.click(incrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    await userEvent.click(decrementButton);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
