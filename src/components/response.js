import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class ResponseComponent extends React.Component {
  render() {
    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Response</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            readOnly
            value={this.props.response}
          />
        </div>
      </div>
    );
  }
}

let Response = connect(stateMapper)(ResponseComponent);

export default Response;
