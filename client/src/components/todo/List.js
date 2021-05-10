import React from "react";
import { childAnime } from "../Home/anime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
function List({ title, description, id }) {
  const [{}, dispatch] = useStateValue();
  return (
    <motion.div
      variants={childAnime}
      animate="show"
      initial="hidden"
      className="list"
    >
      <p>{title}</p>
      <Link to={`/todo/${id}`}>
        <button
          onClick={() => {
            sessionStorage.setItem("id", JSON.stringify(id));
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </Link>
    </motion.div>
  );
}
export default List;
