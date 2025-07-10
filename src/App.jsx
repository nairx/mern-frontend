import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Register from "./components/Register";
import "./App.css";
function App() {
  return (
    <div className="App-Container">
      <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1>
      <Register/>
      <h3>This is footer</h3>
    </div>
  );
}
export default App;
