import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { submitRating } from "../../redux/actions";

const StarRating = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleSubmit = () => {
    dispatch(submitRating(rating));
  };
  return (
    <div onSubmit={handleSubmit}>
      {[...new Array(5)].map((start, index) => {
        const ratingValue = index + 1;
        return (
          <label
            key={index}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <input
              id={`star-${index}`}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
              }}
            />
            {ratingValue <= (hover || rating) ? (
              <AiFillStar
                className="star"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#ffc018",
                }}
              />
            ) : (
              <AiOutlineStar
                className="star"
                style={{
                  width: "25px",
                  height: "25px",
                  color: "#ffc018",
                }}
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
