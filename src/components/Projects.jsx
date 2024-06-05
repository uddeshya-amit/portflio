import React from "react";
import project1 from "../assets/project1.png";
import Project from "./Project";
import project2 from "../assets/project2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Movie Magnet",
      img: project1,
      desc: " Explore the latest movies with details such as title, release date, overview, and rating, and easily search for specific titles using the search feature.",
      link: "https://movie-magnet-rust.vercel.app/",
      github: "https://github.com/uddeshya-amit/Movie-Magnet",
    },
    {
      title: "Task Tracker",
      img: project2,
      desc: "Keep track of your daily tasks and manage them with ease, designed to help users track their daily tasks efficiently.",
      link: "https://task-tracker-nu-roan.vercel.app",
      github: "https://github.com/uddeshya-amit/To-Do-List",
    },
  ];

  return (
    <div className="mx-auto w-4/5 text-white">
      <div className="pt-14">
        <h1 className="bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text py-2.5 text-3xl font-bold text-transparent lg:text-6xl">
          My Work
        </h1>
      </div>

      <div className="mt-14 grid-cols-2 lg:grid">
        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              title={project.title}
              img={project.img}
              desc={project.desc}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
