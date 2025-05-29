type Counter2Props = {
  count?: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};

export const Counter2 = (props: Counter2Props) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button
          onClick={props.handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      )}
      {props.handleDecrement && (
        <button
          onClick={props.handleDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
      )}
    </div>
  );
};
