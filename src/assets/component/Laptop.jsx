import React from 'react'

const Laptop = ({Brandname,Model,Price}) => {

    const obj = {
        backgroundColor : "gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
        border:"2px solid black",
}
  return (
    <div style={obj}>
    <h1>Brandname = {Brandname}</h1>
    <h1>Model = {Model}</h1>
    <h1>Price = {Price}</h1>
   </div>
)}

export default Laptop
