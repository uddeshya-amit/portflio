import { Fade } from "react-awesome-reveal";
import down from "./assets/down.svg";


export function HeroSection() {
	return (
		<div className="h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col ">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			
	

			<div className=" text-white mx-8 mt-8 lg:flex justify-center items-center lg:mt-10">
				<div className=" flex  flex-col gap-4">
					<Fade
						cascade
						triggerOnce 
						direction="left"
						delay={500}
						duration={1000}
						damping={0.3}>
						<h1 className=" text-3xl font-bold lg:text-6xl">
							Hey, I'm{" "}
							<span className="bg-gradient-to-r from-blue-600 via-red-400 to-red-500 bg-clip-text text-transparent lg:text-6xl">
								Uddeshya.
							</span>
						</h1>

						<h1 className="text-3xl font-bold lg:text-6xl">
							Frontend Developer
						</h1>

						<div className="text-lg lg:text-2xl mt-2 ">
							<p>An adept frontend developer,</p>
							<p>meticulously blend creativity and precision to</p>
							<p>
								architect immersive digital landscapes that deeply engage users
							</p>
						</div>
						<div className="text-white flex gap-8 w-full p-4 mt-20  lg:w-full ">
							<button className="border border-gray-400 w-full p-1 ">
								<span className="text-lg">Connect</span>
							</button>
							<button className="border border-gray-400 w-full p-1">
								<span className="text-lg">Resume</span>
							</button>
						</div>
					</Fade>
				</div>
			</div>

			<div className="invert animate-bounce absolute  bottom-20 lg:bottom-10">
				<img className="size-8 " src={down} alt="" />
			</div>
			
		</div>
	);
}
