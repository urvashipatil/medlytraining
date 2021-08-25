import React, { useContext } from "react";
import TodoItem from "./todo-item";
import { ThemeContext } from "../../theme-context";

export default function TodoList({ todos }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <div>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              // onTodoToggle={onTodoToggle}
              // onDeleteTodo={onDeleteTodo}
            ></TodoItem>
          );
        })}
      </div>
      <div className="list-footer">
        {" "}
        <button
          onClick={() => {
            setTheme(theme == "theme-blue" ? "theme-black" : "theme-blue");
          }}
        >
          Toggle Theme
        </button>
      </div>
    </React.Fragment>
  );
}

TodoList.defaultProps = {
  todos: [],
};
