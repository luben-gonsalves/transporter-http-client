import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class CollectionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      collectionName: "",
      description: ""
    };

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
      type: "DELETE_COLLECTION",
      index: this.props.index
    });
  }

  editCollection() {
    const { collectionName, description } = this.state;

    var data = {
      collectionName,
      description,
      index: this.props.index
    };

    this.props.dispatch({
      type: "EDIT_COLLECTION",
      editData: data
    });
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
      return this.props.collectionData[0].requests.map(a => {
        return (
          <div>
            <p />
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-light btn-sm dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {a.requestName} {a.url}
              </button>
              <div className="dropdown-menu ">
                <a
                  className="dropdown-item"
                  href="#requestModal"
                  data-toggle="modal"
                  data-target="#requestModal"
                >
                  Edit
                </a>
                <a className="dropdown-item" href="#">
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
            <p />
          </div>
        );
      });
    } else {
      return <p> </p>;
    }
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-info"
            onClick={this.handleButton}
          >
            {/* {this.props.collectionData.collectionName} */}
            {this.props.children}
          </button>
          <button
            type="button"
            className="btn btn-info dropdown-toggle dropdown-toggle-split"
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
          </div>
        </div>
        <div
          className="modal fade"
          id={"a0" + this.props.index}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={"a0L" + this.props.index}
          aria-hidden="true"
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
                  className="btn btn-primary"
                  onClick={this.editCollection}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        {this.showCollectionData()}
      </div>
    );
  }
}

let Collection = connect(stateMapper)(CollectionComponent);
export default Collection;
