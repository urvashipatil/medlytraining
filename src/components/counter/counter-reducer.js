import React, { useState, useContext, useReducer } from "react";

import { ThemeContext } from "../../theme-context";
import { useParams, useLocation } from "react-router-dom";
import "./counter.css";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      if (state.error && state.count >= 0) {
        return { ...state, error: "" };
      }
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      if (state.count === 0) {
        return { ...state, error: "Counter can not go below 0" };
      } else {
        return { ...state, count: state.count - action.payload };
      }
  }
  return state;
}

export default function CounterReducer({ step = 1 }) {
  const { name } = useParams();

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    error: "",
  });

  const { theme } = useContext(ThemeContext);

  const onIncrement = () => {
    dispatch({ type: INCREMENT, payload: step });
  };
  const onDecrement = () => {
    dispatch({ type: DECREMENT, payload: step });
  };
  return (
    <React.Fragment>
      <h3>
        {name} useState Demo {state.count}
      </h3>
      <div className={theme}>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      {state.error && <div className="error">{state.error}</div>}
    </React.Fragment>
  );
}
