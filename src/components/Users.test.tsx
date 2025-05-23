import {
  configure,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test.only("renders props test", () => {
    const title = "Hello this is the users page.";
    render(<Users tilte={title} />);
    const getTitle = screen.getByText(title);
    expect(getTitle).toBeInTheDocument();
  });

  test.only("functional props testing", async () => {
    const testFn = jest.fn();
    userEvent.setup();
    render(<Users testFunction={testFn} />);
    const btn = screen.getByRole("button", { name: "Button" });
    await userEvent.click(btn);
    expect(testFn).toHaveBeenCalled();
  });

  test("renders paragraph", () => {
    render(<Users />);
    const paragraph = screen.getByText("users list page", {
      exact: false,
    });
    expect(paragraph).toBeInTheDocument();
  });

  test("text match with regex", () => {
    render(<Users />);
    // const paragraph = screen.getByText(/Users list page/i);
    const paragraph = screen.getByText(/Users a?list page/i);
    expect(paragraph).toBeInTheDocument();
  });

  test("text match with function", () => {
    render(<Users />);
    const text = screen.getByText((content) => {
      return content.startsWith("This");
    });
    expect(text).toBeInTheDocument();
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
    // expect(screen.getByTitle("image from google")).toBeInTheDocument();
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

  test("input field updates on change", () => {
    render(<Users />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "DB" } });
    expect((input as HTMLInputElement).value).toBe("DB Gautam");
    const inputValue = screen.getByDisplayValue("DB Gautam");
    expect(input).toBeDisabled();
    expect(inputValue).toBeInTheDocument();
  });

  test.skip("button click event test case", () => {
    render(<Users />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("button click event test case with data testid", () => {
    render(<Users />);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test.only("button click event test case with user event library", async () => {
    userEvent.setup();
    render(<Users />);
    const btn1 = screen.getByText("Click Me");
    await userEvent.click(btn1);
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

  test("image alt test case", () => {
    render(<Users />);
    const images = screen.getAllByAltText("image");
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });

  test("test case for text queryBy", () => {
    render(<Users />);
    const text = screen.queryByText("Login");
    expect(text).toBeInTheDocument();
  });

  test("test case for text findByText", async () => {
    render(<Users />);
    const text = await screen.findByText("Logout", {}, { timeout: 3000 });
    expect(text).toBeInTheDocument();
  });

  test("test case for text custom selector", () => {
    render(<Users />);
    const div: HTMLElement | null = document.querySelector("#users");
    expect(div).toBeInTheDocument();
    if (!div) {
      throw new Error("Element with id 'users' not found");
    }
    const subElement = within(div).getByText("Users___");
    expect(div).toHaveAttribute("class");
    expect(subElement).toBeInTheDocument();
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
