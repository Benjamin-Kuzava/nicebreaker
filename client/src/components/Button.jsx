import React from "react";

function Button(props) {
  const { text, disabled } = props;
  return (
    <button
      className={`font-bold text-white bg-blue-medium border 
      border-blue-medium rounded px-4 py-2 m-4 
      shadow-md opacity-${disabled ? "60" : "100"} 
      ${!disabled && "transition-all transform hover:scale-105"}`}
    >
      {text}
    </button>
  );
}

export default Button;
