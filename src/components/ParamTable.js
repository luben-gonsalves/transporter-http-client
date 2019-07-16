import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class ParamTableComponent extends React.Component {
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
                {this.props.rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      <input
                        type="text"
                        name="key"
                        value={this.props.rows[idx].key}
                        onChange={this.props.handleChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="value"
                        value={this.props.rows[idx].value}
                        onChange={this.props.handleChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={this.props.rows[idx].description}
                        onChange={this.props.handleChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={this.props.handleRemoveSpecificRow(idx)}
                      >
                        <i class="fa fa-trash" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={this.props.handleAddRow}
              className="btn btn-lg btn-primary"
            >
              <i class="fa fa-plus-square" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let ParamTable = connect(stateMapper)(ParamTableComponent);
export default ParamTable;
