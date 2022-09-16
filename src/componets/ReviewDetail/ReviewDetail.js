import React, { useContext } from "react";
import { MyContext } from "../../App";
import Rattings from "../Rattings/Rattings";

const ReviewDetail = () => {
  const [review, setReivew] = useContext(MyContext);
  console.log(review, "not working detail arr");
  return (
    <div className="row container mx-auto g-3 my-4 mx-auto">
      <h3>Reviews</h3>
      {review.map(person => (
        <div className="col-md-4 border-r-slate-800 border-4 my-3 mx-3">
          <div className="bg-success border">
            <img className="rounded bg-gray-50" src={person.picture} alt="" />
          </div>
          <h4 className="text-1xl py-3">{person.name}</h4>
          <p>{person.text}</p>
          <Rattings value={person.rating}></Rattings>
          <img
            src="https://media.istockphoto.com/photos/or-five-stars-sign-symbol-on-white-background-illustration-ranking-picture-id1306258842?b=1&k=20&m=1306258842&s=170667a&w=0&h=cECXPjGqDqZxGklFI87z7TxHoqTQ1Iv0qaf34C4RurI=z"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewDetail;
