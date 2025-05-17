import React from "react";
import FeedBackForm from "./components/FeedBackForm";
import ReviewForm from "./components/ReviewForm";

const App = () => {
  return (
    <div className="">
      Please fill in the form below.
      <FeedBackForm />
      Review form below.
      <ReviewForm></ReviewForm>
    </div>
  );
};

export default App;
