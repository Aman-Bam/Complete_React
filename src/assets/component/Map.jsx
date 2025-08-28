import React from 'react'

const Map = () => {

    let product = [
        {id:1, title: "acer-1", price:50000},
        {id:2, title: "acer-2", price:60000},
        {id:3, title: "acer-3", price:70000},
        {id:4, title: "acer-4", price:80000},
       ];
  return (
    <div>
      {product.map((data) => (
      <div key={data.id}>
      <h1>Title = {data.title}</h1>
      <h1>Price = {data.price}</h1>
     </div>
      ))}
  </div>
  );
};
export default Map;