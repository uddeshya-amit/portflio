import { Fade } from "react-awesome-reveal";
import SocialMediaIcons from "./SocialMediaIcons";

import down from "../assets/down.svg";

import resume from "../assets/Resume.pdf";

function HeroSection({ scrollToAbout }) {
  return (
    <div className="relative flex h-dvh  flex-col items-center bg-black bg-grid-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mb-20 mt-10 lg:mr-24">
        {/* social icons */}
        <SocialMediaIcons />
      </div>

      <div className="mx-8 mt-24 text-gray-300 lg:mt-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <Fade
            cascade
            triggerOnce
            direction="up"
            delay={500}
            duration={1000}
            damping={0.5}
          >
            <h1 className="text-3xl font-bold lg:text-7xl">
              Hey, I'm
              <span className="ml-3 bg-gradient-to-r from-blue-600 via-red-400 to-red-500 bg-clip-text text-transparent lg:text-6xl">
                Uddeshya.
              </span>
            </h1>

            <div className="mt-3 flex flex-col items-center justify-center text-lg font-semibold text-gray-400 lg:text-xl">
              <p>Full stack developer</p>
              <p>proficient in web technologies.</p>
              
            </div>
            <div className="relative mt-8 text-white">
              <div className="flex items-center justify-center gap-4">
                <a href="mailto:uddeshyasrivastava05@gmail.com">
                  <button className="border border-gray-400 p-1 px-4 hover:bg-slate-200 hover:text-black lg:w-80">
                    <span className="text-lg">Connect</span>
                  </button>
                </a>
                <a href={resume} target="_blank">
                  <button className="border border-gray-400 p-1 px-4 hover:bg-slate-200 hover:text-black lg:w-80">
                    <span className="text-lg">Resume</span>
                  </button>
                </a>
              </div>
              <div className="absolute -bottom-48 right-[46%] animate-bounce invert">
                <button onClick={scrollToAbout}>
                  <img className="size-8 lg:size-12" src={down} alt="" />
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
