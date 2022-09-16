import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div>
      <div className="w-75 mx-auto p-5">
        <img
          className="w-100"
          src="https://draftss.com/wp-content/uploads/2021/07/Webp.net-gifmaker.gif"
          alt=""
        />
      </div>
      <Link className="text-right" to="/home">
        <button className="btn border-3  rounded bg-dark text-white bg-green-500 p-4 py-1">
          Back...
        </button>
      </Link>
    </div>
  );
};

export default Demo;
