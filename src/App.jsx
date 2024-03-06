import About from "./About";
import  HeroSection  from "./hero";

function App() {
	return (
		<div className=" snap-y snap-mandatory scroll-smooth ">
			<div className="snap-center ">
				<HeroSection />
			</div>

			<div className=" snap-center">
				<About />
			</div>
		</div>
	);
}

export default App;
