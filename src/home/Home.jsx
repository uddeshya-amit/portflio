import React from "react";
import { useRef } from "react";
import HeroSection from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="scrollbar-hide h-[100vh] w-[100%] snap-mandatory overflow-y-scroll md:snap-y">
      <div className="h-screen snap-start">
        <HeroSection scrollToAbout={scrollToAbout} />
      </div>

      <div ref={aboutRef} className="h-screen snap-start">
        <About />
      </div>
      <div className="h-screen snap-start">
        <Skills />
      </div>
      <div className="scrolbar-hide h-screen snap-center">
        <Projects />
      </div>
    </div>
  );
}
