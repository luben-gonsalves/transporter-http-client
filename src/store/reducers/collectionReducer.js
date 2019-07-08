function collectionReducer(
  collection = [
    { collectionName: "collecti 1", requests: [] },
    { collectionName: "collecti 2", requests: [] },
    { collectionName: "collecti 3", requests: [] }
  ],
  action
) {
  if (action.type === "CREATE_COLLECTION") {
    let state = collection.slice();
    state.push(action.collectionData);
    return state;
  }

  if (action.type === "DELETE_COLLECTION") {
    let state = collection.slice();
    state.splice(action.index, 1);
    return state;
  }

  if (action.type === "EDIT_COLLECTION") {
    let state = collection.slice();
    state[action.editData.index].collectionName =
      action.editData.collectionName;
    state[action.editData.index].description = action.editData.description;
    return state;
  }

  if (action.type === "ADD_REQUEST") {
    let state = collection.slice();
    state[action.index].requests.push(action.requestData);
    return state;
  }

  if (action.type === "DELETE_REQUEST") {
    let state = collection.slice();
    state[action.collectionIndex].requests.splice(action.requestIndex, 1);
    return state;
  }

  return collection;
}

export default collectionReducer;
