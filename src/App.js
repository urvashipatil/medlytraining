import React, { useState } from "react";
import Counter from "./components/counter";
import CounterReducer from "./components/counter/counter-reducer";
import InputTextbox from "./components/input-textbox";
import MyTodo from "./components/todoapp/my-todo";
// import { ThemeContext } from "./theme-context";
import ThemeContextProvider from "./theme-context";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  // const [theme, setTheme] = useState("theme-blue");
  return (
    <React.Fragment>
      <ThemeContextProvider>
        <Router>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/counter">
              Counter
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active-link" to="/todo">
              Todo
            </NavLink>
          </div>
          <div>
            <NavLink
              activeClassName="active-link"
              to={{ pathname: "/inputtext", state: "asas" }}
            >
              Input Text
            </NavLink>
          </div>
          {/* <ThemeContext.Provider value={{theme,setTheme}}></ThemeContext.Provider> */}
          {/* <div>My First React App</div> */}
          <div className="container">
            <Switch>
              {/* <Route path="/counter/:name">
                <CounterReducer step={5} />
              </Route> */}
              <Route path="/counter">
                <CounterReducer step={5} />
              </Route>
              <Route path="/todo">
                <MyTodo />
              </Route>
              <Route path="/inputtext">
                <InputTextbox />
              </Route>
              <Route exact path="/">
                <div>
                  <div>Landing Page</div>
                  <CounterReducer step={5} />
                </div>
              </Route>
              <Route>
                <InvalidPath />
              </Route>
            </Switch>

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
        </Router>
      </ThemeContextProvider>
    </React.Fragment>
  );
}

export default App;

function InvalidPath() {
  return <div>Invalid Path. Please check again...</div>;
}
