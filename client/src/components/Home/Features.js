import React from "react";
import Feature from "./Feature";
import { motion } from "framer-motion";
import { parAnime } from "./anime";
function Features() {
  return (
    <motion.div
      variants={parAnime}
      animate="show"
      initial="hidden"
      className="features"
    >
      <div className="features-container">
        <Feature
          icon={"fas fa-tasks"}
          title={"ULIMITED TASKS"}
          description={
            "You can list many tasks you one. We provide free storages here"
          }
        />
        <Feature
          icon={"fas fa-shield-alt"}
          title={"HIGH SECURITY"}
          description={
            "Enjoy your private policy only you can access to this list"
          }
        />
        <Feature
          icon={"fas fa-tools"}
          title={"New Features"}
          description={
            "We keep bringing new feature every Month and you can also suggest us the feature you want us to put into the app"
          }
        />
      </div>
    </motion.div>
  );
}

export default Features;
