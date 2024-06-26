import React from "react";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import BaseButton from "../components/BaseButton";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      name="about"
      className={`${isDarkMode ? "bg-primary" : "bg-white"} h-screen w-full}`}
    >
      <div className="text-white max-w-[1000px] flex flex-col px-[100px] justify-center h-full mx-auto">
        <p className="text-pink-700">Hi, my name is</p>
        <h1 className="text-6xl md:text-4xl text-white font-bold">
          Anthony Ajami
        </h1>
        <h2 className="text-gray-300 md:text-4xl text-6xl font-bold">
          I'm a Frontend developer
        </h2>
        <p className="text-gray-300 max-w-[700px] py-4">
          I specialize in building interfaces for web and mobile apps.
          Currently, I am focusing on cross-platform developement with the Ionic
          framework
        </p>
        <div className="group flex gap">
          <BaseButton text="View work">
            <ArrowRightIcon className="text-white w-6 group-hover:rotate-90 duration-300" />
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default About;
