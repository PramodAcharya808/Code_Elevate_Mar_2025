import React, { useState } from "react";

const UseStateDemo = () => {
  const [counter, setCounter] = useState(0);

  const handleOnClickCounter = () => {
    setCounter(counter + 1);
  };

  const handleonClickClickNegative = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>{counter}</p>
      <button onClick={handleOnClickCounter}>+</button>
      <button onClick={handleonClickClickNegative}>-</button>
    </div>
  );
};

export default UseStateDemo;
