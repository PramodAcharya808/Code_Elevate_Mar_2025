import React from "react";
import AlertBox from "./components/AlertBox";

const App = () => {
  return (
    <div>
      <AlertBox type="success">
        <h4>Success!</h4>
        <p>Your operation was successfull.</p>
      </AlertBox>

      <AlertBox type="errro">
        <h4>404 not found!</h4>
        <p>User not found.</p>
      </AlertBox>
    </div>
  );
};

export default App;
