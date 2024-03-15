import React from "react";
import Lottie from "lottie-react";
import anime from "./assets/animattion.json";

const About = () => {
	return (
		<div id="about" className="overflow-hidden  w-4/5 mx-auto">
			<div className="mt-14  ">
				<h1
					className=" text-3xl bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent 
                   lg:text-6xl font-bold ">
					About Me
				</h1>
			</div>
			<div className="grid grid-rows-2 lg:grid-cols-2  ">
				<div className="px- lg:px-0 mt-8 lg:mx-20 text-lg text-gray-300 font-normal order-last lg:order-first lg:mt-16 lg:text-xl">
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
				<div className=" hidden lg:flex justify-center  mt-8 lg:ml-24 ">
					<Lottie animationData={anime} className=" w-72 h-72  " />
				</div>
			</div>
		</div>
	);
};

export default About;
