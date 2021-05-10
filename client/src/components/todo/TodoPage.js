import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import { getUser, getListsForUser } from "../../action";
import { motion } from "framer-motion";
import { parAnime } from "../Home/anime";
import UserInput from "./UserInput";
import List from "./List";
function TodoPage() {
  const [{ user, createList, lists }, dispatch] = useStateValue();
  const history = useHistory();
  const signOut = () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    dispatch({ type: "emptyLists" });
    history.push("/");
  };
  useEffect(() => {
    getUser(dispatch);
    getListsForUser(dispatch);
    window.scroll(0, 0);
  }, []);
  return (
    <div className="todo">
      <button className="sign-out" onClick={signOut}>
        sign out
      </button>
      <h5 className="user-name">{user.name}</h5>
      <div className="create-part">
        <div className="add-group">
          <h1>Create list</h1>
          <button
            onClick={() => dispatch({ type: "createList" })}
            className="create"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
      </div>
      <div className="lists">
        {lists.map((list) => (
          <List
            title={list.title}
            description={list.description}
            key={list._id}
            id={list._id}
          />
        ))}
      </div>
      {createList && <UserInput />}
    </div>
  );
}

export default TodoPage;
