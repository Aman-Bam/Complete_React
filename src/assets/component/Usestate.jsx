import React, { useState } from "react";
import Laptop from "./Laptop";
const Counter = () => {

    const [Counter, setCounter] = useState(0)

  const increseby1 = () => {
    setCounter(Counter + 1)
    console.log("counter = ", Counter)
  };

  const decreseby1 = () => {
    setCounter(Counter - 1)
    console.log("counter = ", Counter)
  };

  return (
    <div>
      <h1>{Counter}</h1>
      <button onClick={increseby1}>Increase</button>
      <button onClick={decreseby1}>Decrease</button>
    </div>
  )
}

export default Counter;
