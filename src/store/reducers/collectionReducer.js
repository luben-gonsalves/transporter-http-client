var localCollection = localStorage.getItem("collection");
if (!localCollection) {
  localCollection = [];
}
localCollection = JSON.parse(localCollection);

function collectionReducer(collection = localCollection, action) {
  if (action.type === "CREATE_COLLECTION") {
    let state = collection.slice();
    state.push(action.collectionData);
    localStorage.setItem("collection", JSON.stringify(state));
    return state;
  }

  if (action.type === "DELETE_COLLECTION") {
    let state = collection.slice();
    state.splice(action.index, 1);
    localStorage.setItem("collection", JSON.stringify(state));
    return state;
  }

  if (action.type === "EDIT_COLLECTION") {
    let state = collection.slice();
    state[action.editData.index].collectionName =
      action.editData.collectionName;
    state[action.editData.index].description = action.editData.description;
    localStorage.setItem("collection", JSON.stringify(state));
    return state;
  }

  if (action.type === "ADD_REQUEST") {
    let state = collection.slice();
    if (Object.keys(state).includes("requests")) {
      state[action.index].requests.push(action.requestData);
    } else {
      state[action.index].requests = [];
      state[action.index].requests.push(action.requestData);
    }
    localStorage.setItem("collection", JSON.stringify(state));
    return state;
  }

  if (action.type === "DELETE_REQUEST") {
    let state = collection.slice();
    state[action.collectionIndex].requests.splice(action.requestIndex, 1);
    localStorage.setItem("collection", JSON.stringify(state));
    return state;
  }

  return collection;
}

export default collectionReducer;
