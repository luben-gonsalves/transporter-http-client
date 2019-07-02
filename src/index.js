import React from "react";
import ReactDOM from "react-dom";

import Collections from "./components/collections.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Collections />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
