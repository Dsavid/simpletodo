import React from "react";
import { motion } from "framer-motion";
import { childAnime } from "./anime";
function Feature({ icon, title, description }) {
  return (
    <motion.div variants={childAnime} className="feature">
      <div className="feature-title">
        <i className={icon}></i>
        <h1>{title}</h1>
      </div>
      <div className="feature-description">
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default Feature;
