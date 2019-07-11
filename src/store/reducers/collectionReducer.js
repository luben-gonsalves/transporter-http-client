import { createItem } from "../api/localStorageAdapter";
import { myStore } from "../store";

function oneCollectionReducer(collection = {}, action) {
  if (action.type === "CREATE_COLLECTION") {
    createItem("collection", myStore, action.collectionData);
  }

  if (action.type === "COLLECTION_CREATED") {
    return action.data;
  }
  return collection;
}

export default oneCollectionReducer;


// EDIT_COLLECTION
// COLLECTION_EDITED

// REMOVE_COLLECTION
// COLLECTION_REMOVED