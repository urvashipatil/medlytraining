import React, { useState, useEffect } from "react";

export default function useTitle(initialTitle) {
  const [state, setState] = useState(initialTitle || "Some Title");

  useEffect(() => {
    document.title = `${state}`;
  }, [state]);

  return setState;
}
