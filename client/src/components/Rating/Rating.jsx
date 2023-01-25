import React from "react";
import { AiFillStar } from "react-icons/ai";

const StarRating = () => {
  return (
    <div>
      {[...new Array(5)].map((start) => {
        return <AiFillStar />;
      })}
    </div>
  );
};

export default StarRating;
