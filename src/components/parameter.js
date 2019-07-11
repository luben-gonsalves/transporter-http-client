import React from 'react';
import {InputQuery} from './inputUrl';
import ParamTable from './ParamTable';
import HeaderTable from './HeaderTable';
import Authentication from './authentication';
import BodyTable from './BodyTable';
import Preview from './preview';


class Params extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="container">

  <ul className="nav nav-pills">
    <li ><a className=" btn btn-primary"data-toggle="pill"  href="#params">params</a></li>&nbsp;
    <li><a className=" btn btn-primary" data-toggle="pill" href="#Authentication">Authentication</a></li>&nbsp;
    <li><a className=" btn btn-primary" data-toggle="pill" href="#Header">Header</a></li>&nbsp;
    <li><a className=" btn btn-primary" data-toggle="pill" href="#Body">Body</a></li>&nbsp;
  </ul>
  <div className="tab-content">
    <div id="params" className="tab-pane fade in active">
      <ParamTable />
    </div>
    <div id="Authentication" className="tab-pane fade">
    <Authentication />
    </div>
    <div id="Header" className="tab-pane fade">
      <HeaderTable />
    </div>
    <div id="Body" className="tab-pane fade">
      <p></p>
      <BodyTable />
    </div>
  </div>
</div>
        );
    }
}


export default Params;