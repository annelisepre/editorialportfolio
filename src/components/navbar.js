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
          <NavLink exact to="/" activeClassName="navlink-active navlink">
            HOME
            <div className="line"/>
          </NavLink>

          <NavLink exact to="/about" activeClassName="navlink-active navlink">
            ABOUT
            <div className="line"/>
          </NavLink>

          <NavLink to="/portfolio" activeClassName="navlink-active navlink">
            PORTFOLIO
            <div className="line"/>
          </NavLink>

          <NavLink to="/resume" activeClassName="navlink-active navlink">
            RESUME
            <div className="line"/>
          </NavLink>

          <NavLink to="/contact" activeClassName="navlink-active navlink">
            CONTACT
            <div className="line"/>
          </NavLink>
        </div>
      </div>
    );
  }
}
