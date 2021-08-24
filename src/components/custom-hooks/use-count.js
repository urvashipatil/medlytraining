import React, { useState, useEffect } from "react";

export default function useCounter(initialCount = 0, step = 1) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  return { count, increment, decrement };
}
