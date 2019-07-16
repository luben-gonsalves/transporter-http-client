
function rawJSONbodyReducer(JSONbody="",action){
if(action.type==="JSON_BODY"){
    let state = JSONbody.slice();
        state = action.JSONbody;
    return state;
}
return JSONbody;
}
export default rawJSONbodyReducer;