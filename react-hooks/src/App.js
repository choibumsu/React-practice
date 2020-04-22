import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [item, setItem] = useState(1);
  const increaseItem = () => setItem(item + 1);
  const decreaseItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={increaseItem}>Increment</button>
      <button onClick={decreaseItem}>Decrement</button>
    </div>
  );
};

export default App;
