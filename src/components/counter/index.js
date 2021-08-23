import React, { useState, useContext } from "react";

import { ThemeContext } from "../../theme-context";
import "./counter.css";

export default function Counter() {
  const [state, setState] = useState(calculateState);
  const { theme } = useContext(ThemeContext);
  //lazy state initalization
  function calculateState() {
    console.log("calculateState");
    return {
      count: 0,
      error: "",
    };
  }
  const onIncrement = () => {
    if (state.error && state.count >= 0) {
      setState((prevState) => {
        return { ...prevState, error: "" };
      });
    }
    setState((prevState) => {
      return { ...prevState, count: state.count + 1 };
    });

    // setState((prevState)=>{count: prevState.count + 1});
    // setCount((prevState)=>prevState + 1);
    // setCount((prevState)=>prevState + 1);
  };
  const onDecrement = () => {
    if (state.count === 0) {
      setState((prevState) => {
        return { ...prevState, error: "Counter can not go below 0" };
      });
    } else {
      setState((prevState) => {
        return { ...prevState, count: state.count - 1 };
      });
    }
  };
  return (
    <React.Fragment>
      <h3>useState Demo {state.count}</h3>
      <div className={theme}>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      {state.error && <div className="error">{state.error}</div>}
    </React.Fragment>
  );
}
