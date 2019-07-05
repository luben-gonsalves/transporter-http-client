import React from 'react';
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class InputQueryComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            query:"",
            get:false,
            post:false,
            put:false,
            delete:false,
            send:false
        }
        this.InputQueryFunction=this.InputQueryFunction.bind(this);
        this.getFunction =this.getFunction.bind(this);
        this.postFunction =this.postFunction.bind(this);
        this.putFunction =this.putFunction.bind(this);
        this.deleteFunction =this.deleteFunction.bind(this);
        this.sendFunction =this.sendFunction.bind(this);
    }

    InputQueryFunction(event){
      this.setState({
          query:event.target.value
      })

      this.props.dispatch({
          type:"INPUT_QUERY",
          query:this.state.query
      })
    }
    getFunction(){
        this.setState({
            get:true,
            post:false,
            put:false,
            delete:false
        })
   this.props.dispatch({
            type:"GET",
            get:this.state.get
        })
    }
        
    postFunction(){
        this.setState({
            get:false,
            post:true,
            put:false,
            delete:false
        })
        this.props.dispatch({
            type:"POST",
            post:this.state.post
        })

    }
    putFunction(){
        this.setState({
            get:false,
            post:false,
            put:true,
            delete:false
        })
        this.props.dispatch({
            type:"PUT",
            put:this.state.put
        })
    }
    deleteFunction(){
        this.setState({
            get:false,
            post:false,
            put:false,
            delete:true
        })
        this.props.dispatch({
            type:"DELETE",
            delete:this.state.delete
        })
    }
    
    sendFunction(){
        if(this.state.query===""){
            alert("Enter the URL");
        }else {
            this.setState({
                send:true
            })
        } 
        this.props.dispatch({
            type:"SEND",
            send:this.state.send
        })
    }

    render(){
        return(
            <div className="input-group mb-3 ">
               <div className="input-group-prepend">
               <div className="dropdown">
                    <button  className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Method
                   </button>
                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a onClick={this.getFunction} className="dropdown-item" href="#">GET</a>
                        <a onClick={this.postFunction} className="dropdown-item" href="#">POST</a>
                        <a onClick={this.putFunction} className="dropdown-item" href="#">PUT</a>
                        <a onClick={this.deleteFunction} className="dropdown-item" href="#">DELETE</a>
                   </div>
               </div>
               </div>
                <input onChange={this.InputQueryFunction} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <button onClick={this.sendFunction} type="button" className="btn btn-success">SEND</button>
            </div>
        );
    }
}
let InputQuery = connect(stateMapper)(InputQueryComponent);
export {InputQuery};

