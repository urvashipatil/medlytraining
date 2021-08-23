import React from "react";

function TodoItem(props) {
  const { todo, onTodoToggle } = props;
  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onDoubleClick={() => {
        onTodoToggle(todo.id);
      }}
    >
      {todo.title} <span class="fl-right">☒</span>
    </div>
  );
}

export default TodoItem;
