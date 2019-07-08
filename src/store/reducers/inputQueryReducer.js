function inputQueryReducer(inputQuery="" , action){
  if(action.type ==="INPUT_QUERY"){
    let state = inputQuery.slice();
      state=action.query;
      return state;
  }
  if(action.type==="UPDATE_PARAM"){
    let state = inputQuery.slice();
    return state + action.parameter;
  }
  return inputQuery;
}

export default inputQueryReducer;