import React from "react";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  });

  return (
    <div>
      <p>Current Time:</p>
      <strong>{time}</strong>
    </div>
  );
};

export default Clock;
