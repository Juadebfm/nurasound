import React from "react";

const Button = ({ text, icons, className }) => {
  return (
    <button className={`px-5 py-2 ${className}`}>
      {text}
      {icons}
    </button>
  );
};

export default Button;
