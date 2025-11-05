import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? assets.starFilled : assets.starEmpty}
          alt={index < rating ? "filled star" : "empty star"}
          className="w-4 h-4"
        />
      ))}
    </div>
  );
};

export default StarRating;
