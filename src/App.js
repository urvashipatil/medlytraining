import React, { useState } from "react";
import Counter from "./components/counter";
import InputTextbox from "./components/input-textbox";
import MyTodo from "./components/todoapp/my-todo";
// import { ThemeContext } from "./theme-context";
import ThemeContextProvider from "./theme-context";

function App() {
  const [show, setShow] = useState(true);
  // const [theme, setTheme] = useState("theme-blue");
  return (
    <React.Fragment>
      <ThemeContextProvider>
        {/* <ThemeContext.Provider value={{theme,setTheme}}></ThemeContext.Provider> */}
        {/* <div>My First React App</div> */}
        <div>
          <Counter />
          <MyTodo />

          {/* <MyTodo /> */}

          {/* {settings.url}
        {show && <InputTextbox></InputTextbox>}
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          show/hide inputTextbox
        </button> */}
          {/* <button
            onClick={() => {
              setTheme(theme == "theme-blue" ? "theme-black" : "theme-blue");
            }}
          >
            Toggle Theme
          </button> */}
        </div>
      </ThemeContextProvider>
    </React.Fragment>
  );
}

export default App;
