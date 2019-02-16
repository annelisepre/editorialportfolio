import React, { Component } from 'react';

import Navbar from "./navbar";

export default class App extends Component {
  render() {
    return (
      <div className='app-page'>
        <div className="colorblock"></div>

        <div className="app">
          <div className="leftside">
            <Navbar/>
          </div>

          <div className="rightside">
            <div className="container"> 
              <div className="image-block">
                <div className="image-block-left">
                  <img src="/assets/Annelise-June.jpg" alt="Annelise"></img>
                </div>

                <div className="image-block-right">
                  <img src="/assets/aandj.jpg" alt="Annelise and Jake"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
