import React from 'react'

const age = ({name, age}) => {
    age > 18 ? console.log("You can drive") : console.log("You can't drive");

  return (
    <>
        <h1>Name = {name}</h1>
        <h2>Age ={age}</h2>
        <h3>{age >= 18 ? <h1>You can drive</h1> : <h1>You can'n drive</h1>}</h3>
        </>
  )
}

export default age