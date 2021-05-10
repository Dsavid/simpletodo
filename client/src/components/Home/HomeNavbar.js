import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
function HomeNavbar() {
  const paths = useLocation().pathname.split("/");
  const path = paths[paths.length - 1];
  const [navList, setNavlist] = useState(path);
  return (
    <div className="home-navbar">
      <div className="home-navbar-container">
        <h1 className="brand">ToDo</h1>
        <ul className="home-navbar-list">
          <li>
            <Link
              to="/"
              onClick={() => setNavlist("")}
              className={navList == "" ? "active" : " "}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setNavlist("about")}
              className={navList == "about" ? "active" : " "}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeNavbar;
