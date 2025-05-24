import React, { useState } from "react";
import "./App.css";
import UseRef from "./components/UseRef";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setIsSubmited(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData); // API Call will be made
    setIsSubmited(true);
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Contact Me</button>
      </form>

      {isSubmited && <p className="success">Form Submited successfully ✅</p>}

      <h4>Use Ref Form</h4>
      <br />
      <UseRef />
    </div>
  );
};

export default App;

// login/signup forms
// profile update forms
// feedback form
// e-commerce checkout form
