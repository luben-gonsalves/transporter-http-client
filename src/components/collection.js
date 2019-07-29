import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import { RequestOfCollection } from "./requestsOfCollection";

class CollectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: true,
      collectionName: "",
      description: ""
    };
    this.modal = React.createRef();
    this.handleButton = this.handleButton.bind(this);
    this.removeCollection = this.removeCollection.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.editCollection = this.editCollection.bind(this);
  }

  handleButton() {
    this.state.showMore
      ? this.setState({
          showMore: false
        })
      : this.setState({
          showMore: true
        });
  }

  removeCollection() {
    this.props.dispatch({
      type: "REMOVE_COLLECTION",
      id: this.props.collectionData.id
    });
  }

  editCollection() {
    let $ = window.$;
    let modal = this.modal.current;
    const { collectionName, description } = this.state;

    var data = {
      collectionName,
      description,
      id: this.props.id
    };

    this.props.dispatch({
      type: "EDIT_COLLECTION",
      editData: data
    });
    $(modal).modal("hide");
  }

  onChangeHandler(event) {
    console.log(this.props.index);
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  showCollectionData() {
    if (this.state.showMore && this.props.collectionData.requests) {
      return this.props.collectionData.requests.map((a, i) => {
        return (
          <div>
            <RequestOfCollection
              a={a}
              key={i}
              requestIndex={i}
              id={this.props.id}
            />
          </div>
        );
      });
    }
  }

  exportCollection(content, fileName, contentType = "text/plain") {
    content = JSON.stringify(content, undefined, 2);
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName + ".json";
    a.click();
  }

  render() {
    return (
      <div>
        <div className="btn-group pt-2">
          <button
            type="button"
            className="btn btn-sm collection"
            onClick={this.handleButton}
          >
            {this.props.children}
          </button>
          <button
            type="button"
            className="btn btn-sm dropdown-toggle dropdown-toggle-split collection"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu dropdown-menu-lg-right">
            <a
              className="dropdown-item"
              href={"#a0" + this.props.index}
              data-toggle="modal"
              data-target={"#a0" + this.props.index}
            >
              edit
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={this.removeCollection}
            >
              remove
            </a>
            <a
              className="dropdown-item"
              href="#"
              onClick={() =>
                this.exportCollection(
                  this.props.collectionData,
                  this.props.collectionData.collectionName
                )
              }
            >
              export
            </a>
          </div>
        </div>
        <div
          className="modal fade"
          id={"a0" + this.props.index}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={"a0L" + this.props.index}
          aria-hidden="true"
          ref={this.modal}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={"a0L" + this.props.index}>
                  EDIT COLLECTION
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
                  name="collectionName"
                  type="text"
                  className="form-control"
                  onChange={this.onChangeHandler}
                />
                Description
                <input
                  name="description"
                  type="text"
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
                  className="btn save"
                  onClick={this.editCollection}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.showCollectionData()}
      </div>
    );
  }
}

let Collection = connect(stateMapper)(CollectionComponent);
export default Collection;
