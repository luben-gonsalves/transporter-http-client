const uuidv1 = require("uuid/v1");

export function getAllItem(myStore, dataName) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  setTimeout(function() {
    myStore.dispatch({
      type: "COLLECTIONS_LOADED",
      collections: localData
    });
  }, 5);
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
  }, 5);
}

export function editOneItem(dataName, myStore, data) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  for (var i = 0; i < localData.length; i++) {
    if (localData[i].id === data.id) {
      localData.splice(i, 1, data);
    }
  }
  console.log(localData);
  localStorage.setItem(dataName, JSON.stringify(localData));
  setTimeout(function() {
    myStore.dispatch({
      type: "COLLECTION_EDITED",
      data: data
    });
  }, 5);
}

export function removeOneItem(dataName, myStore, id) {
  var localData = localStorage.getItem(dataName);
  localData = JSON.parse(localData);
  for (var i = 0; i < localData.length; i++) {
    if (localData[i].id === id) {
      localData.splice(i, 1);
      break;
    }
    console.log(i);
  }
  localStorage.setItem(dataName, JSON.stringify(localData));
  setTimeout(function() {
    myStore.dispatch({
      type: "COLLECTION_REMOVED",
      data: localData
    });
  }, 5);
}

export function addToCollection(myStore, requestData, id) {
  var localData = localStorage.getItem("collection");
  localData = JSON.parse(localData);
  for (var i = 0; i < localData.length; i++) {
    if (localData[i].id === id) {
      if (Object.keys(localData).includes("requests")) {
        localData[i].requests.push(requestData);
      } else {
        localData[i].requests = [];
        localData[i].requests.push(requestData);
      }
    }
  }
  localStorage.setItem("collection", JSON.stringify(localData));
  setTimeout(function() {
    myStore.dispatch({
      type: "REQUEST_ADDED",
      data: localData
    });
  }, 5);
}

export function deleteRequest(myStore, id, index) {
  var localData = localStorage.getItem("collection");
  localData = JSON.parse(localData);
  for (var i = 0; i < localData.length; i++) {
    if (localData[i].id === id) {
      localData[i].requests.splice(index, 1);
    }
  }
  localStorage.setItem("collection", JSON.stringify(localData));
  setTimeout(function() {
    myStore.dispatch({
      type: "REQUEST_DELETED",
      data: localData
    });
  }, 5);
}
