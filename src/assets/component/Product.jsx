import React from 'react'

const Product = ({title,model,price,buy}) =>{      

  return (
    <>
  <h1>Product: {title}</h1>
  <h1>Model: {model}</h1>
  <h1>Price: {price}</h1>
  <h1>Buy: {buy}</h1>
  </>
  )}
export default Product