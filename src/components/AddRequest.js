import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import AddTo from "./AddToComponent.js";

class AddRequestComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="input dropdown-toggle addTo"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Add to
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.props.collections &&
              this.props.collections.map((a, i) => {
                return (
                  <AddTo key={a.id} id={a.id} stateData={this.props.stateData}>
                    {a.collectionName}
                  </AddTo>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

var AddRequest = connect(stateMapper)(AddRequestComponent);

export { AddRequest };
