import React, { useEffect, useState } from "react";
import axios from "axios";
import "./todo.css";
import TodoList from "./todo-list";
import TodoForm from "./todo-form.js";

export default function MyTodo() {
  const [todos, setTodos] = useState([]);

  const onTodoAdd = async (newtodo) => {
    let updatedTodo = { ...newtodo };
    updatedTodo.id = todos.length + 1;

    //call api
    await axios
      .post("https://jsonplaceholder.typicode.com/todos", updatedTodo)
      .then((response) => {
        setTodos([response.data, ...todos]);
      });
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
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    }

    getTodos();
  }, []);

  return (
    <React.Fragment>
      <div>My Todo App goes here</div>
      <TodoForm onTodoAdd={onTodoAdd} />
      <TodoList todos={todos}></TodoList>
    </React.Fragment>
  );
}
