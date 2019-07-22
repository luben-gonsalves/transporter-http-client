import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../style.css";

class HeaderTable extends React.Component {
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

  // handleChange = idx => e => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   const rows = [...this.state.rows];
  //   rows[idx][name] = value;
  //   console.log(rows[idx]);
  //   this.setState({
  //     rows
  //   });
  // };

  // handleAddRow = () => {
  //   const item = {
  //     key: "",
  //     value: "",
  //     description: ""
  //   };
  //   this.setState({
  //     rows: [...this.state.rows, item]
  //   });
  // };

  // handleRemoveSpecificRow = idx => () => {
  //   const rows = [...this.state.rows];
  //   rows.splice(idx, 1);
  //   this.setState({ rows });
  // };

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
                {this.props.HeaderRows &&
                  this.props.HeaderRows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>
                        <input
                          type="text"
                          name="key"
                          value={this.props.HeaderRows[idx].key}
                          onChange={this.props.handleHeaderChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="value"
                          value={this.props.HeaderRows[idx].value}
                          onChange={this.props.handleHeaderChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="description"
                          value={this.props.HeaderRows[idx].description}
                          onChange={this.props.handleHeaderChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={this.props.handleHeaderRemoveSpecificRow(
                            idx
                          )}
                        >
                          <i class="fa fa-trash" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button
              onClick={this.props.handleHeaderAddRow}
              className="btn btn-sm btn-success"
            >
              <i class="fa fa-plus-square" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderTable;
