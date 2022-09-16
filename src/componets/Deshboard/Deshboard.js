import React from "react";
import MyLineChat from "./MyLineChat";
import MyLIneChat2 from "./MyLIneChat2";
import '../../styles/deshboard.css'

const Deshboard = () => {
  return (
    <div className="container deshboard  mt-5">
      <div className="char_1">
        <div >
        <MyLineChat />
        </div>
      </div>
      <div className="char_2 ">
        <div>
        <MyLIneChat2/>
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
