import React from "react";
import Collection from "./collection";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import Import from "./import";

class CollectionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionName: "",
      description: ""
    };
    this.modal = React.createRef();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount() {
    this.props.dispatch({
      type: "FETCH_COLLECTIONS"
    });
  }

  showData() {
    if (this.props.collections) {
      return this.props.collections.map((a, i) => {
        return (
          <div>
            <Collection collectionData={a} id={a.id} key={a.id} index={i}>
              {a.collectionName}
            </Collection>
          </div>
        );
      });
    }
  }

  onChangeHandler(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  save() {
    let $ = window.$;
    let modal = this.modal.current;
    this.props.dispatch({
      type: "CREATE_COLLECTION",
      collectionData: this.state
    });
    this.setState({
      collectionName: "",
      description: ""
    });
    $(modal).modal("hide");
  }

  render() {
    return (
      <div class="text-center">
        <button
          type="button"
          className="btn btn-link "
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          <i class="fa fa-plus" aria-hidden="true">
            <span> new collection</span>
          </i>
        </button>
        <span>
          <Import />
        </span>
        <hr />
        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
          ref={this.modal}
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
                  value={this.state.collectionName}
                  name="collectionName"
                  className="form-control"
                  onChange={this.onChangeHandler}
                />
                Description
                <input
                  type="text"
                  value={this.state.description}
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
                  className="btn btn-success"
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
    );
  }
}
let Collections = connect(stateMapper)(CollectionsComponent);
export default Collections;
