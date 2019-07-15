import React from "react";
import { stateMapper } from "../store/store";
import { connect } from "react-redux";
import '../style.css';

class RawComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      JSONbody:""
    }

    this.JSONbodyHandler =this.JSONbodyHandler.bind(this);
    this.JSONbodybuttonHandler=this.JSONbodybuttonHandler.bind(this);
  }
  JSONbodyHandler(event){
   this.setState({
     JSONbody:event.target.value
   })
  }
  JSONbodybuttonHandler(){
    this.props.dispatch({
      type:"JSON_BODY",
      JSONbody:this.state.JSONbody
    })
  }
  render() {
    console.log(this.state.JSONbody);
    return (
      <div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" />
          <textarea
            className=" form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            onChange={this.JSONbodyHandler}
          />
          <button onClick={this.JSONbodybuttonHandler} >Add</button>
        </div>
      </div>
    );
  }
}

let rawBody = connect(stateMapper)(RawComponent);
export default rawBody;
