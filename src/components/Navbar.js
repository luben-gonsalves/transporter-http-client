import React from 'react';
import '../style.css';

class Navbar extends React.Component{
    constructor(props){
        super(props);

    }
   render(){
       return (
           <div className="color">
           <div className="conatiner color">
          <nav className="navbar navbar-expand-sm " >
               <a className="navbar-brand" href="#"><div class="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Transporter
                      <span className="caret"></span></button>
                          <ul className="dropdown-menu">
                             <li><a href="#">Demo 1</a></li>
                             <li><a href="#">Demo 2</a></li>
                              <li><a href="#">Demo 3</a></li>
                        </ul>
                      </div></a>
               <button class="btn btn-success" type="submit">Import</button>&nbsp;&nbsp;&nbsp;
               <button class="btn btn-success" type="submit">Export</button>
              
            </nav>
</div>
           </div>
       )
   }

}

export default Navbar;