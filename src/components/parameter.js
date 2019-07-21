import React from "react";
import ParamTable from "./ParamTable";
import HeaderTable from "./HeaderTable";
import Authentication from "./authentication";
import BodyTable from "./BodyTable";
import "../style.css";

class Params extends React.Component {
  render() {
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
              handleAddRow={this.props.handleAddRow}
              rows={this.props.rows}
              handleChange={this.props.handleChange}
              handleRemoveSpecificRow={this.props.handleRemoveSpecificRow}
              dark={this.props.dark}
              light={this.props.light}
            />
          </div>

          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <HeaderTable 
            handleHeaderChange={this.props.handleHeaderChange}
            handleHeaderRemoveSpecificRow={this.props.handleHeaderRemoveSpecificRow}
            handleHeaderAddRow={this.props.handleHeaderAddRow}
            HeaderRows={this.props.HeaderRows}
            
            />
          </div>
          <div
            class="tab-pane fade"
            id="pills-body"
            role="tabpanel"
            aria-labelledby="pills-body-tab"
          >
            <BodyTable 
            JSONbodyHandler={this.props.JSONbodyHandler}
            handleBodyChange={this.props.handleBodyChange}
            handleBodyAddRow={this.props.handleBodyAddRow}
            handleBodyRemoveSpecificRow={this.props.handleBodyRemoveSpecificRow}
            bodyRows={this.props.bodyRows} />
          </div>
        </div>
      </div>
    );
  }
}

export default Params;
