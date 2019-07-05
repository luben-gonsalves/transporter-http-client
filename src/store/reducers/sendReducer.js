function sendReducer(send ,action){
    if(action.type ==="SEND"){
        send = action.send;
        return send;
    }
    return send;
}

export default sendReducer;