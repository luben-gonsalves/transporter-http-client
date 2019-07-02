import React from 'react';

class InputQuery extends React.Component{
    render(){
        return(
            <div className="input-group mb-3 ">
               <div className="input-group-prepend">
               <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Method
                   </button>
                   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">GET</a>
                        <a className="dropdown-item" href="#">POST</a>
                        <a className="dropdown-item" href="#">PUT</a>
                        <a className="dropdown-item" href="#">DELETE</a>
                   </div>
               </div>
               </div>
                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                <button type="button" className="btn btn-success">SEND</button>
            </div>
        );
    }
}

export {InputQuery};
