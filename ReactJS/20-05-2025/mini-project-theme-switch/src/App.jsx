import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      return !prev;
    });
  };

  return (
    <div className={isDarkMode ? "mainBg dark" : "mainBg light"}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button
        className={isDarkMode ? "toggleThemeBtnLight" : "toggleThemeBtnDark"}
        onClick={handleToggleTheme}
      >
        Switch to {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default App;
