import React, { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";
export default function App8() {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>App8</h1>
      <p>This is App8 Component</p>
      <p>
        <button onClick={() => setNum(num + 1)}>Update Num({num})</button>
        <button onClick={() => setScore(score + 1)}>
          Update Score({score})
        </button>
      </p>
      <ExpensiveComponent num={num} />
    </div>
  );
}
