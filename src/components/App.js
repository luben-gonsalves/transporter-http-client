import React from "react";
import { InputQuery } from "./inputUrl";
import Params from './parameter';
import Collection from "./collections";

class App extends React.Component {
  render() {
    return (
      <Collection />
      <Params />
      )
  }
}

export default App;
