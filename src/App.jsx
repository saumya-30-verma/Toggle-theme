import { createContext, useEffect, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };

