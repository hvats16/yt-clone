import React from "react";

export const Button = ({ buttonNames }) => {
  return (
    <div>
      {buttonNames.map((buttonName) => (
        <button className="px-5 py-2 m-3 bg-gray-100 rounded-lg" key={buttonName}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};
