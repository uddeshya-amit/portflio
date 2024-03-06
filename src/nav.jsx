import React, { useState } from "react";
import project from "./assets/project1.png";
import project2 from "./assets/project2.png";
import { cn } from "./utils/cn";
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductItem,
} from "./components/ui/navbar-menu";
import { Fade } from "react-awesome-reveal";

export function NavbarDemo() {
	return (
		<Fade cascade damping={0.3} delay={200} duration={1000}>
			<div className="relative w-full flex items-center justify-center ">
				<Navbar className="top-2 " />
			</div>
		</Fade>
	);
}

function Navbar({ className }) {
	const [active, setActive] = useState(null);
	return (
		<div
			className={cn(
				"fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
				className
			)}>
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} item="Skills">
					<div className="flex flex-col text-white space-y-4 text-sm ">
						<HoveredLink href="/web-dev">Web Development</HoveredLink>
						<HoveredLink href="/interface-design">Interface Design</HoveredLink>
						<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
						<HoveredLink href="/branding">Branding</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Projects">
					<div className=" text-sm flex flex-col md:text-sm md:grid grid-cols-2 gap-10 p-4 ">
						<ProductItem
							title="Movie Magnet"
							href="https://movie-magnet-rust.vercel.app/"
							src={project}
							description="Get every information about any movie just by a simple search."
						/>
						<ProductItem
							title="Task Tracker"
							href="https://task-tracker-nu-roan.vercel.app"
							src={project2}
							description="Keep track of your daily tasks and manage them efficiently."
						/>
						<ProductItem
							title="Moonbeam"
							href="https://gomoonbeam.com"
							src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
							description="Never write from scratch again. Go from idea to blog in minutes."
						/>
						<ProductItem
							title="Rogue"
							href="https://userogue.com"
							src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
							description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
						/>
					</div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Pricing">
					<div className="flex flex-col space-y-4 text-sm text-white">
						<HoveredLink href="/hobby">Hobby</HoveredLink>
						<HoveredLink href="/individual">Individual</HoveredLink>
						<HoveredLink href="/team">Team</HoveredLink>
						<HoveredLink href="/enterprise">Enterprise</HoveredLink>
					</div>
				</MenuItem>
			</Menu>
		</div>
	);
}
