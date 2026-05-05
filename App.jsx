import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={increase}>Increment</button>

        <button onClick={decrease} disabled={count === 0}>
          Decrease
        </button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
