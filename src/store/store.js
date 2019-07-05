import { createStore } from "redux";
import { combineReducers } from "redux";
import collectionReducer from "./reducers/collectionReducer";

let myReducer = combineReducers({
  collection: collectionReducer,
});

let myStore = createStore(myReducer);

myStore.subscribe(function() {
  console.log(myStore.getState());
});

function stateMapper(state) {
  return state;
}

export { myStore, stateMapper };
