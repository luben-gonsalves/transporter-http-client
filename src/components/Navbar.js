import React from 'react';
import '../style.css';
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class Navbar extends React.Component{
   render(){
       console.log(this.props.dark);
       return (
       
           <div className="color">
           <div className="container color">
           <div className={`color ${this.props.dark? "dark":"light"}`}>
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
               <button className="ImportExport" type="submit">Export</button>&nbsp;&nbsp;&nbsp;
                  <button onClick={this.props.checkdark} className={`btn ${this.props.dark?"btn-primary":"btn-default"}`} ><i class="fa fa-moon-o" aria-hidden="true"></i></button>
                  <button onClick={this.props.checklight} className={`btn ${this.props.light?"btn-primary":"btn-default"}`}><i class="fa fa-sun-o" aria-hidden="true"></i></button>
              
            </nav>
</div>
           </div>
           </div>
       )
   }

}

export default Navbar;