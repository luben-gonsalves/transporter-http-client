import { bindActionCreators } from "redux";

function sendHttpRequest(store, data) {
  let httpRequest = {};
  var url = data.url;
  if (data.method && data.method !== "GET") {
    httpRequest.method = data.method;
  }

  if (data.rows.length > 0) {
    var result = "";
    for (var i in data.rows) {
      result += data.rows[i].key + "=" + data.rows[i].value + "&";
    }
    url = url + "?" + result;
    url.slice(0, -1);
  }

  if (data.HeaderRows.length > 0) {
    let keys = [];
    let values = [];
    let headers = {};
    for (let i = 0; i < data.HeaderRows.length; i++) {
      keys.push(data.HeaderRows[i].key);
      values.push(data.HeaderRows[i].value);
    }
    keys.forEach((key, i) => (headers[key] = values[i]));
    httpRequest.headers = headers;
  }

  if (data.bodyRows.length > 0) {
    let keys = [];
    let values = [];
    let body = {};
    for (let i = 0; i < data.bodyRows.length; i++) {
      keys.push(data.bodyRows[i].key);
      values.push(data.bodyRows[i].value);
    }
    keys.forEach((key, i) => (body[key] = values[i]));
    httpRequest.body = JSON.stringify(body);
  }
  
  if (data.jsonBody) {
    httpRequest.body = data.jsonBody;
  }

  fetch(url, httpRequest)
    .then(function(data) {
      return data.json();
    })
    .then(function(response) {
      console.log("response", response);
      store.dispatch({
        type: "DATA_FETCHED",
        responseData: JSON.stringify(response)
      });
    })
    .catch(function(err) {
      console.log("fetch error ==>", err);
    });
}

export default sendHttpRequest;
