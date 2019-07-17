import sendHttpRequest from "../api/api";
import { myStore } from "../store";

function historiesReducer(response = "", action) {
  if (action.type === "SEND_REQUEST") {
    sendHttpRequest(myStore, action.data);
  }

  if (action.type === "DATA_FETCHED") {
    return action.responseData;
  }

  return response;
}

export default historiesReducer;
