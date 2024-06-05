import React from "react";
import { Fade } from "react-awesome-reveal";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";

function SocialMediaIcons() {
  return (
    <div className="flex gap-8 invert lg:gap-12">
      <Fade
        cascade
        triggerOnce
        direction="down"
        delay={800}
        duration={1000}
        damping={0.3}
      >
        <a target="_blank" href="https://github.com/uddeshya-amit">
          <img
            className="duration-125 transition-all hover:scale-125"
            src={github}
            width={30}
            height={30}
            alt="github icon"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/uddeshya05/">
          <img
            className="transition-all duration-150 hover:scale-125"
            src={linkedin}
            width={30}
            height={30}
            alt="linkedin icon"
          />
        </a>
        <a target="_blank" href="https://x.com/Uddeshya_4u">
          <img
            className="transition-all duration-150 hover:scale-125"
            src={twitter}
            width={30}
            height={30}
            alt="twitter icon"
          />
        </a>
        <a target="_blank" href="https://instagram.com/uddeshya_srivastava__">
          <img
            className="transition-all duration-150 hover:scale-125"
            src={instagram}
            width={30}
            height={30}
            alt="instagram icon"
          />
        </a>
        <a target="_blank" href="mailto:uddeshyasrivastava05@gmail.com">
          <img
            className="transition-all duration-150 hover:scale-125"
            src={mail}
            width={30}
            height={30}
            alt="email icon"
          />
        </a>
      </Fade>
    </div>
  );
}

export default SocialMediaIcons;
