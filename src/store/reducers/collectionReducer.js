import { createItem } from "../api/localStorageAdapter";
import { myStore } from "../store";

function oneCollectionReducer(collection = {}, action) {
  if (action.type === "CREATE_COLLECTION") {
    createItem("collection", myStore, action.collectionData);
  }

  if (action.type === "COLLECTION_CREATED") {
    return action.data;
  }

  if (action.type === "EDIT_COLLECTION") {
    createItem("collection", myStore, action.editData);
  }

  if (action.type === "COLLECTION_EDITED") {
    return action.data;
  }

  if (action.type === "REMOVE_COLLECTION") {
    createItem("collection", myStore, action.id);
  }

  if (action.type === "COLLECTION_REMOVED") {
    return action.data;
  }
  return collection;
}

export default oneCollectionReducer;
