import React from "react";

const EventHandler = ({ handleOnClickGreenBtn }) => {
  // console.log(handleOnClickGreenBtn);

  // const handleOnClickGreenBtn = (userName) => {
  //   alert(`Welcome back ${userName}`);
  //   console.log("Green button clicked");
  // };

  // const handleOnChangeGreenBtn = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div
    // style={{
    //   background: "green",
    //   padding: "10px",
    //   marginLeft: "20px",
    // }}
    >
      <button
        style={{
          background: "green",
          padding: "10px",
          marginLeft: "20px",
        }}
        onClick={() => {
          handleOnClickGreenBtn("Pramod");
        }}
      >
        Login
      </button>
      {/* <input type="text" name="" id="" onChange={handleOnChangeGreenBtn} /> */}
    </div>
  );
};

export default EventHandler;
