import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NewsLetter = () => {
  const { isDark } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDark ? "#000" : "#f5f5f5",
    color: isDark ? "white" : "black",
  };

  return (
    <div style={styles}>
      <h1>NewsLetter Box Below</h1>
    </div>
  );
};

export default NewsLetter;
