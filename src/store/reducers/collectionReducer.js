import {
  createItem,
  editOneItem,
  removeOneItem,
  addToCollection,
  deleteRequest
} from "../api/localStorageAdapter";

import { myStore } from "../store";

function oneCollectionReducer(oneCollection = {}, action) {
  if (action.type === "CREATE_COLLECTION") {
    createItem("collection", myStore, action.collectionData);
  }

  if (action.type === "COLLECTION_CREATED") {
    return action.data;
  }

  if (action.type === "EDIT_COLLECTION") {
    editOneItem("collection", myStore, action.editData);
  }

  if (action.type === "COLLECTION_EDITED") {
    return action.data;
  }

  if (action.type === "REMOVE_COLLECTION") {
    removeOneItem("collection", myStore, action.id);
  }

  if (action.type === "COLLECTION_REMOVED") {
    return action.data;
  }

  if (action.type === "ADD_REQUEST") {
    addToCollection(myStore, action.requestData, action.id);
  }

  if (action.type === "REQUEST_ADDED") {
    return action.data;
  }

  if (action.type === "DELETE_REQUEST") {
    deleteRequest(myStore, action.id, action.requestIndex);
  }
  if (action.type === "REQUEST_DELETED") {
    return action.data;
  }

  return oneCollection;
}

export default oneCollectionReducer;
