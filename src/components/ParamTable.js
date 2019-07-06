import React from 'react';
import { stateMapper } from "../store/store";
import { connect } from "react-redux";

class ParamTableComponent extends React.Component{
  constructor(props){
    super(props);

    this.state={
      checkbox1:false,
      key1:"",
      value1:"",
      description1:"",
      parameter:""
    }
    this.checkBoxHandle =this.checkBoxHandle.bind(this);
    this.key1=this.key1.bind(this);
    this.value1=this.value1.bind(this);
    this.description1=this.description1.bind(this);
  }
  key1(event){
    this.setState({
      key1:event.target.value
    })
  }

  value1(event){
    this.setState({
      value1:event.target.value
    })
  }

  description1(event){
    this.setState({
      description1:event.target.vale
    })
  }
  checkBoxHandle(){
    this.setState({
      checkbox1:true
    })
    if(this.state.checkbox1 ===true){
      this.setState({
        parameter:"&" + this.state.key1 + "=" + this.state.value1
      })

      this.props.dispatch({
        type:"UPDATE_PARAM",
        parameter:this.state.parameter
      })
   }
  }
    render(){
    
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
            <table class="table table-borderless">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Key</th>
                <th scope="col">Value</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input onClick={this.checkBoxHandle} type="checkbox" /></td>
                <td><input onChange={this.key1} type="text" className="form-control" /></td>
                <td><input onChange={this.value1} type="text" className="form-control" /></td>
                <td><input onChange={this.description1} type="text" className="form-control" /></td>
              </tr>
              <tr>
              <td><input type="checkbox" /></td>
              <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              <tr>
              <td><input type="checkbox" /></td>
              <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
              </tr>
              
            </tbody>
          </table>
          </div>
          </div>
          </div>
        );
    }
}

let ParamTable = connect(stateMapper)(ParamTableComponent);
export default ParamTable;