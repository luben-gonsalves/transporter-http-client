import React from "react";
import HistoryData from "./historyData";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class HistoriesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.handleClear = this.handleClear.bind(this);
  }
  componentWillMount() {
    this.props.dispatch({
      type: "FETCH_HISTORIES"
    });
  }

  handleClear() {
    let $ = window.$;
    let modal = this.modal.current;
    this.props.dispatch({
      type: "CLEAR_HISTORY"
    });
    $(modal).modal("hide");
  }
  render() {
    return (
      <div class="text-center">
        <h6 className={this.props.dark ? "text-white" : "text-dark"}>
          History
        </h6>
        <hr className="bg-white" />
        {this.props.histories.length > 0 && (
          <button
            type="button"
            class="badge offset-md-8 "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            clear all
          </button>
        )}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          ref={this.modal}
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Clear history
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
                Are you sure you want to clear all your history requests?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn save"
                  onClick={this.handleClear}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {this.props.histories && (
          <button class="btn btn-link offset-md-8" onClick={this.handleClear}>
            clearall
          </button>
        )} */}

        {this.props.histories &&
          this.props.histories.map((a, i) => {
            return (
              <div>
                <HistoryData key={a.id} index={i} hdata={a} />
              </div>
            );
          })}
      </div>
    );
  }
}

let Histories = connect(stateMapper)(HistoriesComponent);
export default Histories;
