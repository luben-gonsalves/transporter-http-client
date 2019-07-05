import React from 'react';

class HeaderTable extends React.Component{
    render(){
        return(
          <div className="container">
          <div className="row">
              <div className="col-md-8">
      <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Key</th>
          <th scope="col">Value</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        <tr>
        <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        <tr>
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


export default HeaderTable;