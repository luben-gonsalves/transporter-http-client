import { getAllItem } from "../api/localStorageAdapter";
import { myStore } from "../store";

function collectionsReducer(collections = [], action) {
  if (
    action.type === "FETCH_COLLECTIONS" ||
    action.type === "COLLECTION_CREATED" ||
    action.type === "COLLECTION_EDITED" ||
    action.type === "COLLECTION_REMOVED"
  ) {
    getAllItem(myStore, "collection");
  }

  if (action.type === "COLLECTIONS_LOADED") {
    return action.collections;
  }
  return collections;
}

//   if (action.type === "ADD_REQUEST") {
//     let state = collection.slice();
//     if (Object.keys(state).includes("requests")) {
//       state[action.index].requests.push(action.requestData);
//     } else {
//       state[action.index].requests = [];
//       state[action.index].requests.push(action.requestData);
//     }
//     localStorage.setItem("collection", JSON.stringify(state));
//     return state;
//   }

//   if (action.type === "DELETE_REQUEST") {
//     let state = collection.slice();
//     state[action.collectionIndex].requests.splice(action.requestIndex, 1);
//     localStorage.setItem("collection", JSON.stringify(state));
//     return state;
//   }

//   return collection;
// }

export default collectionsReducer;
