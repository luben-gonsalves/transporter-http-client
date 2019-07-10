function MethodReducer(Method="", action){
    if(action.type ==="METHOD"){
        let state=Method.slice();
        state = action.Method;
            return state;
    }
    return Method;
  }

  export default MethodReducer;