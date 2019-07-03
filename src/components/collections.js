import React from "react";
import Collection from "./collection";

var data = [
  [
    {
      collectionName: "collection 1",
      requests: [
        {
          requestName: "GET",
          url: "https://"
        },
        {
          requestName: "POST",
          url: "https://"
        },
        {
          requestName: "PUT",
          url: "https://"
        }
      ]
    }
  ],
  [
    {
      collectionName: "collection 2",
      requests: [
        {
          requestName: "GET",
          url: "https://"
        },
        {
          requestName: "POST",
          url: "https://"
        },
        {
          requestName: "PUT",
          url: "https://"
        }
      ]
    }
  ]
];

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}

  showData() {
    return data.map(a => {
      return (
        <div>
          <Collection collectionData={a} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>collections</h4>
            <button
              type="button"
              class="btn btn-link"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              new collection
            </button>

            <div
              class="modal fade"
              id="exampleModalLong"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      New Collection
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
                    Collection Name
                    <input type="text" class="form-control" />
                    Description
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
            {this.showData()}
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
