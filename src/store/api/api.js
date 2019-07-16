
function sendHttpRequest(store, action) {

    let httpRequest = {};

    if (action.headers) {
        httpRequest.headers = action.headers;
    }
    if (action.method) {
        httpRequest.method = action.method;
    }
    if (action.body) {
        httpRequest.body = JSON.stringify(action.body)
    }

    if (action.params) {
        //manipulate the url here
    }


    fetch(url, httpRequest)
        .then(function (data) {

            store.dispatch({
                type: "DATA_FETCHED",
                responseData: data

            })
        })

        .catch(function (err) {
            console.log("fetch error ==>", err);
        });
}



export default sendHttpRequest;