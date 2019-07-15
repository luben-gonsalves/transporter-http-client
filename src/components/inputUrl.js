import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import { AddRequest } from "./AddRequest";
import '../style.css';
import Params from './parameter';

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
      ]
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
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
  
  handleAddRow(){
    const item = {
      key: "",
      value: "",
      description: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
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
  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    console.log(this.state.rows);
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
          className="send"
          onClick={this.handleSend}
        >
          SEND
        </button>&nbsp;&nbsp;
        <AddRequest requestData={this.state} stateData={this.state} />
      </div>
      </div>
      <div className="row">
       <Params 
       handleAddRow={this.handleAddRow}
       rows ={this.state.rows}
       handleChange={this.handleChange}
       handleRemoveSpecificRow ={this.handleRemoveSpecificRow}
       />
      </div>
</div>
    );
  }
}

let InputQuery = connect(stateMapper)(InputQueryComponent);
export { InputQuery };
