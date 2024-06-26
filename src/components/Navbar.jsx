import React, { useState } from "react";
import { LOGO_NAME } from "../constants.ts";

import {
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import NavSocialItem from "./NavSocialItem.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const navItems = [
  {
    text: "LinkedIn",
    href: "/",
    bgColor: "bg-blue-600",
    Icon: BuildingOfficeIcon,
  },
  {
    text: "GitHub",
    href: "/",
    bgColor: "bg-orange-700",
    Icon: CodeBracketIcon,
  },
  {
    text: "Mail",
    href: "/",
    bgColor: "bg-gray-600",
    Icon: EnvelopeIcon,
  },
  {
    text: "CV",
    href: "/",
    bgColor: "bg-purple-600",
    Icon: IdentificationIcon,
  },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed text-white w-full h-[80px] bg-primary flex justify-between items-center px-4">
      <div>
        <p className="text-4xl">{LOGO_NAME}</p>
      </div>

      <div className="flex items-center gap-8">
        {/* Menu for desktop screens (>= 768px) */}
        <ThemeToggle />

        <ul className="hidden md:flex gap-4">
          <Link to="/news">Tech News</Link>
          <li className="cursor-pointer">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="work" smooth={true} duration={500}>
              Work
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div onClick={handleNavClick} className="md:hidden z-10">
        {!mobileNav ? (
          <Bars3Icon className="w-6 text-white" />
        ) : (
          <XMarkIcon className="w-6 text-white" />
        )}
      </div>

      {/* Menu for mobile screens */}
      <ul
        className={
          mobileNav
            ? "absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col gap-6 bg-primary"
            : "hidden"
        }
      >
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>

      <div className="fixed flex flex-col left-0 top-[35%]">
        <ul className="text-white">
          {navItems.map((item, index) => (
            <NavSocialItem
              key={index}
              text={item.text}
              href={item.href}
              bgColor={item.bgColor}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
