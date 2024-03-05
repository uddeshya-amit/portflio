
import About from "./About";
import { HeroSection } from "./hero";
import { NavbarDemo } from "./nav";
import { Fade } from "react-awesome-reveal";

function App() {
	return (
		<div className=" ">
			<HeroSection />
			<Fade cascade damping={0.5}>
				<NavbarDemo />
			</Fade>
			<About />
		</div>
	);
}

export default App;
