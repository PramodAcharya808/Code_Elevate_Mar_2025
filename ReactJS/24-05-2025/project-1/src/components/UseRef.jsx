import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="click button to focus" />
      <br />
      <br />
      <button onClick={handleFocus}>Click to move Focus on Input</button>
    </div>
  );
};

export default UseRef;
