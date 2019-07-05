function collectionReducer(collection = [], action) {
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
    console.log(action.editData);
    let state = collection.slice();
    state[action.editData.index].collectionName =
      action.editData.collectionName;
    state[action.editData.index].description = action.editData.description;
    return state;
  }

  return collection;
}

export default collectionReducer;
