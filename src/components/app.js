import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./navbar";
import SocialIcons from "./socialMediaIcons";
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./contact";

export default class App extends Component {
  render() {
    return (
      <div className='app-page'>
        <div className="colorblock"></div>

        <SocialIcons/>

        <BrowserRouter>
          <div className="app">
            <div className="leftside">
              <Navbar/>
            </div>
            
            <div className="rightside">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
