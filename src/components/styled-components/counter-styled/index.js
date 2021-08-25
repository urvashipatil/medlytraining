import React, { useState, useContext } from "react";
// import "./counter.css";
import styled, { ThemeContext, withTheme } from "styled-components";
import { Button, ErrorMessage } from "../common/button.style";

// const CounterContainer = styled.div`
//   border: 1px solid green;
//   padding: 5px;
//   margin: 10px;
// `;

//Adding attributes
const CounterContainer = styled.div.attrs((props) => ({
  id: "countercontainer",
}))`
  border: 1px solid green;
  padding: 5px;
  margin: 10px;
`;

//Style objects
const Test = styled.button({
  backgroundColor: "black",
});

const CounterTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 10px;
  font-family: monospace;
`;

function CounterStyled({ className, initialValue, theme }) {
  // console.log("CounterStyled", props);
  // const { className, initialValue, mybackgroudcolor } = props;
  console.log("className", className);
  const [count, setCount] = useState(initialValue || 0);
  const [error, setError] = useState("");
  // const { mybackgroudcolor } = useContext(ThemeContext);

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
      <CounterContainer className={className}>
        <CounterTitle>
          useState Demo {count} - {theme.mybackgroudcolor}
        </CounterTitle>
        <Button onClick={onIncrement}>Increment</Button>
        <Button onClick={onDecrement}>Decrement</Button>
      </CounterContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </React.Fragment>
  );
}

//Higher order function
export default withTheme(CounterStyled);
