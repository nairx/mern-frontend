import React from "react";
import useFetch from "./useFetch";
export default function App9() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const users = useFetch(url);
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

// import React from "react";
// import { useState, useEffect } from "react";
// export default function App9() {
//   const [users, setUsers] = useState([]);
//   const url = "https://jsonplaceholder.typicode.com/users";
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   return (
//     <div>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </div>
//   );
// }
