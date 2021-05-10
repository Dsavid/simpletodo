import React from "react";
import me from "./img/159819836_192699709290566_1774580396993549015_n.jpg";
import {
  parAnime,
  childAnime,
  childAnimeAboutLeft,
  childAnimeAboutright,
} from "./anime";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      variants={parAnime}
      animate="show"
      initial="hidden"
      className="about"
    >
      <div className="about-title">
        <motion.h5 variants={childAnime}>About</motion.h5>
      </div>
      <div className="about-part">
        <motion.div variants={childAnimeAboutLeft} className="about-left">
          <h5>Hello</h5>
          <p>
            I am a student from National University of Management.Currently I'm
            studying computer science.
          </p>
          <hr />
          <p>I created this website just for learning purpose.</p>
          <h1>Technologies use in this project</h1>
          <ul>
            <li>React js</li>
            <li>Scss</li>
            <li>Framer motion</li>
            <li>Node js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </motion.div>
        <motion.div variants={childAnimeAboutright} className="about-right">
          <img src={me} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
}
export default About;
