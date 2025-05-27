import React from "react";
import Dashbord from "./components/Dashbord";
import { ThemeProvider } from "./context/ThemeContext";
import NewsLetter from "./components/NewsLetter";

const App = () => {
  return (
    <ThemeProvider>
      <Dashbord />
      <NewsLetter />
    </ThemeProvider>
  );
};

export default App;
