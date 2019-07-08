import React from "react";
import Collection from "./collection";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class CollectionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionName: "",
      description: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.save = this.save.bind(this);
  }

  showData() {
    return this.props.collection.map((a, i) => {
      return (
        <div>
          <Collection
            collectionData={a}
            index={i}
            key={i}
            editCollection={this.editCollection}
          >
            {a.collectionName}
          </Collection>
        </div>
      );
    });
  }

  onChangeHandler(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  save() {
    this.props.dispatch({
      type: "CREATE_COLLECTION",
      collectionData: this.state
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>collections</h4>
            <button
              type="button"
              className="btn btn-link"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              new collection
            </button>
            <div
              className="modal fade"
              id="exampleModalLong"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      New Collection
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
                    Collection Name
                    <input
                      type="text"
                      name="collectionName"
                      className="form-control"
                      onChange={this.onChangeHandler}
                    />
                    Description
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.save}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {this.showData()}
          </div>
        </div>
      </div>
    );
  }
}
let Collections = connect(stateMapper)(CollectionsComponent);
export default Collections;
