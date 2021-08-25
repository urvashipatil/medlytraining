import React, { useState } from "react";

export default function CounterRedux({ initialValue }) {
  const [count, setCount] = useState(initialValue || 0);
  const [error, setError] = useState("");

  const onIncrement = () => {
    if (error && count >= 0) {
      setError("");
    }
    setCount(count + 1);
  };

  const onDecrement = () => {
    if (count === 0) {
      setError("Counter can not go below 0");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <React.Fragment>
      <div className="counter-container">
        <div className="counter-title">useState Demo {count}</div>
        <div>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </React.Fragment>
  );
}
