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

  <ul className="nav nav-tabs nav-justified ">
    <button className=" btn btn-secondary" data-toggle="tab" href="#params">params</button>&nbsp;
    <button className=" btn btn-secondary" data-toggle="tab" href="#Authentication">Authentication</button>&nbsp;
    <button className=" btn btn-secondary" data-toggle="tab" href="#Header">Header</button>&nbsp;
    <button className=" btn btn-secondary" data-toggle="tab" href="#Body">Body</button>&nbsp;
    &nbsp;&nbsp;<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
              Preview 
            </button>
  </ul>
  <Preview />
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