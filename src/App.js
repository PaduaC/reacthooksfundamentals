import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
function App() {
  // useState returns an array
  // This is too time consuming so we should create a custom hook
  // The use from hook enables us to update the email and password with less code
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const [showHello, setShowHello] = useState(true);
  // useEffect hook
  // This function gets called every time a component gets rendered
  // useEffect(() => {
  //   // This work the same as componentDidMount() and componentWillUnmount()
  //   console.log("render");
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);
  let content = (
    <div>
      {/* The ! negates setShowHello() */}
      <button onClick={() => setShowHello(!showHello)}>Click me</button>
      {showHello && <Hello />}
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
