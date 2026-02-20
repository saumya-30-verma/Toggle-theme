import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {

  const {theme, setTheme} = useContext(ThemeContext);

  function handleClick(){
    if (theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  }
  return (
    <div>
      <h1 style={{color: "red"}}>VISIBLE TEXT</h1>
      <button onClick={handleClick}>
        Toggle theme
         Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  )
}

export default ChildC
