import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import AddTo from "./AddToComponent.js";

class AddRequestComponent extends React.Component {
  render() {
    return (
      <div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Add to
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.props.collection.map((a, i) => {
              return (
                <AddTo key={i} index={i} stateData={this.props.stateData}>
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
