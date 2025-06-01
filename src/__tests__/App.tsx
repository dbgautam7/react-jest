// import { render, screen } from "@testing-library/react";
// import App from "../App";

// describe("App Component", () => {
//   test("renders a list of users", () => {
//     render(<App />);
//     const heading = screen.getByRole("heading", { name: "React 19" });
//     expect(heading).toBeInTheDocument();
//     // Here you can add more specific assertions to check if the users are rendered correctly
//   });
// });
describe("App Component", () => {
  test("receives a mocked response to a REST API request", async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user`);

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual({
      firstName: "John",
      lastName: "Maverick",
    });
  });

  test("receives a mocked response to a GraphQL API request", async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query ListMovies {
          movies {
            title
          }
        }
      `,
      }),
    });

    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual({
      data: {
        movies: [
          {
            title: "The Lord of The Rings",
          },
          {
            title: "The Matrix",
          },
          {
            title: "Star Wars: The Empire Strikes Back",
          },
        ],
      },
    });
  });

  test.only("API key should be loaded from .env", () => {
    expect(process.env.REACT_APP_MOCK_API).toBe("false");
  });
});
