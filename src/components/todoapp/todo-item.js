import React, { useContext } from "react";
import { TodoContext } from "./todo-context";

import { ThemeContext } from "../../theme-context";

function TodoItem(props) {
  const { onTodoToggle, onDeleteTodo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  const { todo } = props;
  return (
    <div
      className={`todo-item ${theme} ${todo.completed ? "completed" : ""}`}
      onDoubleClick={() => {
        onTodoToggle(todo.id);
      }}
    >
      {todo.title}{" "}
      <span
        className="fl-right"
        onClick={() => {
          onDeleteTodo(todo.id);
        }}
      >
        ☒
      </span>
    </div>
  );
}

export default TodoItem;
