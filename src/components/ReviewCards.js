import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCards = ({ person, positionClass }) => {
  const { image, name, title, quote } = person;
  return (
    <div className={`cards ${positionClass}`}>
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p className="title">{title}</p>
      <p>{quote}</p>
      <div className="quote-icon">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default ReviewCards;
