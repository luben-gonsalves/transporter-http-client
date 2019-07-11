const uuidv1 = require("uuid/v1");

export function getAllItem(myStore, dataName) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  myStore.dispatch({
    type: "COLLECTIONS_LOADED",
    collections: localData
  });
}

export function createItem(dataName, myStore, data) {
  // get the localstorage under the data name
  // then json parse it
  // then append the data argurment
  // stringify and save it back
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  data.id = uuidv1();
  localData.push(data);
  localStorage.setItem(dataName, JSON.stringify(localData));
  myStore.dispatch({
    type: "COLLECTION_CREATED",
    data
  });
}

export function editOneItem(dataName, myStore, data) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  for (var i = 0; i < localData.length; i++) {
    if (localData[i].id === data.id) {
      localData[i] = data;
    }
  }
  localStorage.setItem(dataName, JSON.stringify(localData));
  this.props.dispatch({
    type: "COLLECTION_EDITED",
    data: localData
  });
}

export function removeOneItem(dataName, myStore, id) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  for (var i = 0; i < localData.length; i++) {
    if (localData[i].id === id) {
      localData.splice(i, 1);
    }
  }
  localStorage.setItem(dataName, JSON.stringify(localData));
  myStore.dispatch({
    type: "COLLECTION_REMOVED",
    data: localData
  });
}
