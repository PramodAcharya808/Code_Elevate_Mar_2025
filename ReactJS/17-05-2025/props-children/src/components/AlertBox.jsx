import React from "react";

const AlertBox = ({ type, children }) => {
  const style = {
    padding: "10px",
    border: "1px solid",
    margin: "10px 0",
    backgroundColor: type === "success" ? "lightgreen" : "lightcoral",
    color: type === "success" ? "green" : "red",
  };

  return (
    <div style={style} className="container">
      <p>Alert</p>
      {children}
    </div>
  );
};

export default AlertBox;
