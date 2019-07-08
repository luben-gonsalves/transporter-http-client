import React from "react";

class HistoryComponent extends React.Component {
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

  showHistoryData() {
    if (this.state.showMore) {
      return this.props.historyData[0].requests.map(a => {
        return (
          <div>
            <p />
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-light btn-sm dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {a.requestName} {a.url}
              </button>
              <div class="dropdown-menu ">
                <a
                  class="dropdown-item"
                  href="#requestModal"
                  data-toggle="modal"
                  data-target="#requestModal"
                >
                  Save request
                </a>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
              </div>
            </div>
            <div
              class="modal fade"
              id="requestModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Save REQUEST
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Name
                    <input type="text" class="form-control" />
                
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save 
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
            {this.props.historyData[0].requestName}
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
              href="#exampleModal"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Save request
            </a>
            <a className="dropdown-item" href="#">
              remove
            </a>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Save request
              
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                History
                <input type="text" class="form-control" />
            
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        {this.showHistoryData()}
      </div>
    );
  }
}

export default HistoryComponent;
