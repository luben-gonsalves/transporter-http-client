import React from "react";
import HistoryData from "./historyData";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class HistoriesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
  }
  componentWillMount() {
    this.props.dispatch({
      type: "FETCH_HISTORIES"
    });
  }

  handleClear() {
    this.props.dispatch({
      type: "CLEAR_HISTORY"
    });
  }
  render() {
    return (
      <div class="text-center">
        <h4>Histories</h4>
        <hr />
        {this.props.histories && (
          <button class="btn btn-link offset-md-8" onClick={this.handleClear}>
            clearall
          </button>
        )}

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
