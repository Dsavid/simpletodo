import React from "react";
import Login from "./Login";
import { motion } from "framer-motion";
import { parAnime, childAnime } from "./anime";
function Hero() {
  return (
    <motion.div
      variants={parAnime}
      animate="show"
      initial="hidden"
      className="hero"
    >
      <div className="hero-container">
        <motion.div variants={childAnime} className="hero-left">
          <h5>To Do Web app</h5>
          <p>
            List your daily task here we provide security , many features,
            <br /> and we continue to bring you new features to fit you
            requirement
          </p>
        </motion.div>
        <motion.div variants={childAnime} className="hero-right">
          <Login />
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Hero;
