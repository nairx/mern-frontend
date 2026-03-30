import React, { useState } from "react";
import useFetch from "./useFetch";
import { useTransition } from "react";
export default function App10() {
  const [text, setText] = useState();
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";
  const bigList = useFetch(url);
  const handleChange = (e) => {
    setText(e.target.value);
    startTransition(() => {
      const filtered = bigList.filter((item) => item.title.includes(text));
      setList(filtered);
    });
  };
  return (
    <div>
      <p>
        <input type="text" onChange={handleChange} />
      </p>
      {isPending && <p>Loading...</p>}
      {list.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}
