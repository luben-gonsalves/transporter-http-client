import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class HistoryData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.handleButton = this.handleButton.bind(this);
    this.historyData = this.historyData.bind(this);
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
  historyData() {
    console.log(this.props.hdata)

    if (this.props.hdata.requests && this.state.showMore) {

      return this.props.hdata.requests.map(b => {
        return (
          <div>
            <button type="button" class="btn btn-secondary btn-sm">{b.requestName}</button>
            <br />
            <br />
          </div>

        )
      })
    }
  }

  render() {
    return (
      <div >
        <div class="btn-group">

          <button type="button" onClick={this.handleButton} class="btn btn-secondary btn-sm">{this.props.hdata.historyName}</button>

          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Remove</a>
          </div>
        </div>
        <br />
        <br />
        {this.historyData()}
      </div>
    );
  }
}

export default HistoryData;
