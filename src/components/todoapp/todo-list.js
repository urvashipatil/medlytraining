import React from "react";
import TodoItem from "./todo-item";

export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => {
        return <TodoItem key={todo.id} todo={todo}></TodoItem>;
      })}
    </div>
  );
}

TodoList.defaultProps = {
  todos: [],
};
