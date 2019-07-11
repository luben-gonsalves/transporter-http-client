function sendReducer(send="" ,action){
    if(action.type ==="SEND"){
        let state = action.send;
        return state;
    }
    return send;
}

export default sendReducer;