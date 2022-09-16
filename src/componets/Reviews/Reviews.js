import { faStairs, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";

const Reviews = () => {
  const [review, setReivew] = useReview();
  // console.log(review);
  return (
    <div className="bg-dark py-4">
      <div className="row container text-center gx-4 bg-dark text-warning">
        <h1 className="text-5xl text-center my-5">Customer Reviews</h1>
        {review.slice(0, 3).map(client => (
          <div className="col-md-4 p-2 ">
            <div className="border py-3">
              <div className="w-25 text-center mx-auto">
                <img
                  className="w-100 border-3"
                  style={{ borderRadius: "30%" }}
                  src={client.picture}
                  alt=""
                />
              </div>
              <h1 className="py-3 text-4xl ">{client.name}</h1>
              <h4>{client.text}</h4>
              <p>rating: {client.rating}</p>
              <p>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          to={`/detail`}
          className="btn btn-primary w-25 text-center mx-auto"
        >
          Explore All
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
