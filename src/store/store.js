import { createStore } from "redux";
import { combineReducers } from "redux";
import collectionsReducer from "./reducers/collectionsReducer";
import oneCollectionReducer from "./reducers/collectionReducer";
import inputQueryReducer from "./reducers/inputQueryReducer";
import MethodReducer from "./reducers/MethodReducer";
import sendReducer from "./reducers/sendReducer";
import historiesReducer from "./reducers/historyReducer"
import responseReducer from "./reducers/responseReducer"
import rawJSONbodyReducer from './reducers/rawJSONbodyReducer';


let myReducer = combineReducers({
  collections: collectionsReducer,
  oneCollection: oneCollectionReducer,
  inputQuery: inputQueryReducer,
  Method: MethodReducer,
  send: sendReducer,
  histories: historiesReducer,
  response: responseReducer
  JSONbody:rawJSONbodyReducer
});

let myStore = createStore(myReducer);

myStore.subscribe(function () {
  console.log(myStore.getState());
});

function stateMapper(state) {
  return state;
}

export { myStore, stateMapper };
