import React from "react";
import { InputQuery } from "./inputUrl";
import Params from "./parameter";
import Collection from "./collections";
import { Provider } from "react-redux";
import { myStore } from "../store/store.js";

class App extends React.Component {
  render() {
    return (
      <Provider store={myStore}>
        <Collection />;
        <InputQuery />
        <Params />
      </Provider>
    );
  }
}

export default App;
