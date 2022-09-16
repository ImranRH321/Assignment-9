import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const Rattings = ({ value }) => {
  return (
    <div className="rattings">
      <span>
        <FontAwesomeIcon
          icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalf : faStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalf : faStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalf : faStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalf : faStar}
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalf : faStar}
        ></FontAwesomeIcon>
      </span>
    </div>
  );
};

export default Rattings;
