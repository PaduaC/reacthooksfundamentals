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

  // const [showHello, setShowHello] = useState(true);
  // useEffect hook
  // This function gets called every time a component gets rendered
  // useEffect(() => {
  //   // This work the same as componentDidMount() and componentWillUnmount()
  //   // Event listener for mouse movement
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [values.email]);

  /* You can have multiple instances of useEffect */
  useEffect(() => {
    console.log("mount1");
  }, []);
  useEffect(() => {
    console.log("mount2");
  }, []);

  let content = (
    <div>
      {/* The ! negates setShowHello() */}
      {/* <button onClick={() => setShowHello(!showHello)}>Click me</button> */}
      {/* {showHello && <Hello />} */}
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
