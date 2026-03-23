import React from "react";
import { useState } from "react";
import Child from "./Child";
export default function App7() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>This is App7 Component</h3>
      <button onClick={() => setCounter(counter + 1)}>Update</button>
      <p>{counter}</p>
      <Child />
    </div>
  );
}
