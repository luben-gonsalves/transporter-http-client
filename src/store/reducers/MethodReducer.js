function MethodReducer(Method="" , action){
    if(action.type ==="GET"){
       Method = action.get;
        return Method;
    }
    if(action.type ==="POST"){
         Method = action.post;
        return Method;
    }
    if(action.type ==="PUT"){
         Method = action.put;
        return Method;
    }
    if(action.type ==="DELETE"){
         Method =action.delete;
        return Method;
    }
    return Method;
  }

  export default MethodReducer;