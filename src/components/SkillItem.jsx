import React from "react";

const SkillItem = ({ src, title, alt }) => {
  return (
    <div className="shadow-md shadow-[#040c16] p-3 hover:scale-110 duration-500 mx-auto text-center w-full">
      <img className="w-[60px] mx-auto" src={src} alt={alt} />
      <p className="text-white">{title}</p>
    </div>
  );
};

export default SkillItem;
