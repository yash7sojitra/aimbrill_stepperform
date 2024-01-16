import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white w-full h-full  p-5 shadow-lg rounded-2xl border-[1px]">
      {children}
    </div>
  );
};

export default Card;
