import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const numberOfDrinks = () => {
    setCount(count + 1);
    if (count === 2) {
      alert("You drink wayyyy too much caffeine, Please stop");
    } else if (count >= 4) {
      alert("Srsly stop. You need to see a doctor!");
    }
  };

  let content = (
    <div>
      <p>Number of times I get up to make a cup of coffee: {count}</p>
      <button onClick={numberOfDrinks}>Click me!</button>
    </div>
  );
  return content;
}

export default App;
