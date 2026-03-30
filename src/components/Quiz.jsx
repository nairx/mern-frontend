import React from "react";
import { useState } from "react";
import Profile from "./Profile";
export default function Quiz() {
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState();
  const questions = [
    {
      q: "2+3",
      o: ["5", "7", "9", "6"],
      a: 0,
    },
    {
      q: "7+3",
      o: ["5", "7", "10", "6"],
      a: 2,
    },
    {
      q: "5+4",
      o: ["9", "7", "5", "6"],
      a: 0,
    },
  ];
  const handleSubmit = () => {
    setScore(score + 1);
  };
  return (
    <div>
      <h2>Quiz</h2>
      <Profile score={score} />
      <hr />
      {questions.map((question, index) => (
        <div key={index}>
          <p>
            {index + 1}.{question.q}
          </p>
          <p>
            A.
            <input type="radio" name={`q${index}`} value={0} /> {question.o[0]}
            B.
            <input type="radio" name={`q${index}`} value={1} /> {question.o[1]}
            C.
            <input type="radio" name={`q${index}`} value={2} /> {question.o[2]}
            D.
            <input type="radio" name={`q${index}`} value={3} /> {question.o[3]}
          </p>
          <hr />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
