import "@testing-library/jest-dom";
// import { server } from "./src/mockServices/server";

// beforeAll(() => {
//   console.log(process.env.MOCK_API, "apppppp");
//   if (process.env.MOCK_API === "true") {
//     // Enable API mocking before all the tests.
//     server.listen();
//   }
// });

// afterEach(() => {
//   // Reset the request handlers between each test.
//   // This way the handlers we add on a per-test basis
//   // do not leak to other, irrelevant tests.
//   if (process.env.MOCK_API === "true") {
//     server.resetHandlers();
//   }
// });

// afterAll(() => {
//   // Finally, disable API mocking after the tests are done.
//   if (process.env.MOCK_API === "true") {
//     server.close();
//   }
// });
