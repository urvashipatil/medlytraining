import React, { useState, useEffect, useRef } from "react";
import { Prompt } from "react-router-dom";

export default function TodoForm({ onTodoAdd }) {
  const [task, setTask] = useState({ title: "", completed: false });
  const [isDirty, setIsDirty] = useState(false);
  const titleRef = useRef(null);
  // const titleRefValue = useRef("");
  // console.log("ref", titleRef);

  // useEffect(() => {
  //   // document.getElementById("title").focus();
  //   titleRefValue.current = task;
  // });

  useEffect(() => {
    // document.getElementById("title").focus();
    console.log("titleRef", titleRef);
    titleRef.current.focus();
  }, []);

  const onTaskChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    setIsDirty(true);
  };
  const onClick = () => {
    onTodoAdd(task);
  };

  return (
    <div>
      <Prompt
        when={isDirty}
        message={() =>
          "There are some unsaved changes. Do you want to go away?"
        }
      />
      <div className="form-title">Add Task</div>
      <div className="form-control">
        <input
          ref={titleRef}
          name="title"
          id="title"
          type="text"
          value={task.title}
          onChange={onTaskChange}
        ></input>

        {/* {JSON.stringify(titleRefValue.current)} */}
        <button onClick={onClick}>Add Task</button>
      </div>
    </div>
  );
}
