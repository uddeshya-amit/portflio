import React from "react";
import link from "../assets/external-link.png";
import github from "../assets/github.svg";

const Project = (props) => {
  return (
    <div className="mt-12 rounded-lg border-gray-700 bg-gray-800 shadow lg:mx-28 lg:mt-0 lg:w-96">
      <img className="h-72 w-96 rounded-t-lg" src={props.img} alt="" />

      <div className="flex justify-between p-5">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h1>
        </div>

        <div className="flex">
          <a
            href={props.link}
            target="_blank"
            className="invert transition-all duration-150 hover:scale-125"
          >
            <img src={link} alt="external link icon" className="ml-2 h-6 w-6" />
          </a>
          <a
            href={props.github}
            target="_blank"
            className="invert transition-all duration-150 hover:scale-125"
          >
            <img src={github} alt="" className="ml-4 h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="mx-5 pb-5">
        <p className="mb-2 font-normal text-gray-400">{props.desc}</p>
      </div>
    </div>
  );
};
export default Project;
