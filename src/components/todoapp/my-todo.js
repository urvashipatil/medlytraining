import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./todo.css";
import TodoList from "./todo-list";
import TodoForm from "./todo-form.js";
import { TodoContext } from "./todo-context";
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

export default function MyTodo() {
  const [todos, setTodos] = useState([]);
  const { url, path } = useRouteMatch();
  const history = useHistory();
  console.log("url-path", url, path);

  const onTodoAdd = async (newtodo) => {
    let updatedTodo = { ...newtodo };
    updatedTodo.id = todos.length + 1;

    //call api
    await axios
      .post("https://jsonplaceholder.typicode.com/todos", updatedTodo)
      .then((response) => {
        setTodos([response.data, ...todos]);
        //rdeirect to todo list page
        history.push("/todo/list");
      });
  };

  const onTodoToggle = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const onDeleteTodo = (deleteTodoId) => {
    let updatedTodos = todos.filter((t) => t.id != deleteTodoId);
    setTodos(updatedTodos);
  };

  // [
  //   { id: 1, title: "my Task1", completed: true },
  //   { id: 2, title: "my Task2", completed: false },
  //   { id: 3, title: "my Task3", completed: false },
  //   { id: 4, title: "my Task4", completed: false },
  // ];

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    //   // console.log(response);
    //   setTodos(response.data);
    // });

    async function getTodos() {
      let response = await axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .catch(function (error) {
          if (error.response) {
            console.log("falls out of the range of 2xx");
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log("The request was made but no response was received");
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      setTodos(response.data);
    }

    getTodos();
  }, []);

  return (
    <React.Fragment>
      <div>My Todo App goes here</div>
      <TodoContext.Provider value={{ onTodoToggle, onDeleteTodo }}>
        <div>
          <span>
            <Link to={`${url}/list`}>Todo List</Link> |
          </span>
          <span>
            <Link to="/todo/add">Add Todo</Link> |
          </span>
        </div>
        <Switch>
          <Route path={`${path}/list`}>
            <TodoList
              todos={todos}
              // onTodoToggle={onTodoToggle}
              // onDeleteTodo={onDeleteTodo}
            ></TodoList>
          </Route>
          <Route path="/todo/add">
            <TodoForm onTodoAdd={onTodoAdd} />
          </Route>
        </Switch>
      </TodoContext.Provider>
    </React.Fragment>
  );
}
