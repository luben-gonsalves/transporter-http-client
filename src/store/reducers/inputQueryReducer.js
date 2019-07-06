function inputQueryReducer(inputQuery="" , action){
  if(action.type ==="INPUT_QUERY"){
      inputQuery=action.query;
      return inputQuery;
  }
  if(action.type==="UPDATE_PARAMS"){
    inputQuery = inputQuery + action.parameter;
    return inputQuery;
  }
  return inputQuery;
}

export default inputQueryReducer;