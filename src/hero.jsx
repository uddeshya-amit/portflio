import { Fade } from "react-awesome-reveal";
import down from "./assets/down.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import mail from "./assets/mail.svg";
import instagram from "./assets/instagram.svg";
import resume from "./assets/Uddeshya resume.pdf";

function HeroSection() {
	return (
		<div className="h-screen bg-black  bg-grid-white/[0.2]  relative flex items-center  flex-col ">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className=" mt-10 mb-20  lg:mr-24 ">
				{/* social icons */}
				<div className="flex gap-8 lg:gap-12 invert">
					<Fade
						cascade
						triggerOnce
						direction="down"
						delay={500}
						duration={1000}
						damping={0.3}>
						<a href="https://github.com/uddeshya-amit">
							<img
								className=" hover:scale-125 transition-all duration-125 "
								src={github}
								width={30}
								height={30}
								alt="github icon"
							/>
						</a>
						<a href="https://www.linkedin.com/in/uddeshya05/">
							<img
								className=" hover:scale-125 transition-all duration-150 "
								src={linkedin}
								width={30}
								height={30}
								alt="linkedin icon"
							/>
						</a>
						<a href="https://x.com/Uddeshya_4u">
							<img
								className=" hover:scale-125 transition-all duration-150"
								src={twitter}
								width={30}
								height={30}
								alt="twitter icon"
							/>
						</a>
						<a href="https://instagram.com/uddeshya_srivastava__">
							<img
								className=" hover:scale-125 transition-all duration-150"
								src={instagram}
								width={30}
								height={30}
								alt="instagram icon"
							/>
						</a>
						<a href="mailto:uddeshyasrivastava05@gmail.com">
							<img
								className=" hover:scale-125 transition-all duration-150"
								src={mail}
								width={30}
								height={30}
								alt="email icon"
							/>
						</a>
					</Fade>
				</div>
			</div>

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

						<div className="text-lg lg:text-2xl mt-2 text-wrap">
							<p>A skilled frontend developer,</p>
							<p>who mix creativity and precision to craft digital</p>
							<p>
								experiences that grab people's attention and keep them hooked.
							</p>
						</div>
						<div className="text-white mt-20  ">
							<div className="flex gap-4 lg:gap-10  ">
								<a href="mailto:uddeshyasrivastava05@gmail.com">
									<button className="border border-gray-400 px-4  lg:w-96 p-1 hover:bg-slate-200 hover:text-black">
										<span className="text-lg ">Connect</span>
									</button>
								</a>
								<a href={resume} target="_blank">
									<button className="border border-gray-400  px-4  lg:w-96 p-1  hover:bg-slate-200 hover:text-black">
										<span className="text-lg">Resume</span>
									</button>
								</a>
							</div>
						</div>
					</Fade>
				</div>
			</div>

			<div className="invert animate-bounce absolute  bottom-28 lg:bottom-10">
				<img className="size-8 " src={down} alt="" />
			</div>
		</div>
	);
}
export default HeroSection;
