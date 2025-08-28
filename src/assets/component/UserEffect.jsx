import React from 'react'
import { useEffect, useState } from 'react'
const UserEffect = () => {

    const [counter, setCounter] = useState(0)
    useEffect(() => {
        document.title = counter;
        console.log("useEfect is running....|||");
    }, [counter]);

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Increment</button>

    </div>
  )
}

export default UserEffect