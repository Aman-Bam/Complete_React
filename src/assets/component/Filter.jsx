import React from 'react'

const Filter = () => {
  const products = [
    { id:1, title: "iphone-16", category: "mobiles", price:60000 },
    { id:2, title: "iphone-17", category: "mobiles", price:60000 },
    { id:3, title: "iphone-15", category: "mobiles", price:60000 },
    { id:4, title: "Acer-1", category: "laptop", price:90000 },
    { id:5, title: "Acer-2", category: "laptop", price:80000 },
    { id:6, title: "Acer-3", category: "laptop", price:100000 },
  ];
  const filterData = products.filter((data) => data.category=="mobiles");
  console.log(filterData);

  return (
    <div>
      {filterData.map((data) =><div key ={data.id}>
        <h1>{data.title}</h1>
        <p>{data.price}</p>
        </div>)}
    </div>
  )
}
export default Filter
