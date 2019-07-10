import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class BodyTableComponent extends React.Component {
    constructor(props){
        super(props);

        this.state={
            JSONData :{}
        }
        this.JSONDataHandler=this.JSONDataHandler.bind(this);
    }

    JSONDataHandler(event){
        this.setState({
            JSONData:event.target.value
        })
    }
  render() {
    const userStr = JSON.stringify(this.state.JSONData);
    JSON.parse(userStr, (key, value) => {
        if(key!==""){
      let str = key+ "="+value;
     this.props.inputQuery= this.props.inputQuery + str + "&" ; 
        }
     });
    console.log(this.props.inputQuery);
    return (
      <div className="container">
        <ul className="nav nav-pills">
          <button
            className=" btn btn-secondary"
            data-toggle="pill"
            href="#none"
          >
            None
          </button>
          &nbsp;
          <button
            className=" btn btn-secondary"
            data-toggle="pill"
            href="#form-data"
          >
            form-data
          </button>
          &nbsp;
          <button className=" btn btn-secondary" data-toggle="pill" href="#raw">
            raw
          </button>
          &nbsp;
          <button
            className=" btn btn-secondary"
            data-toggle="pill"
            href="#binary"
          >
            Binary
          </button>
          &nbsp;
        </ul>
        <hr />
        <div className="tab-content">
          <div id="none" className="tab-pane fade in active" />
          <div id="form-data" className="tab-pane fade">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Key</th>
                        <th scope="col">Value</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div id="raw" className="tab-pane fade" >
         <label>Enter JSON data</label>
         <textarea onChange={this.JSONDataHandler} className="form-control" rows="5" id="comment"></textarea>
      </div>
          <div id="binary" className="tab-pane fade">
            <button className="btn btn-primary" type="file">
              Upload file
            </button>
          </div>
        </div>
      </div>
    );
  }
}
let BodyTable = connect(stateMapper)(BodyTableComponent);
export default BodyTable;
