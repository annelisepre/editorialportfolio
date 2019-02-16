import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="nav-topside">
          <div className="firstname">
            <h1>ANNELISE</h1>
          </div>
            <br/>
          <div className="lastname">
            <h1>PRECIADO</h1>
          </div>
        </div>

        <div className="nav-bottomside">
          <NavLink exact to="/" activeClassName="navlink-active">HOME</NavLink>
          <NavLink to="/index" activeClassName="navlink-active">PORTFOLIO</NavLink>
          <NavLink to="/index" activeClassName="navlink-active">RESUME</NavLink>
          <NavLink to="/index" activeClassName="navlink-active">CONTACT</NavLink>
        </div>
      </div>
    );
  }
}
