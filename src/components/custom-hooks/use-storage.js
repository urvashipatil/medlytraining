import React, { useState, useEffect } from "react";

export default function useStorage(
  key,
  initialVal,
  storage = window.localStorage,
  serialize = JSON.stringify,
  derialize = JSON.parse
) {
  // let myStorage = storage == "loca"
  const [storedValue, setStoredValue] = useState(() => {
    const item = derialize(storage.getItem(key));
    return item ? item : initialVal;
  });

  const setValue = (value) => {
    let updatedValue = value instanceof Function ? value(storedValue) : value;
    storage.setItem(key, serialize(updatedValue));
    setStoredValue(updatedValue);
  };

  return [storedValue, setValue];
}

// export default function useLocalStorage(key, initialVal) {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = JSON.parse(localStorage.getItem(key));
//     return item ? item : initialVal;
//   });

//   const setValue = (value) => {
//     let updatedValue = value instanceof Function ? value(storedValue) : value;
//     localStorage.setItem(key, JSON.stringify(updatedValue));
//     setStoredValue(updatedValue);
//   };

//   return [storedValue, setValue];
// }
