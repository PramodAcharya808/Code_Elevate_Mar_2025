import React from "react";
import AdminDashboard from "./components/AdminDashboard";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  let isOnline = false;

  if (isOnline) {
    return <>🟢 ONLINE</>;
  } else {
    return <>🔴 OFFLINE</>;
  }

  // return <div>{isOnline ? <>🟢 ONLINE</> : <>🔴 OFFLINE</>}</div>;
};

export default App;
