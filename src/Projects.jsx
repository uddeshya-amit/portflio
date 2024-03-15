import React from "react";
import project1 from "./assets/project1.png";
import Project from "./components/Project";
import project2 from "./assets/project2.png";

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
		<div className="text-white  w-4/5 mx-auto  ">
			<div className="pt-14 ">
				<h1
					className="text-3xl bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent 
                   lg:text-6xl font-bold">
					My Work
				</h1>
			</div>

			<div className="mt-14 lg:grid grid-cols-2  ">
				{projects.map((project, i) => {
					return (
						<Project
							title={project.title}
							img={project.img}
							desc={project.desc}
							link={project.link}
							github={project.github}
							key={i}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Projects;
