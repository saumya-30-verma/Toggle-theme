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
      <div id="container">
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export {themeContext};

