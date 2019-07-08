import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import { AddRequest } from "./AddRequest";

class InputQueryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "GET",
      url: ""
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleMethod(name) {
    this.setState({
      method: name
    });
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSend() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="input-group mb-3 ">
        <div className="input-group-prepend">
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {this.state.method} 
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                href="#"
                onClick={this.handleMethod.bind(this, "GET")}
              >
                GET
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={this.handleMethod.bind(this, "POST")}
              >
                POST
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={this.handleMethod.bind(this, "PUT")}
              >
                PUT
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={this.handleMethod.bind(this, "DELETE")}
              >
                DELETE
              </a>
            </div>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          name="url"
          onChange={this.handleChange}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={this.handleSend}
        >
          SEND
        </button>
        <AddRequest requestData={this.state} stateData={this.state} />
      </div>
    );
  }
}

let InputQuery = connect(stateMapper)(InputQueryComponent);
export { InputQuery };
