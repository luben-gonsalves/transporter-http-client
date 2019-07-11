import { createStore } from "redux";
import { combineReducers } from "redux";
import collectionsReducer from "./reducers/collectionsReducer";
import oneCollectionReducer from "./reducers/collectionReducer";
import inputQueryReducer from "./reducers/inputQueryReducer";
import MethodReducer from "./reducers/MethodReducer";
import sendReducer from "./reducers/sendReducer";

let myReducer = combineReducers({
  collections: collectionsReducer,
  oneCollection: oneCollectionReducer,
  inputQuery: inputQueryReducer,
  Method: MethodReducer,
  send: sendReducer
});

let myStore = createStore(myReducer);

myStore.subscribe(function() {
  console.log(myStore.getState());
});

function stateMapper(state) {
  return state;
}

export { myStore, stateMapper };
