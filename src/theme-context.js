import React, { useState } from "react";

export const ThemeContext = React.createContext({ theme: "theme-black" });

export default function ({ children }) {
  const [theme, setTheme] = useState("theme-blue");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
