**_Toggle Theme React App_**

A simple React application that demonstrates how to toggle between **Light Mode** and **Dark Mode** using **React Context API**, **useState**, and **useContext**. This project shows **global state management**, clean component structure, and basic persistent theme logic.

📌 **_Features_**

* 🔄 Toggle between light and dark modes

* 🌈 Dynamic background and text color based on theme

* 🧩 Uses React Context to pass theme across components

* 🏗️ Clean folder structure with multiple child components

* ⚡ Built using Vite + React

  📁 **_Folder Structure_**

  toggle-theme/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── ChildA.jsx
│   │   ├── ChildB.jsx
│   │   ├── ChildC.jsx
│   │   └── ...
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore

🚀 **_How It Works_**

1. A context is created in App.jsx and shared with children:

const themeContext = createContext();

2. Toggle Theme Function

Updates the theme on button click:

setTheme(theme === 'light' ? 'dark' : 'light');

3. Using Context in Children

Child components access the theme using:

const [theme, setTheme] = useContext(themeContext);

🖥️ **_How to Run the Project_**

1. Clone the repo:

   git clone https://github.com/saumya-30-verma/Toggle-theme.git

2. Install dependencies

   npm install

3. Start the development server

   npm run dev

✨ **_Technologies Used_**

* React

* JavaScript (ES6+)

* Vite

* CSS

* React Hooks: useState, useContext

💡 **_Learnings / Takeaways_**

* Implemented global theme management using React Context

* Learned how to share state across multiple components

* Used localStorage for persistent user preferences

* Built a clean and reusable component structure
