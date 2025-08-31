import React from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const arr = [
    { id: 'mern001', course_name: "Mern Stack", price: 10000, duration: "6month" ,},
    { id: 'js001', course_name: "js_dev", price: 20000, duration: "6month" ,},
    { id: 'c001', course_name: "c++_dev", price: 30000, duration: "6month" ,},
    { id: 'py001', course_name: "python_dev", price: 40000, duration: "6month" ,},
    { id: 'fullstack001', course_name: "full Stack", price: 50000, duration: "6month" ,},
    { id: 'react001', course_name: "React.js", price: 60000, duration: "6month" ,},
  ];
  return (
    <div>
      <ul>
        {arr.map((data) => (
          <div key={data.id}>
            <li>
              <Link to={`/courses/${data.id}`}>{data.course_name}</Link>{" "}
              </li>  
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Product;
