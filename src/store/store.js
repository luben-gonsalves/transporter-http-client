import {createStore} from 'redux';

let myReducer= function(state, action){
    let newState = {
       // name:""
    }
    // if(action.type == "TEST"){
    //     newState.name = "jaylal"
    // }

    
    return newState;
}

let myStore = createStore(myReducer);

myStore.subscribe(function(){
    console.log(myStore.getState());
})

// action.dispatch({
//     type:"TEST"
// })



export {myStore};