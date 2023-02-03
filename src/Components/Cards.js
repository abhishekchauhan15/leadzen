import React from "react";
import CardInfo from "./CardInfo";

const Cards = ({ showItems }) => {
  return (
    <div>
      {showItems.map((item, index) => (
        <CardInfo key={index} item={item}  />
      ))}
    </div>
  );
};

export default Cards;
