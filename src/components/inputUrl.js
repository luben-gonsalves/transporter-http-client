import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import { AddRequest } from "./AddRequest";
import "../style.css";
import Params from "./parameter";

class InputQueryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "GET",
      url: "",
      rows: [
        {
          key: "",
          value: "",
          description: ""
        }
      ],
      HeaderRows: [
        {
          key: "",
          value: "",
          description: ""
        }
      ],
      bodyRows: [
        {
          key: "",
          value: "",
          description: ""
        }
      ],
      jsonBody: "",
      send: false
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleBodyAddRow = this.handleBodyAddRow.bind(this);
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
    this.handleHeaderAddRow = this.handleHeaderAddRow.bind(this);
    this.handleHeaderRemoveSpecificRow = this.handleHeaderRemoveSpecificRow.bind(
      this
    );
    this.JSONbodyHandler = this.JSONbodyHandler.bind(this);
  }

  handleMethod(name) {
    this.setState({
      method: name
    });
  }

  handleChangeData(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value,
      send: true
    });
  }

  handleSend() {
    console.log("main", this.state);
    if (this.state.send === false) {
      alert("Enter the URL");
    } else {
      this.props.dispatch({
        type: "SEND_REQUEST",
        data: this.state
      });

      this.props.dispatch({
        type: "SAVE_HISTORY",
        data: this.state
      });
    }
  }

  handleAddRow() {
    const item = {
      key: "",
      value: "",
      description: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  }
  handleHeaderAddRow() {
    const item = {
      key: "",
      value: "",
      description: ""
    };
    this.setState({
      HeaderRows: [...this.state.HeaderRows, item]
    });
  }
  handleBodyAddRow() {
    const item = {
      key: "",
      value: "",
      description: ""
    };
    this.setState({
      bodyRows: [...this.state.bodyRows, item]
    });
  }

  handleChange = idx => e => {
    const { name, value } = e.target;
    console.log(name, value);
    const rows = [...this.state.rows];
    rows[idx][name] = value;
    console.log(rows[idx]);
    this.setState({
      rows
    });
  };
  handleHeaderChange = idx => e => {
    const { name, value } = e.target;
    console.log(name, value);
    const HeaderRows = [...this.state.HeaderRows];
    HeaderRows[idx][name] = value;
    this.setState({
      HeaderRows
    });
  };
  handleBodyChange = idx => e => {
    const { name, value } = e.target;
    console.log(name, value);
    const bodyRows = [...this.state.bodyRows];
    bodyRows[idx][name] = value;
    this.setState({
      bodyRows
    });
  };
  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  handleHeaderRemoveSpecificRow = idx => () => {
    const HeaderRows = [...this.state.HeaderRows];
    HeaderRows.splice(idx, 1);
    this.setState({ HeaderRows });
  };
  handleBodyRemoveSpecificRow = idx => () => {
    const bodyRows = [...this.state.bodyRows];
    bodyRows.splice(idx, 1);
    this.setState({ bodyRows });
  };

  JSONbodyHandler(event) {
    this.setState({
      jsonBody: event.target.value
    });
  }
  render() {
    console.log(this.state.bodyRows);
    return (
      <div className="container">
        <div className="row">
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <div className="dropdown">
                <button
                  className=" input dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.method}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
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
              onChange={this.handleChangeData}
            />
            <button type="button" className="send" onClick={this.handleSend}>
              SEND
            </button>
            &nbsp;
            <AddRequest requestData={this.state} stateData={this.state} />
          </div>
        </div>
        <div className="row">
          <Params
            handleAddRow={this.handleAddRow}
            rows={this.state.rows}
            handleChange={this.handleChange}
            handleRemoveSpecificRow={this.handleRemoveSpecificRow}
            JSONbodyHandler={this.JSONbodyHandler}
            handleHeaderChange={this.handleHeaderChange}
            handleHeaderRemoveSpecificRow={this.handleHeaderRemoveSpecificRow}
            handleHeaderAddRow={this.handleHeaderAddRow}
            HeaderRows={this.state.HeaderRows}
            handleBodyChange={this.handleBodyChange}
            handleBodyAddRow={this.handleBodyAddRow}
            handleBodyRemoveSpecificRow={this.handleBodyRemoveSpecificRow}
            bodyRows={this.state.bodyRows}
          />
        </div>
      </div>
    );
  }
}

let InputQuery = connect(stateMapper)(InputQueryComponent);
export { InputQuery };
