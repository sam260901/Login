import React, { useState } from "react";
import "../../styles/Login.css";

function Login() {
  // State for storing username and password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle input change for both username and password fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic for logging in (you can update this with API calls)
    if (formData.username === "admin" && formData.password === "password") {
      alert("Invalid credentials!");
    } else {
      alert("Login Successful!");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

