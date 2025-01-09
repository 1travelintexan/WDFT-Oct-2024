import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
type countType = number;
function App() {
  const [count, setCount] = useState<countType>(0);

  return (
    <>
      <Navbar name="Ragnar" age={3} setCount={setCount} />
      <h1>Typescript</h1>
      <h2>Count: {count}</h2>
    </>
  );
}

export default App;
