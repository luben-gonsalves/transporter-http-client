function inputQueryReducer(inputQuery="" , action){
  if(action.type ==="INPUT_QUERY"){
      inputQuery=action.query;
      return inputQuery;
  }
  return inputQuery;
}

export default inputQueryReducer;