import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import { useHistory } from "react-router-dom";
import { getListDetail, updateList, deleteList } from "../../action";
function ListDetail() {
  /// state
  const [{ listDetail }, dispatch] = useStateValue();
  const [isTitle, setIsTitle] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const [titleChange, setTitleChange] = useState("");
  const [descriptionChange, setDescriptionChange] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const history = useHistory();
  // get detail
  useEffect(async () => {
    setIsLoad();
    const result = await getListDetail(
      dispatch,
      JSON.parse(sessionStorage.getItem("id"))
    );
    setIsLoad(false);
    setTitleChange(result.title);
    setDescriptionChange(result.description);
  }, []);
  // update param id
  history.push(`/todo/${JSON.parse(sessionStorage.getItem("id"))}`);
  // update list
  const updateListForUser = async (e) => {
    if (e.target.classList.value.includes("save")) {
      const result = await updateList(
        dispatch,
        JSON.parse(sessionStorage.getItem("id")),
        titleChange,
        descriptionChange
      );
    }
  };
  // delete list
  const deleteListForUser = async () => {
    const result = await deleteList(
      dispatch,
      JSON.parse(sessionStorage.getItem("id"))
    );
    history.push("/todo");
  };
  return (
    <div className="list-detail">
      <Link to="/todo">
        <button className="sign-out back">Back</button>
      </Link>
      <div className="list-detail-wrapper">
        <div className="list-detail-group">
          <h5>Title</h5>
          <i
            onClick={(e) => {
              updateListForUser(e);
              setIsTitle(!isTitle);
            }}
            className={`fas ${!isTitle ? "fa-pen" : "fa-save"}`}
          ></i>
        </div>
        <input
          className={`list-detail-title ${isTitle ? "active" : ""}`}
          value={titleChange}
          onChange={(e) => setTitleChange(e.target.value)}
          type="text"
        />

        <div className="list-detail-group">
          <h5>Description</h5>
          <i
            onClick={(e) => {
              updateListForUser(e);
              setIsDescription(!isDescription);
            }}
            className={`fas ${!isDescription ? "fa-pen" : "fa-save"}`}
          ></i>
        </div>
        <textarea
          className={`list-detail-description ${isDescription ? "active" : ""}`}
          cols="30"
          rows="10"
          value={descriptionChange}
          onChange={(e) => setDescriptionChange(e.target.value)}
        ></textarea>
        <button onClick={() => deleteListForUser()} className="finish">
          Finish
        </button>
      </div>
    </div>
  );
}
export default ListDetail;
