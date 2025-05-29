import { useState } from "react";

interface UserCounterProps {
  initialCount?: number;
}
export const useCounter = ({ initialCount = 0 }: UserCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 2);
  const decrement = () => setCount(count - 2);
  return {
    count,
    increment,
    decrement,
  };
};
