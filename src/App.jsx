import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

const themeContext = createContext();


function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <themeContext.Provider value={[theme, setTheme]}>
        <div id="container" style={{backgroundColor: theme==='light'? 'orange': 'green'}}>
           <ChildA/>
        </div>
        
      </themeContext.Provider>
    </>
  )
}

export default App
export{themeContext}
