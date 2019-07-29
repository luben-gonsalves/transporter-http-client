import Import from "./import";
import React from "react";
import "../style.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class Navbar extends React.Component {
  render() {
    return (
      // <div className="color">
      //   <div className="container color">
      //     <div className={`color ${this.props.dark ? "dark" : "light"}`}>
      //       <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      //         <a className="navbar-brand" href="#">
      // <div class="dropdown">
      //   <button
      //     type="button"
      //     class="input btn btn-info drop dropdown-toggle dropdown-toggle-split"
      //     data-toggle="dropdown"
      //     aria-haspopup="true"
      //     aria-expanded="false"
      //   >
      //     Transporter
      //   </button>
      //   <ul className="dropdown-menu text-center">
      //     <li>
      //       <a
      //         href="#"
      // onClick={this.props.checkdark}
      // className={`btn ${
      //   this.props.dark ? "btn-primary" : "btn-default"
      // }`}
      //       >
      //         Dark mode
      //       </a>
      //     </li>
      //     <li>
      //       <a
      //         href="#"
      // onClick={this.props.checklight}
      // className={`btn ${
      //   this.props.light ? "btn-primary" : "btn-default"
      // }`}
      //       >
      //         Light mode
      //       </a>
      //     </li>
      //   </ul>
      // </div>
      <div className="dropdown text-center">
        <a
          className="btn btn-lg dropdown-toggle transporter"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Transporter
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a
            href="#"
            onClick={this.props.checkdark}
            className={`dropdown-item ${
              this.props.dark ? "btn btn-primary" : "btn btn-default"
            }`}
          >
            Dark Mode
          </a>
          <a
            href="#"
            onClick={this.props.checklight}
            className={`dropdown-item  ${
              this.props.light ? "btn btn-primary" : "btn btn-default"
            }`}
          >
            Light Mode
          </a>
          <a className="dropdown-item">
            <Import />
          </a>
        </div>
      </div>
      //         </a>
      //       </nav>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Navbar;
