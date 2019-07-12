const uuidv1 = require("uuid/v1");

export function getAllItem(myStore, dataName) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  setTimeout(function() {
    myStore.dispatch({
      type: "COLLECTIONS_LOADED",
      collections: localData
    });
  }, 1000);
}

export function createItem(dataName, myStore, data) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  if (!localData) {
    localData = [];
  }
  data.id = uuidv1();
  localData.push(data);
  localStorage.setItem(dataName, JSON.stringify(localData));
  setTimeout(function() {
    myStore.dispatch({
      type: "COLLECTION_CREATED",
      data: localData
    });
  }, 1000);
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
  setTimeout(function() {
    this.props.dispatch({
      type: "COLLECTION_EDITED",
      data: localData
    });
  }, 1000);
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
  setTimeout(function() {
    myStore.dispatch({
      type: "COLLECTION_REMOVED",
      data: localData
    });
  }, 1000);
}
