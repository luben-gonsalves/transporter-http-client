import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../style.css";

class FormComponent extends React.Component {
  render() {
    return (
      <div>
        <div className={`row clearfix ${this.props.dark ? "dark" : "light"}`}>
          <div className="col-md-12 column text-center">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center textcolor"> Key</th>
                  <th className="text-center textcolor"> value </th>
                  <th className="text-center textcolor"> Description </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.bodyRows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      <input
                        type="text"
                        name="key"
                        value={this.props.bodyRows[idx].key}
                        onChange={this.props.handleBodyChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="value"
                        value={this.props.bodyRows[idx].value}
                        onChange={this.props.handleBodyChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={this.props.bodyRows[idx].description}
                        onChange={this.props.handleBodyChange(idx)}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-sm addRow"
                        onClick={this.props.handleBodyRemoveSpecificRow(idx)}
                      >
                        <i class="fa fa-trash" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={this.props.handleBodyAddRow}
              className="btn btn-sm addRow"
            >
              <i class="fa fa-plus-square" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let FormTable = connect(stateMapper)(FormComponent);
export default FormTable;
