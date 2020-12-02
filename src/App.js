import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
function App() {
  // useState returns an array
  // This is too time consuming so we should create a custom hook
  // The use from hook enables us to update the email and password with less code
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  // useEffect hook
  // This function gets called every time a component gets rendered
  useEffect(() => {
    console.log("rendered");
    // The dependency array allows you to trigger an effect based on the value that is changed
  }, [values.email, values.password]);
  let content = (
    <div>
      <input
        name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
    </div>
  );
  return content;
}

export default App;
