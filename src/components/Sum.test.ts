import { Sum } from "./Sum";

//describe.skip is used to skip the test suite and describe.only is used to run only the test suite
describe("Sum function of 1 & 2", () => {
  test("1+2 equals 3", () => {
    expect(Sum(1, 2)).toBe(3);
  }, 1000);
});

describe("Sum function of 5 & 7", () => {
  test("5+7 equals 12", () => {
    expect(Sum(5, 7)).toBe(12);
  }, 1000);

  describe("Sum function of 4 & 6", () => {
    test("4+6 equals 10", () => {
      expect(Sum(4, 6)).toBe(10);
    }, 1000);
  });
});
