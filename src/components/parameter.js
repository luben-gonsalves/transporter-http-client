import React from "react";
import ParamTable from "./ParamTable";
import HeaderTable from "./HeaderTable";
import Authentication from "./authentication";
import BodyTable from "./BodyTable";
import '../style.css';

class Params extends React.Component {
  render() {
    console.log(this.props.handleAddRow);
    return (
      <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Param
            </a>
          </li>
          &nbsp;
          <li class="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Authentication
            </a>
          </li>
          &nbsp;
          <li class="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Header
            </a>
          </li>
          &nbsp;
          <li class="nav-item">
            <a
              className="nav-link"
              id="pills-body-tab"
              data-toggle="pill"
              href="#pills-body"
              role="tab"
              aria-controls="pills-body"
              aria-selected="false"
            >
              Body
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <ParamTable 
             handleAddRow ={this.props.handleAddRow}
             rows={this.props.rows}
             handleChange={this.props.handleChange}
             handleRemoveSpecificRow ={this.props.handleRemoveSpecificRow}
            />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Authentication />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <HeaderTable />
          </div>
          <div
            class="tab-pane fade"
            id="pills-body"
            role="tabpanel"
            aria-labelledby="pills-body-tab"
          >
            <BodyTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Params;
