import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Dashbord = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const style = {
    height: "100vh",
    backgroundColor: isDark ? "#121212" : "#f0f0f0",
    color: isDark ? "#fff" : "#000",
    textAlign: "center",
    paddingTop: "100px",
  };

  return (
    <div style={style}>
      <h1>This is Admin Dashboard</h1>
      <h3>{isDark ? "Dark Mode" : "Light Mode"}</h3>
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Dashbord;
