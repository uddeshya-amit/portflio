import React from "react";
import Lottie from "lottie-react";
import anime from "../assets/animattion.json";

const About = () => {
  return (
    <div id="about" className="mx-auto w-4/5 overflow-hidden">
      <div className="mt-14">
        <h1 className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-3xl font-bold text-transparent lg:text-6xl">
          About Me
        </h1>
      </div>
      <div className="grid grid-rows-2 lg:grid-cols-2">
        <div className="px- order-last mt-8 text-lg font-normal text-gray-300 lg:order-first lg:mx-20 lg:mt-16 lg:px-0 lg:text-xl">
          <p className="">
            I'm a frontend web-developer with a passion for coding and
            technology, constantly seeking opportunities to learn and innovate
            in the digital world.{" "}
          </p>
          <p className="mt-4">
            Outside of coding, I immerse myself in the world of anime and
            venture into new places, seeking inspiration and adventure in every
            corner.
          </p>
          <p className="mt-4">
            In my free time, I dedicate myself to researching and exploring new
            technologies to enhance my skills and potential for profit, while
            also indulging in the joy of cooking delicious dishes in the
            kitchen.
          </p>
        </div>
        <div className="mt-8 hidden justify-center lg:ml-24 lg:flex">
          <Lottie animationData={anime} className="h-72 w-72" />
        </div>
      </div>
    </div>
  );
};

export default About;
