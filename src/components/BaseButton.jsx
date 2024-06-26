import React from "react";

const BaseButton = ({ text, children, ...props }) => {
  return (
    <div
      className="cursor-pointer text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary"
      {...props}
    >
      {text}
      <span className="ml-2">{children}</span>
    </div>
  );
};

export default BaseButton;
