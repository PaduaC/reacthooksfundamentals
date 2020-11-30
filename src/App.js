import React, { useState } from "react";
import { useForm } from "./useForm";
function App() {
  // useState returns an array
  // This is too time consuming so we should create a custom hook
  // The use from hook enables us to update the email and password with less code
  const [values, handleChange] = useForm({ email: "", password: "" });

  let content = (
    <div>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
  return content;
}

export default App;
