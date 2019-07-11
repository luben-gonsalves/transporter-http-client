import React from "react";
import Params from "./parameter";
import Collection from "./collections";
import Histories from "./histories.js";

import { InputQuery } from "./inputUrl";
import Import from "./import";
import { Provider } from "react-redux";
import { myStore } from "../store/store.js";

class App extends React.Component {
  render() {
    return (
      <Provider store={myStore}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Histories />;
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
