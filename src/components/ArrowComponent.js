import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ArrowComponent = ({ prevCard, nextCard }) => {
  return (
    <>
      <span onClick={prevCard} className="arrow left">
        <FiChevronLeft />
      </span>
      <span onClick={nextCard} className="arrow right">
        <FiChevronRight />
      </span>
    </>
  );
};

export default ArrowComponent;
