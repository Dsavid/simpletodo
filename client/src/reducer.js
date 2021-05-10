export const initialState = {
  user: {},
  createList: false,
  lists: [],
  listDetail: {},
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload.user };
    case "createList":
      return { ...state, createList: !state.createList };
    case "lists":
      return { ...state, lists: [...state.lists, action.payload] };
    case "listsFromApi":
      return { ...state, lists: action.payload.lists };
    case "listDetail":
      return { ...state, listDetail: action.payload.listDetail };
    case "updateList":
      console.log("hello");
      return {
        ...state,
        lists: state.lists.map((list) =>
          list._id === action.payload._id ? action.payload : list
        ),
      };
    case "deleteList":
      return {
        ...state,
        lists: state.lists.filter((list) => list._id !== action.payload),
      };
    case "emptyLists":
      return { ...state, lists: [] };
    default:
      return state;
  }
};
