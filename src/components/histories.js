import React from "react";
import HistoryData from "./historyData";

var data = [

  {
    historyName: "july 8",
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
  ,

  {
    historyName: "july 7",
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

];

class Histories extends React.Component {


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Histories</h4>
            {data.map((a, i) => {
              return (
                <div>
                  <HistoryData key={a} index={i} hdata={a} />
                </div>
              )
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default Histories;
