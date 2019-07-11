import React from "react";

class BodyTable extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-pills">
          <button
            className=" btn btn-secondary"
            data-toggle="pill"
            href="#none"
          >
            None
          </button>
          &nbsp;
          <button
            className=" btn btn-secondary"
            data-toggle="pill"
            href="#form-data"
          >
            form-data
          </button>
          &nbsp;
          <button className=" btn btn-secondary" data-toggle="pill" href="#raw">
            raw
          </button>
          &nbsp;
          <button
            className=" btn btn-secondary"
            data-toggle="pill"
            href="#binary"
          >
            Binary
          </button>
          &nbsp;
        </ul>
        <hr />
        <div className="tab-content">
          <div id="none" className="tab-pane fade in active" />
          <div id="form-data" className="tab-pane fade">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Key</th>
                        <th scope="col">Value</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div id="raw" className="tab-pane fade" />
          <div id="binary" className="tab-pane fade">
            <button className="btn btn-primary" type="file">
              Upload file
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default BodyTable;
