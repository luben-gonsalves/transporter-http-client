import React from 'react';
import {InputQuery} from './inputUrl';
import ParamsTable from './HeaderTable';
import HeaderTable from './HeaderTable';

class Params extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isParams:false,
            isAuth:false,
            isHeader:false,
            isBody:false
        }
        this.params =this.params.bind(this);
        this.Header =this.Header.bind(this);
        
    }
    params =function(){
        this.setState({
            isParams:true,
            isHeader:false
        })
    }
    Header =function(){
        this.setState({
            isHeader:true,
            isParams:false
        })
    }
    render(){
        return(
            <div>
            <button type="button" onClick={this.params} className="btn btn-secondary params">Params</button>&nbsp;
            <button type="button" onClick={this.auth} className="btn btn-secondary">Authorization</button>&nbsp;
            <button type="button" onClick={this.Header} className="btn btn-secondary">Header</button>&nbsp;
            <button type="button" className="btn btn-secondary">Body</button>&nbsp;
            <hr></hr>
            <div>{this.state.isParams===true ? <ParamsTable /> :''}</div>
            
            </div>
        );
    }
}


export default Params;