import React, { useState, useEffect } from "react";
import useTitle from "../custom-hooks/use-title";
import useStorage from "../custom-hooks/use-storage";

export default function InputTextbox() {
  const [nameValue, setStoredName] = useStorage(
    "Name",
    "Default value",
    window.sessionStorage
  );

  const [testObject, setTestObject] = useStorage("MyObject", "asasas");

  const [inputdata, setInputdata] = useState(nameValue || "");

  // console.log("nameValue, setStoredName", nameValue, setStoredName);

  // setStoredName("asasasasas");

  // const [desiStoredValue, setDesign] = useLocalStorage("designation","");

  const [data2, setData2] = useState("");
  const setTitle = useTitle("Arch ");

  //Called on each render
  useEffect(() => {
    // console.log("On every renedr -my useEffect called.");
    // localStorage.setItem("Name", inputdata);
    return () => {
      console.log("useEffect cleanup on every render");
    };
  });

  //FirstTime
  useEffect(() => {
    // console.log("useEffect - called first time");
    setTestObject({ fname: "Medly" });
    return () => {
      // console.log("useEffect cleanup on first Time");
    };
  }, []);

  useEffect(() => {
    // console.log("useEffect - called on name change conditionally");
    // localStorage.setItem("Name", inputdata);
    setStoredName(inputdata);
    // setStoredName(() => inputdata + " appended");
    setTitle(inputdata);
    return () => {
      // console.log("useEffect cleanup on conditional useEffect");
    };
  }, [inputdata]);

  //First Time-- On mounting of compoment
  // //api calls , DOM elements or i wanted to attach events to dom
  // useEffect(() => {
  //   console.log("Mount- useEffect called.");
  //   localStorage.setItem("Name", inputdata);
  // }, []);

  //api calls , DOM elements or i wanted to attach events to dom
  //call useEffect conditionally
  // useEffect(() => {
  //   console.log("useEffect - Name got changed");
  //   localStorage.setItem("Name", inputdata);
  // }, [inputdata]);

  //useEffect to cleanup - on unmount
  // useEffect(() => {
  //   let interv = setInterval(() => {
  //     console.log("Interval getting called after 1 sec");
  //   }, 1000); // 1sec

  //   return () => {
  //     clearInterval(interv);
  //   };
  // }, []);

  const onChangeInput = (e) => {
    // console.log(e.target.value, e.target.name);
    setInputdata((prevState) => e.target.value);
  };
  const onChangeInput2 = (e) => {
    // console.log(e.target.value, e.target.name);
    setData2((prevState) => e.target.value);
  };
  return (
    <div className="input-text-box">
      <input
        name="text"
        type="text"
        value={inputdata}
        onChange={onChangeInput}
      ></input>
      <p>
        Hi - {inputdata} - {testObject.fname}
      </p>

      <input
        name="text"
        type="text"
        value={data2}
        onChange={onChangeInput2}
      ></input>
    </div>
  );
}
