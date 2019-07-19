import { getAllItem } from "../api/localStorageAdapter";
import { myStore } from "../store";

function collectionsReducer(collections = [], action) {
  if (
    action.type === "FETCH_COLLECTIONS" ||
    action.type === "COLLECTION_CREATED" ||
    action.type === "COLLECTION_EDITED" ||
    action.type === "COLLECTION_REMOVED" ||
    action.type === "REQUEST_ADDED" ||
    action.type === "REQUEST_DELETED"
  ) {
    getAllItem(myStore, "collection");
  }

  if (action.type === "COLLECTIONS_LOADED") {
    return action.collections;
  }
  return collections;
}

export default collectionsReducer;
