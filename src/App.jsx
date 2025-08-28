import React from "react";
import Product from "./assets/component/Product";
import Hero from "./assets/component/hero";
import Marvelsalary from "./assets/component/marvelsalary";
import Age from "./assets/component/age";
import Laptop from "./assets/component/Laptop";
import Event from "./assets/component/event";
import Counter from "./assets/component/Usestate";
import Map from "./assets/component/Map";
import Filter from "./assets/component/Filter";
import UserEffect from "./assets/component/UserEffect";
import Fetchdata from "./assets/component/Fetchdata";
import Form from "./assets/component/form";

const App = () => {
  return (
    <>
      {/* <div>
        <Product
          title="iphone 14"
          model="promax"
          price="70000"
          Buy="YES/NO"
        ></Product>
        <Product
          title="iphone 15"
          model="promax"
          price="80000"
          Buy="YES/NO"
        ></Product>
        <Product
          title="iphone 16"
          model="promax"
          price="90000"
          Buy="YES/NO"
        ></Product>
        <Product
          title="iphone 17"
          model="promax"
          price="100000"
          Buy="YES/NO"
        ></Product>
        <Product
          title="iphone 18"
          model="promax"
          price="150000"
          Buy="YES/NO"
        ></Product>
      </div>

      <div>
        <Marvelsalary name="Ironman" age="100" salary={100000} />
        <Marvelsalary name="Spiderman" age="69" salary={300} />
        <Marvelsalary name="hulk" age="650" salary={50} />
      </div>

      <div>
        <Age name="aman" age="18"></Age>
      </div>

      <div style={{ backgroundColor: "gray", padding: "10px", margin: "10px" }}>
        <Laptop Brandname="Acer" Model={"ALG 15-52"} Price={50000}></Laptop>
      </div>

      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          margin: "10px",
        }}
      >
        <Laptop Brandname="LENOVO" Model={"A5"} Price={40000}></Laptop>
      </div>

       <div>
        <Laptop Brandname="Hp" Model={"HP-52"} Price={30000}></Laptop>
      </div>

      <div>
        <Laptop Brandname="Asus" Model={"A6"} Price={45000}></Laptop>
      </div>

      <Event/>
       <Counter /> 

      <div>
        <Map />
      </div>

      <div>
        <Filter />
      </div> */}

        {/* <div> 

        <UserEffect />

        </div> */}

        {/* <div>
          <Fetchdata /> 
          </div> */}

          <div className="text-white">
            <Form />
          </div>
        
    </>
  );
};
export default App;
