import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const StarRating = ({ numStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currIndex) {
    setRating(currIndex);
  }

  function handleMouseEnter(currIndex) {
    setHover(currIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
