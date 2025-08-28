import React from 'react'

const hero = (props) => {
    // const hero ={
    // mind : "Ironman",
    // Power : "throw",
    // mota: "hulk",
    // god: "loki"


 return (
    <>
    <h1>Marvel Heros name </h1>
    <h2>Mind: {props.mind}</h2>
    <h2>Power: {props.Power}</h2>
    <h2>Mota: {props.mota}</h2>
    <h2>God: {props.god}</h2>
    </> 
  )
}
export default hero