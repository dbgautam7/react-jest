import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users", () => {
  test("renders heading", async () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
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
    expect(input).toHaveAttribute("value", "Ram Krishna");
    expect(input).toHaveAttribute("placeholder", "Enter username");
  });
});

// We recommend installing an extension to run jest tests.
