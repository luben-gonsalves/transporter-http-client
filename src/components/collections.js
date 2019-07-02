import React from "react";
import Collection from "./collection";

var data = [
  [
    {
      collectionName: "collection 1",
      requests: [
        {
          requestName: "GET",
          url: "https????"
        },
        {
          requestName: "POST",
          url: "https????"
        },
        {
          requestName: "PUT",
          url: "https????"
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
          url: "https????"
        },
        {
          requestName: "POST",
          url: "https????"
        },
        {
          requestName: "PUT",
          url: "https????"
        }
      ]
    }
  ]
];

class Collections extends React.Component {
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
            {this.showData()}
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
