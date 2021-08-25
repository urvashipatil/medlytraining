import React, { useState, useContext, useCallback, useEffect } from "react";

import { ThemeContext } from "../../theme-context";
import "./counter.css";
import Child from "./child";
import useTitle from "../custom-hooks/use-title";

export default function Counter() {
  const [state, setState] = useState(calculateState);
  const [name, setName] = useState("");
  const { theme } = useContext(ThemeContext);
  const setTitle = useTitle("Counter ");
  let myArray = [1, 2, 3, 4, 5];

  useEffect(() => {
    // document.title = `React Training ${state.count}`;
    setTitle("Count - " + state.count);
  }, [state.count]);

  //lazy state initalization
  function calculateState() {
    console.log("calculateState");
    return {
      count: 0,
      error: "",
    };
  }
  const onIncrement = useCallback(() => {
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
  }, [state.count]);
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
  const onChangeInput = (e) => {
    // console.log(e.target.value, e.target.name);
    setName((prevState) => e.target.value);
  };

  return (
    <React.Fragment>
      <div className="counter-container">
        <div className="counter-title">useState Demo {state.count}</div>
        <div className={theme}>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
        </div>
      </div>
      {state.error && <div className="error">{state.error}</div>}
      <div style={{ border: "1px solid gray", padding: "5px", margin: "10px" }}>
        <label style={{ paddingRight: "10px" }}>Change the Text Here</label>
        <input
          name="text"
          type="text"
          value={name}
          onChange={onChangeInput}
        ></input>
        <p>You typed - {name}</p>
      </div>
      <Child
        myArray={myArray}
        count={state.count}
        changeCount={onIncrement}
      ></Child>
    </React.Fragment>
  );
}
