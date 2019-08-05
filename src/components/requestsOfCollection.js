import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class RequestOfCollectionComponent extends React.Component {
  constructor() {
    super();
    this.removeRequest = this.removeRequest.bind(this);
  }
  removeRequest() {
    this.props.dispatch({
      type: "DELETE_REQUEST",
      requestIndex: this.props.requestIndex,
      id: this.props.id
    });
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="badge badge-light btn btn-sm dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.a.method} {this.props.a.url.slice(0, 8)}
          </button>
          <div className="dropdown-menu ">
            <a
              className="dropdown-item badge badge-light btn btn-sm"
              href="#"
              onClick={this.removeRequest}
            >
              Delete
            </a>
          </div>
        </div>
        <div
          className="modal fade"
          id="requestModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  EDIT REQUEST
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Name
                <input type="text" className="form-control" />
                Description
                <input type="text" className="form-control" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var RequestOfCollection = connect(stateMapper)(RequestOfCollectionComponent);

export { RequestOfCollection };
