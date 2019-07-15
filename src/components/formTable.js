import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          key: "",
          value: "",
          description: ""
        }
      ]
    };
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

  handleAddRow = () => {
    const item = {
      key: "",
      value: "",
      description: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };

  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  render() {
    return (
      <div>
        <div className="row clearfix">
          <div className="col-md-12 column text-center">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center"> Key</th>
                  <th className="text-center"> value </th>
                  <th className="text-center"> Description </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      <input
                        type="text"
                        name="key"
                        value={this.state.rows[idx].key}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="value"
                        value={this.state.rows[idx].value}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={this.state.rows[idx].description}
                        onChange={this.handleChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={this.handleRemoveSpecificRow(idx)}
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={this.handleAddRow} className="btn btn-lg btn-primary">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let FormTable = connect(stateMapper)(FormComponent);
export default FormTable;
