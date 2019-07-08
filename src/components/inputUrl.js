import React from 'react';
 import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class InputQueryComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            query:"",
            Method:"GET",
            send:false
        }
        this.InputQueryFunction=this.InputQueryFunction.bind(this);
        this.handleMethod= this.handleMethod.bind(this);
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
    handleMethod(name){
        this.setState({
            Method:name
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
        
    }

    MethodCall(){
        this.props.dispatch({
            type:"SEND",
            send:this.state.send
        });
        this.props.dispatch({
            type:"METHOD",
            Method:this.state.Method
        })
    }

    render(){
        return(
            <div className="input-group mb-3 ">
               <div className="input-group-prepend">
               <div className="dropdown">
                    <button  className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       {this.state.Method}
                   </button>
                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a onClick={this.handleMethod.bind(this,"GET")} className="dropdown-item" href="#">GET</a>
                        <a onClick={this.handleMethod.bind(this,"POST")} className="dropdown-item" href="#">POST</a>
                        <a onClick={this.handleMethod.bind(this,"PUT")} className="dropdown-item" href="#">PUT</a>
                        <a onClick={this.handleMethod.bind(this,"DELETE")} className="dropdown-item" href="#">DELETE</a>
                   </div>
               </div>
               </div>
                <input onChange={this.InputQueryFunction} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <button onClick={this.sendFunction} type="button" className="btn btn-success">SEND</button>
                {this.MethodCall()}
            </div>
        );
    }
}
let InputQuery = connect(stateMapper)(InputQueryComponent);
export {InputQuery};

