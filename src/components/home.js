import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='home-page'>
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
    );
  }
}