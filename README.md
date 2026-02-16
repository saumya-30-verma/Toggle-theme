**Toggle Theme React App**

A simple React application that demonstrates how to toggle between Light Mode and Dark Mode using React Context API, useState, useEffect, and useContext. This project showcases global state management, persistent theme storage, and a clean component structure.

📌 **Features:**

🔄 Toggle between light and dark modes with a single button click

💾 Persistent theme preference using localStorage

🌈 Dynamic styling based on selected theme

🧩 Uses React Context to manage theme state globally

⚡ Built with Vite for fast development

📁 **Folder Structure:**

    toggle-theme/
    │
    ├── src/
    │   ├── App.jsx                 # Main component with context provider
    │   ├── App.css                  # Styling for container and theme
    │   ├── components/
    │   │   └── ChildA.jsx           # Child component with toggle button
    │   └── main.jsx                  # Application entry point
    │
    ├── package.json                   # Project dependencies
    ├── vite.config.js                 # Vite configuration
    └── README.md                      # Project documentation

🚀 **How It Works:** 

**Context Creation**

A context is created in App.jsx and exported for use in child components:

    javascript
    const ThemeContext = createContext();
    export { ThemeContext };
    
**Theme State with Persistence**

The theme state initializes from localStorage or defaults to "light":

    javascript
    const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
    });
**Saving Theme Changes**

The useEffect hook saves the theme to localStorage whenever it changes:

    javascript
    useEffect(() => {
    localStorage.setItem("theme", theme);
    }, [theme]);
**Providing Context**

The ThemeContext.Provider wraps the child component, making the theme state and setter available throughout the component tree:

    javascript
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`container ${theme}`}>
    <ChildA />
    </div>
    </ThemeContext.Provider>
**Using Context in Child Component**

ChildA.jsx consumes the context and provides the toggle functionality:

    javascript
    const { theme, setTheme } = useContext(ThemeContext);

    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
     Toggle Theme
    </button>
**Styling**

The container div applies dynamic classes for theme-based styling:

    css
    #container {
    height: 400px;
    width: 400px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aquamarine;
}

🖥️ **How to Run the Project:**

1. Clone the repository:

       git clone https://github.com/saumya-30-verma/Toggle-theme.git
       cd Toggle-theme

2. Install dependencies:

       npm install
   
3. Start the development server:

       npm run dev
   
4. Open your browser:
   
       Navigate to http://localhost:5173 to view the application.

✨ **Technologies Used:**

- React - Frontend library for building user interfaces

- JavaScript (ES6+) - Modern JavaScript features

- Vite - Build tool for fast development

- CSS - Styling for components

- React Hooks - useState, useEffect, useContext

- Context API - Global state management

💡 **Key Concepts Demonstrated:**

- Context API: Creating and providing context for global state management

- useState Hook: Managing local component state

- useEffect Hook: Performing side effects (localStorage updates)

- useContext Hook: Consuming context in child components

- localStorage: Persisting user preferences across sessions

- Lazy Initialization: Optimizing state initialization with a function

🎨 **Theme Customization:**

To add theme-specific styling, you can extend the CSS:

    .light {
     background-color: #ffffff;
     color: #333333;
    }

    .dark {
    background-color: #333333;
    color: #ffffff;
    }
