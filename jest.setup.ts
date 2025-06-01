import "@testing-library/jest-dom";
import dotenv from "dotenv";
// import { server } from "./src/mockServices/server";
dotenv.config({
  path: ".env.test",
});

beforeAll(() => {
  console.log(process.env.REACT_APP_MOCK_API, "===");
  if (process.env.REACT_APP_MOCK_API === "true") {
    // Enable API mocking before all the tests.
    // server.listen();
  }
});

afterEach(() => {
  // Reset the request handlers between each test.
  // This way the handlers we add on a per-test basis
  // do not leak to other, irrelevant tests.
  if (process.env.REACT_APP_MOCK_API === "true") {
    // server.resetHandlers();
  }
});

afterAll(() => {
  // Finally, disable API mocking after the tests are done.
  if (process.env.REACT_APP_MOCK_API === "true") {
    // server.close();
  }
});
