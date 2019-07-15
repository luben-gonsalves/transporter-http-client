import React from 'react';
import '../style.css';

class Navbar extends React.Component{
    constructor(props){
        super(props);

    }
   render(){
       return (
           <div className="color">
           <div className="container color">
          <nav className="navbar navbar-expand-sm" >
               <a className="navbar-brand" href="#"><div class="dropdown">
               <button type="button" class="input drop dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Transporter</button>
                          <ul className="dropdown-menu">
                             <li><a href="#">Demo 1</a></li>
                             <li><a href="#">Demo 2</a></li>
                              <li><a href="#">Demo 3</a></li>
                        </ul>
                      </div></a>
               <button className="ImportExport" type="submit">Import</button>&nbsp;&nbsp;&nbsp;
               <button className="ImportExport" type="submit">Export</button>
              
            </nav>
</div>
           </div>
       )
   }

}

export default Navbar;