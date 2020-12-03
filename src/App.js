import React, { useState, useEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

function App() {
  // useState returns an array
  // This is too time consuming so we should create a custom hook
  // The use from hook enables us to update the email and password with less code
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  // The initial value is now based in the localStorage
  // Remember to use the initializer function of useState to avoid re-rendering every count
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // Create a cache
  const storeCache = () => {
    let cacheName = "userInput";
    let url = `http://numbersapi.com/${count}/trivia`;
    caches.open(cacheName).then((cache) => {
      cache.add(url).then(() => {
        console.log(data);
      });
    });
  };

  storeCache();

  // How to save the state
  // Let's say we persist the value of count
  // The count will stay the same after the page is refreshed
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  let content = (
    <div>
      <h2>{!data ? "loading..." : data}</h2>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <button onClick={() => setCount((c) => c - 1)}>decrement</button>
    </div>
  );
  return content;
}

export default App;
