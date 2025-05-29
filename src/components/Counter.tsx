import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 2);
  const [amount, setAmount] = useState(0);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};
