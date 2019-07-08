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
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Collection />
            </div>
            <div className="col-md-9">
              <InputQuery />
              <Params />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
