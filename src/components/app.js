import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./navbar";
import SocialIcons from "./socialMediaIcons";
import Home from "./home";

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
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
