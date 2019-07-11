import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class AddToComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.dispatch({
      type: "ADD_REQUEST",
      index: this.props.index,
      requestData: this.props.stateData
    });
  }

  render() {
    return (
      <a className="dropdown-item" href="#" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

var AddTo = connect(stateMapper)(AddToComponent);

export default AddTo;
