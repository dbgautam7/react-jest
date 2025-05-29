import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter Hook", () => {
  test("should initialize with default count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should initialize with custom initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 5 }));
    expect(result.current.count).toBe(5);
  });

  test("should increment count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });
  test("should decrement count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-2);
  });
});
