import React, { useState, Suspense, lazy } from "react";
import Counter from "./components/counter";
import CounterReducer from "./components/counter/counter-reducer";
// import InputTextbox from "./components/input-textbox";
// import MyTodo from "./components/todoapp/my-todo";
// import { ThemeContext } from "./theme-context";
import ThemeContextProvider from "./theme-context";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  NavLink,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";
import MyRenderPropComp from "./components/render-props-example";
const MyTodo = lazy(() => import("./components/todoapp/my-todo"));
const InputTextbox = lazy(() => import("./components/input-textbox"));

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
          <div>
            <NavLink activeClassName="active-link" to="/renderpropcomponent">
              Render Props
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
                {/* <CounterReducer step={5} /> */}
                <Counter />
              </Route>
              <PrivateRoute path="/todo">
                <Suspense fallback={<h3>Loading MyTodo...</h3>}>
                  <MyTodo />
                </Suspense>
              </PrivateRoute>
              <PrivateRoute path="/inputtext">
                <Suspense fallback={<h3>Loading MyTodo...</h3>}>
                  <InputTextbox />
                </Suspense>
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/renderpropcomponent">
                <MyRenderPropComp
                  render={() => {
                    return <h3>My first Render props component</h3>;
                  }}
                />
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

{
  /* <PrivateRoute path="/todo">
                <MyTodo /> 
    </PrivateRoute> */
}
const authentication = {
  isLoggedin: true,
};
function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest}>
      {authentication.isLoggedin ? (
        children
      ) : (
        <Redirect to={{ referer: rest.path, pathname: "/login" }} />
      )}
    </Route>
  );
}

function Login() {
  const location = useLocation();
  const history = useHistory();

  const onLogin = () => {
    authentication.isLoggedin = true;
    history.push(location.referer);
  };
  return (
    <div>
      Login Page here
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
