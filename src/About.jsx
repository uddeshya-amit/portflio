import React from "react";
import Lottie from "lottie-react";
import anime from "./assets/animattion.json";


const About = () => {
	return (
		<div className="h-screen overflow-hidden lg:px-8">
			<div className="mt-14 px-8 ">
				<h1 className=" text-3xl bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent 
                   lg:text-6xl font-bold ">
					About Me
				</h1>
			</div>
			<div className="grid grid-rows-2 lg:grid-cols-2 ">
				<div className="px-8 mt-8  text-lg text-gray-300 font-semibold order-last lg:order-first lg:mt-16 lg:text-2xl">
					<p className="">
						I'm a frontend web-developer by profession, I find solace in
						crafting captivating digital experiences.{" "}
					</p>
					<p className="mt-4">
						Outside of coding, I immerse myself in the world of cinema and
						venture into new places, seeking inspiration and adventure in every
						corner.
					</p>
				</div>
				<div className=" flex justify-center  mt-8 lg:ml-24 ">
					<Lottie animationData={anime} className=" w-72 h-72  " />
				</div>
			</div>
		</div>
	);
};

export default About;
