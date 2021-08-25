import React from "react";
import CounterStyled from "./counter-styled";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Button, PrimaryButton } from "./common/button.style";
import "./my-css.css";

const border = (width) => {
  return `border: ${width} solid black`;
};

const GlobalStyles = createGlobalStyle`
  body{
    background-color: lightyellow;
    margin:0px;
    padding:0px;
    font-family:sans-serif;
    color:${(props) => (props.redColor ? "red" : "black")};
  }
`;

export default function StyledApp({ color = "red" }) {
  // const color = "red";

  // const BlueButton = styled.button`
  //   width: 200px;
  //   height: 20px;
  //   background-color: blue;
  // `;

  //   const Button = styled.button`
  //   width: 200px;
  //   height: 20px;
  //   background-color: ${color};
  //   ${border("2px")};
  // `;

  const Header = styled.section`
    background-color: red;
    button {
      background-color: black;
      color: white;
    }
  `;

  //Styling existing React components.
  const CounterStyledExtended = styled(CounterStyled)`
    background-color: lightblue;
  `;

  const deriveTheme = (parentTheme) => {
    //my logic
    return {
      mybackgroudcolor: "black",
      color: "white",
    };
  };

  const StyledCompTitle = styled.div`
    font-weight: 600;
    background: lightgray;
    text-align: center;
  `;
  const StyledCompContainer = styled.div``;

  return (
    <React.Fragment>
      <ThemeProvider theme={{ mybackgroudcolor: "lightpink" }}>
        <GlobalStyles redColor />
        <StyledCompTitle>Show styled components here</StyledCompTitle>
        <Header>
          My Styled header <Button>Header button</Button>
        </Header>
        <StyledCompContainer>
          <ThemeProvider theme={deriveTheme}>
            <Button
              bordercolor="yellow"
              onClick={() => {
                alert("clicked!");
              }}
            >
              Click Here 1
            </Button>
            <Button className="something">Click Here 2</Button>
            <Button>Click Here 3</Button>
          </ThemeProvider>
          <PrimaryButton bordercolor="blue">Primary button</PrimaryButton>
          <CounterStyled />
          <CounterStyledExtended initialValue={5} />
        </StyledCompContainer>
      </ThemeProvider>
    </React.Fragment>
  );
}
