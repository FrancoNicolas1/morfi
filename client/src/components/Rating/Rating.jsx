import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { submitRating } from "../../redux/actions";

const StarRating = ({ id }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const vote = JSON.parse(localStorage.getItem("starVoted"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitRating(rating, id));
    localStorage.setItem(
      "StarVoted",
      JSON.stringify({ voted: true, value: rating, restaurantId: id })
    );
  };
  console.log(rating);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {vote && vote.restaurantId === id
          ? "usted ya votó"
          : [...new Array(5)].map((start, index) => {
              const ratingValue = index + 1;
              return (
                <label
                  key={index}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                >
                  {ratingValue <= (hover || rating) ? (
                    <AiFillStar
                      onClick={() => {
                        setRating(ratingValue);
                      }}
                      className="star"
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#ffc018",
                      }}
                    ></AiFillStar>
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
      <button onClick={handleSubmit}>EL BOTON</button>
    </div>
  );
};

export default StarRating;
