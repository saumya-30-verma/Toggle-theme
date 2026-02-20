import { createContext, useState, useEffect } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const ThemeContext = createContext();

function App() {

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemTheme();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;   
  }, [theme]);

  return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    <div id="container" style={{ padding: "50px" }}>
      <h1>Toggle theme</h1>
      <ChildA />
    </div>
  </ThemeContext.Provider>
);
}

export default App;
export {ThemeContext};

