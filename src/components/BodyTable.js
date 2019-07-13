import React from "react";
import FormTable from "./formTable";
import Raw from "./raw";

class BodyTable extends React.Component {
  render() {
    return (
      <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-form-data-tab"
              data-toggle="pill"
              href="#pills-form-data"
              role="tab"
              aria-controls="pills-form-data"
              aria-selected="true"
            >
              form-data
            </a>
          </li>
          &nbsp;
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-raw-tab"
              data-toggle="pill"
              href="#pills-raw"
              role="tab"
              aria-controls="pills-raw"
              aria-selected="false"
            >
              raw
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-form-data"
            role="tabpanel"
            aria-labelledby="pills-form-data-tab"
          >
            <FormTable />
          </div>
          <div
            class="tab-pane fade"
            id="pills-raw"
            role="tabpanel"
            aria-labelledby="pills-raw-tab"
          >
            <Raw />
          </div>
        </div>
      </div>
    );
  }
}
export default BodyTable;
