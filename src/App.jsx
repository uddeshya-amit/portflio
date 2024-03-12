import About from "./About";
import Skills from "./Skills";
import  HeroSection  from "./hero";

function App() {
	return (
		<div className=" snap-y snap-mandatory">
			<div className=" h-screen snap-center ">
				<HeroSection />
			</div>

			<div className="h-screen snap-center">
				<About />
			</div>
			<div className="h-screen snap-center">
				<Skills />
			</div>
		</div>
	);
}

export default App;
