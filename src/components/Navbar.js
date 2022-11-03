import React from "react";
import AppButton from "./AppButton";

function Navbar(props){
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <h1 className="title"> TODOLIST </h1>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>

          <a className="navbar-item">
            Calendar
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
             <AppButton text='Log in' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;