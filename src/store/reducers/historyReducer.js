import { getAllItem } from "../api/localStorageAdapter.js";
import { myStore } from "../store";

function historiesReducer(histories = [], action) {
  if (action.type === "FETCH_HISTORIES") {
    getAllItem(myStore, "history");
  }

  if (action.type === "HISTORY_LOADED") {
    return action.histories;
  }

  if (action.type === "CLEAR_HISTORY") {
    clearHistory("history", myStore, action.id);
  }

  if (action.type === "HISTORY_CLEARED") {
    return action.data;
  }

  return histories;
}

export default historiesReducer;