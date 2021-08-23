import React, { useState, useEffect, useRef } from "react";

export default function TodoForm({ onTodoAdd }) {
  const [task, setTask] = useState({ title: "", completed: false });
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
  };
  const onClick = () => {
    onTodoAdd(task);
  };

  return (
    <div>
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
  );
}
