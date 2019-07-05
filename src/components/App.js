import React from "react";
import Collection from "./collections";
import { Provider } from "react-redux";
import { myStore } from "../store/store.js";

class App extends React.Component {
  render() {
    return (
      <Provider store={myStore}>
        <Collection />;
      </Provider>
    );
  }
}

export default App;
