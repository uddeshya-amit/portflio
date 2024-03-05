
import { HeroSection } from "./hero";
import { NavbarDemo } from "./nav";
import { Fade } from "react-awesome-reveal";

function App() {
	return (
		<div className="h-full w-full overflow:hidden">
			<HeroSection />
			<Fade cascade damping={0.5}>
				<NavbarDemo />
			</Fade>
		</div>
	);
}

export default App;
