import React from 'react';
import {InputQuery} from './inputUrl';
import ParamsTable from './HeaderTable';
import HeaderTable from './HeaderTable';

class Params extends React.Component{
    render(){
        return(
            <div>
            <button type="button" className="btn btn-secondary params">Params</button>&nbsp;
            <button type="button" className="btn btn-secondary">Authorization</button>&nbsp;
            <button type="button" className="btn btn-secondary">Header</button>&nbsp;
            <button type="button" className="btn btn-secondary">Body</button>&nbsp;
            <hr></hr>
            <ParamsTable />
            <HeaderTable />
            </div>
        );
    }
}


export default Params;