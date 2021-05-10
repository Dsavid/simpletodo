import React, { useState } from "react";
import { useStateValue } from "../../stateProvider";
import { addListForUser } from "../../action";
import { childAnime } from "../Home/anime";
import { motion } from "framer-motion";
function UserInput() {
  const [{}, dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const submitList = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      setErrorInput(true);
      setTimeout(() => {
        setErrorInput(false);
      }, 5000);
    } else {
      const result = await addListForUser(dispatch, {
        title: title,
        description: description,
      });
      dispatch({ type: "createList" });
    }
  };
  return (
    <div className="user-input-part">
      <i
        onClick={() => dispatch({ type: "createList" })}
        className="fas fa-times"
      ></i>
      <div className={`error-input ${errorInput ? "active" : ""}`}>
        <h1>Please complete all the field !!</h1>
      </div>
      <motion.form
        variants={childAnime}
        animate="show"
        initial="hidden"
        onSubmit={submitList}
        className="user-input"
      >
        <div className="create-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            maxLength="60"
            id="title"
            type="text"
          />
        </div>
        <div className="create-group">
          <label htmlFor="description">description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="submit">Submit</button>
      </motion.form>
    </div>
  );
}

export default UserInput;
