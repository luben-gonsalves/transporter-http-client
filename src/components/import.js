import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

let fileReader;
class ImportComponent extends React.Component {
  constructor(props) {
    super(props);
    this.HandleFileRead = this.HandleFileRead.bind(this);
    this.handleFileChosesn = this.handleFileChosesn.bind(this);
  }

  HandleFileRead = e => {
    const content = JSON.parse(fileReader.result);
    this.props.dispatch({
      type: "CREATE_COLLECTION",
      collectionData: content
    });
  };

  handleFileChosesn = file => {
    fileReader = new FileReader();
    fileReader.onloadend = this.HandleFileRead;
    fileReader.readAsText(file);
  };
  render() {
    return (
      <div>
        {/* <input
          type="file"
          id="file"
          accept=".json"
          //   value="Export"
          onChange={e => this.handleFileChosesn(e.target.files[0])}
        /> */}
        <label for="file-upload" className="custom-file-upload ">
          <i class="fa fa-cloud-upload" /> <span />
          Import
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".json"
          onChange={e => this.handleFileChosesn(e.target.files[0])}
        />
      </div>
    );
  }
}

let Import = connect(stateMapper)(ImportComponent);
export default Import;
