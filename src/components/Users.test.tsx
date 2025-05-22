import { configure, fireEvent, render, screen } from "@testing-library/react";
import Users from "./Users";
import { handleOtherMethodClick } from "../helper";

configure({ testIdAttribute: "element-id" });

beforeEach(() => {
  console.log("Called before each test");
});

describe("Users", () => {
  test("renders heading", async () => {
    render(<Users />);
    expect(
      screen.getByRole("heading", { name: "Users___" })
    ).toBeInTheDocument();
  });

  test("renders paragraph", () => {
    render(<Users />);
    expect(
      screen.getByText(/This is the users list page/i)
    ).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders the correct user names", () => {
    render(<Users />);
    expect(screen.getByText("name 1")).toBeInTheDocument();
    expect(screen.getByText("name 2")).toBeInTheDocument();
    expect(screen.getByTitle("image from google")).toBeInTheDocument();
  });

  test("renders a <ul> element", () => {
    render(<Users />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("list items are inside the <ul>", () => {
    render(<Users />);
    const list = screen.getByRole("list");
    const items = screen.getAllByRole("listitem");
    items.forEach((item) => {
      expect(list).toContainElement(item);
    });
  });

  test("renders an input field", () => {
    render(<Users />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter username");
  });

  test.only("input field updates on change", () => {
    render(<Users />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "DB" } });
    expect((input as HTMLInputElement).value).toBe("DB Gautam");
    const inputValue = screen.getByDisplayValue("DB Gautam");
    expect(inputValue).toBeInTheDocument();
  });

  test("button click event test case", () => {
    render(<Users />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test.only("button click event test case with data testid", () => {
    render(<Users />);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("button click event test case with other method in helper", () => {
    expect(handleOtherMethodClick()).toMatch("Hi");
    expect(handleOtherMethodClick()).toBe("Hi");
  });

  test("multiple button check with getAllByRole", () => {
    render(<Users />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((_, i) => {
      expect(buttons[i]).toBeInTheDocument();
    });
  });

  test("mutliple checkbox testcase using getAllByLabel", () => {
    render(<Users />);
    const checkboxes = screen.getAllByLabelText("Is Passed");
    for (let i = 0; i < checkboxes.length; i++) {
      expect(checkboxes[i]).toBeInTheDocument();
      expect(checkboxes[0]).toHaveClass("custom-checkbox");
      expect(checkboxes[1]).toHaveAttribute("id");
    }
  });
});

//snapshot test
// test("Snapshot for Sum", () => {
//   const container = render(<Users />);
//   expect(container).toMatchSnapshot();
// });

// afterEach(() => {
//   console.log("Called after each test");
// });

// We recommend installing an extension to run jest tests.
