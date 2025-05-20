beforeAll(() => {
  console.log("Before all tests");
});

describe("Sample Test Case", () => {
  test("Sample Test", () => {
    expect(true).toBe(true);
  });
});

afterAll(() => {
  console.log("After all tests");
});
