import React from "react";

const NavSocialItem = ({ text, href, bgColor, Icon }) => {
  return (
    <li
      className={`w-[160px] h-[60px] px-4 flex justify-between items-center ${bgColor} ml-[-100px] hover:ml-[-10px] duration-300`}
    >
      <a className="flex justify-between items-center w-full" href={href}>
        {text}
        <Icon className="w-8" />
      </a>
    </li>
  );
};

export default NavSocialItem;
