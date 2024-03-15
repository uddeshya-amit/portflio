import About from "./About";
import Skills from "./Skills";
import HeroSection from "./hero";
import Projects from "./Projects";
import { useRef } from "react";

function App() {
	const aboutRef = useRef(null);

	const scrollToAbout = () => {
		aboutRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="overflow-y-scroll scrollbar-hide snap-y snap-mandatory h-[100vh] w-[100%]">
			<div className=" h-screen snap-start">
				<HeroSection scrollToAbout={scrollToAbout} />
			</div>

			<div ref={aboutRef} className="h-screen  snap-start">
				<About />
			</div>
			<div className="h-full lg:h-screen  snap-start">
				<Skills />
			</div>
			<div className="h-screen snap-center overflow-y-scroll">
				<Projects />
			</div>
		</div>
	);
}

export default App;
