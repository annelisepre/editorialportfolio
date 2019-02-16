import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      imagesLeft: [
        {key: 1, image: "/assets/Annelise-June.jpg"},
        {key: 2, image: "/assets/jakeandaj.jpg"},
        {key: 3, image: "/assets/babyannelise.JPG"},
        {key: 4, image: "/assets/anneliseandjake.jpg"},
      ],
      imagesRight: [
        {key: 1, image: "/assets/aandj.jpg"},
        {key: 2, image: "/assets/AnneliseJunePhotoFushimiInari.JPG"},
        {key: 3, image: "/assets/AnneliseJunePhoto-1-2.JPG"},
        {key: 4, image: "/assets/Annelise-June-Photography-Lake-Blanche-1-20.JPG"},
      ],
    }
  }

  addCounter = () => {
    if (this.state.counter < this.state.imagesLeft.length) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  subCounter = () => {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  render() {
    return (
      <div className='home-page'>
        <div className="container"> 
          <div className="image-block">
            <div className="image-block-left">
              <img src={this.state.imagesLeft[this.state.counter - 1].image} alt="Annelise"></img>
            </div>

            <div className="arrows homepage-arrows">
              <div className="left-arrow">
                <img onClick={() => this.subCounter()} src="/assets/left-black.png"></img>
              </div>

              <div className="right-arrow">
                <img onClick={() => this.addCounter()} src="/assets/right-black.png"></img>
              </div>
            </div>

            <div className="counter">
              <p>Ø{this.state.counter} / Ø{this.state.imagesLeft.length}</p>
            </div>

            <div className="image-block-right">
              <img src={this.state.imagesRight[this.state.counter - 1].image} alt="Annelise and Jake"></img>
            </div>
          </div>
        </div>

        <div className="about-me">
          <div className="aboutme-header">
            <div className="blockoutline">
              <p>Hi, I’m Annelise!<br/>(pronounced “on-uh-lease”)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}