import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Deshboard from "../Deshboard/Deshboard";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
   <div>
      <div className="row mt-2 gy-5 gx-5 flex " >
      <h1 className="text-success">Marketing...</h1>
      <div className="col-md-6">
        <div className="text-center">
          <h1 className="text-primary text-4xl">Marketing Product Salas</h1>
          <h4 className="text-3xl py-3">Marketing Orders</h4>
          <p className="text-muted mb-4">
            Simple Product store Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis delectus officia 
          </p>
          <Link
            to="/demo"
            className="bg-success  text-white px-5  py-3 border-1 mt-5 rounded"
          >
            <span className="text-1xl">Overview</span>
          </Link>
        </div>
      </div>
      <div className="col-md-6  border-1">
        <div className="p-4">
          <img
            className="w-100 h-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0JbVoi0ppJptMEUrEbXiENrv0hBE3oxU6Q&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
    <Reviews/>
    
    <Deshboard/>
    <Blogs/>
    <About/>
   </div>
  );
};

export default Home;
