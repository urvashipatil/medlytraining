import React, { useState } from "react";
import Counter from "./components/counter";
import InputTextbox from "./components/input-textbox";
import MyTodo from "./components/todoapp/my-todo";

function App() {
  const [show, setShow] = useState(true);
  return (
    <React.Fragment>
      {/* <div>My First React App</div> */}
      <div>
        <MyTodo />
        {/* <Counter /> */}
        {/* <MyTodo /> */}

        {/* {settings.url}
        {show && <InputTextbox></InputTextbox>}
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          show/hide inputTextbox
        </button> */}
      </div>
    </React.Fragment>
  );
}

export default App;
