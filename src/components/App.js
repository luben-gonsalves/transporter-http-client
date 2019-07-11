import React from "react";
import { InputQuery } from "./inputUrl";
import Histories from "./histories.js";
import Import from "./import";



class App extends React.Component {
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-md-3">
            <Histories />;

          </div>
        </div>




      </div>
    );

  }
}

export default App;
