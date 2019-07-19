import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import "../style.css";

class RawComponent extends React.Component {
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" />
          <textarea
            className=" form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            onChange={this.props.JSONbodyHandler}
          />
        </div>
      </div>
    );
  }
}

let rawBody = connect(stateMapper)(RawComponent);
export default rawBody;
