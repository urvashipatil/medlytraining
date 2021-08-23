import React from "react";

function TodoItem(props) {
  const { todo } = props;
  return (
    <div>
      <div className="todo-item">{todo.title}</div>
    </div>
  );
}

export default TodoItem;
