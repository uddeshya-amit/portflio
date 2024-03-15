import React from "react";
import link from "../assets/external-link.png";
import github from "../assets/github.svg";

const Project = (props) => {
	return (
		<div className=" mt-12 lg:mt-0 lg:mx-28 lg:w-96 rounded-lg shadow bg-gray-800 border-gray-700  ">
			<img className="rounded-t-lg w-96  h-72" src={props.img} alt="" />

			<div className="flex  justify-between p-5">
				<div>
					<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{props.title}
					</h1>
				</div>

				<div className="flex">
					<a
						href={props.link}
						target="_blank"
						className="invert hover:scale-125 transition-all duration-150">
						<img src={link} alt="external link icon" className="w-6 h-6 ml-2" />
					</a>
					<a
						href={props.github}
                        target="_blank"
						className="invert hover:scale-125 transition-all duration-150">
						<img src={github} alt="" className="w-6 h-6 ml-4 " />
					</a>
				</div>
			</div>
			<div className="mx-5 pb-5">
				<p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
					{props.desc}
				</p>
			</div>
		</div>
	);
};
export default Project;
