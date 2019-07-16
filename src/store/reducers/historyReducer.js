import {
  getAllItem,
  clearHistory,
  createItem,
  createHistory
} from "../api/localStorageAdapter.js";
import { myStore } from "../store";

function historiesReducer(histories = [], action) {
  if (action.type === "FETCH_HISTORIES" || action.type === "HISORY_CREATED") {
    getAllItem(myStore, "history");
  }

  if (action.type === "HISTORY_LOADED") {
    return action.histories;
  }

  if (action.type === "SAVE_HISTORY") {
    createHistory("history", myStore, action.data);
  }

  if (action.type === "HISTORY_CREATED") {
    return action.data;
  }

  if (action.type === "CLEAR_HISTORY") {
    clearHistory("history", myStore);
  }

  if (action.type === "HISTORY_CLEARED") {
    return action.data;
  }

  return histories;
}

export default historiesReducer;
