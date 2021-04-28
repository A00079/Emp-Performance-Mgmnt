import React from "react";

const Card = ({ shadow, color, children, rounded, classes }) => {
  return (
    <div
      className={`shadow-${shadow} ${
        color === "white" && "bg-white"
      } bg-${color}-50  rounded-${rounded} ${classes}`}
    >
      {children}
    </div>
  );
};

export default Card;
