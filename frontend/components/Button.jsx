import React from "react";

const Button = ({ text, className, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-primary px-6 py-3 rounded-full font-semibold ${className} cursor-pointer lg:px-4 py-2`}
    >
      {text}
    </button>
  );
};

export default Button;
