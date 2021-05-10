import axios from "axios";
/// get token
const getToken = () => {
  const cookies = document.cookie.split(";");
  let token = cookies.filter((cookie) => {
    if (cookie.includes("token")) {
      return cookie;
    }
  });
  if (token != 0) {
    token = token[0].split("=")[1];
    return token;
  }
};
/// register user
export const registerUserToDB = async (email, name, password) => {
  const result = await axios.post("/api/v1/auth/register", {
    email,
    name,
    password,
  });
  // const date = new Date();
  // date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
  // document.cookie = `token=${result.data.token}; expires=${date}`;
  return result;
};
//// login user
export const loginUserUserToDB = async (email, password) => {
  const result = await axios.post("/api/v1/auth/login", {
    email,
    password,
  });
  return result;
};
/// get user
export const getUser = async (dispatch) => {
  const token = getToken();
  const result = await axios.get("/api/v1/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({
    type: "user",
    payload: {
      user: result.data.user,
    },
  });
};
/// add list for user
export const addListForUser = async (dispatch, list) => {
  const token = getToken();
  const result = await axios.post("/api/v1/lists", list, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({ type: "lists", payload: result.data.list });
  return result;
};
// get lists for user
export const getListsForUser = async (dispatch) => {
  const token = getToken();
  const result = await axios.get("/api/v1/lists", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({
    type: "listsFromApi",
    payload: {
      lists: result.data.lists,
    },
  });
  return result;
};
// get list detail

export const getListDetail = async (dispatch, id) => {
  const token = getToken();
  const data = await axios.get(`/api/v1/lists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const listDetail = data.data.list;
  dispatch({
    type: "listDetail",
    payload: {
      listDetail,
    },
  });
  return data.data.list;
};
// update list
export const updateList = async (dispatch, id, title, description) => {
  const token = getToken();
  const result = await axios.put(
    `/api/v1/lists/${id}`,
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  dispatch({
    type: "updateList",
    payload: {
      _id: id,
      title,
      description,
    },
  });
  return result;
};
// delete list
export const deleteList = async (dispatch, id) => {
  const token = getToken();
  const result = await axios.delete(`/api/v1/lists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  dispatch({
    type: "deleteList",
    payload: id,
  });
  return result;
};
