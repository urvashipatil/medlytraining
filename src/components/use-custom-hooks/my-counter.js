import React, { useState } from "react";
import useCounter from "../custom-hooks/use-count";

export default function MyCounter() {
  const { count, increment, decrement } = useCounter(0, 5);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
