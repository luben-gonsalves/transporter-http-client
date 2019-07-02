import React from "react";

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.handleButton = this.handleButton.bind(this);
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

  showCollectionData() {
    if (this.state.showMore) {
      return this.props.collectionData[0].requests.map(a => {
        return (
          <div>
            <p />
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-info btn-sm dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {a.requestName}
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Edit
                </a>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
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
            className="btn btn-danger"
            onClick={this.handleButton}
          >
            {this.props.collectionData[0].collectionName}
          </button>
          <button
            type="button"
            className="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          />
          <div className="dropdown-menu dropdown-menu-lg-right">
            <a className="dropdown-item" href="#">
              edit
            </a>
            <a className="dropdown-item" href="#">
              remove
            </a>
          </div>
        </div>
        <br />
        {this.showCollectionData()}
      </div>
    );
  }
}

export default Collection;
