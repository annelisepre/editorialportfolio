import React, { Component } from 'react';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      visible: 'visible',
      skills: [
        {skill: 'JavaScript'},
        {skill: 'Python'},
        {skill: 'React.js'},
        {skill: 'Redux.js'},
        {skill: 'Node.js'},
        {skill: 'NPM'},
        {skill: 'JSX'},
        {skill: 'JQuery'},
        {skill: 'SQL & mySQL'},
        {skill: 'MongoDB'},
        {skill: 'Git & Github'},
        {skill: 'HTML5'},
        {skill: 'CSS3'},
        {skill: 'SCSS'},
        {skill: 'Selenium'},
        {skill: 'Mocha.js'},
        {skill: 'Chai.js'},
        {skill: 'Adobe LR'},
      ],
      experiences: [
        {exp: this.expOne()},
        {exp: this.expTwo()},
        {exp: this.expThree()},
        {exp: this.expFour()},
        {exp: this.expFive()},
      ]
    }
  }

  skills = () => {
    return this.state.skills.map(x => {
      return <p>{Object.values(x)}</p>
    })
  }

  addCounter = () => {
    if (this.state.counter < this.state.experiences.length) {
      this.setState({
        counter: this.state.counter + 1,
      })
    } else if (this.state.counter == this.state.experiences.length) {
      this.setState({
        counter: 1,
      })
    }
  }

  subCounter = () => {
    if (this.state.counter > 1) {
      this.setState({
        counter: this.state.counter - 1,
      })
    } else if (this.state.counter == 1) {
      this.setState({
        counter: this.state.experiences.length
      })
    }
  }

  expOne = () => {
    return(
      <div className='experience exp1'>
        <p><span>Freelance Software Developer</span></p>
        <p>Dec 2018 - Present</p>
        <div className='exp-content'>
          <p>Designed and coded a variety of projects:</p>
          <ul>
            <li>ECommerce site: React, HTML5, JSX, Redux, & SCSS.</li>
            <li>React Portfolio: React, HTML5, JSX, SCSS, Redux, CSS Grid, & CSS Flexbox</li>
            <li>DailySmarty Branding: HTML5, CSS Flexbox & CSS Grid</li>
            <li>Fantastic Fries: Python backend built with a HTML5 frontend. Utilizing parallax scrolling, an embedded iFrame with Google Maps, CSS Flexbox and CSS Grid styling</li>
          </ul>
        </div>
      </div>
    )
  }

  expTwo = () => {
    return(
      <div className='experience exp2'>
        <p><span>Wedding Photographer</span></p>
        <p>Annelise June Photography, LLC - Dec 2016 - present</p>
        <div className='exp-content'>
          <ul>
            <li>Owner and Photographer of LLC</li>
            <li>Created legally registered Business and handles finances</li>
            <li>Worked 6-10 hour days photographing events, couples, families, newborns, and weddings</li>
            <li>Processed and edited images via Adobe LR and PS</li>
          </ul>
        </div>
      </div>
    )
  }

  expThree = () => {
    return(
      <div className='experience exp3'>
        <p><span>Assistant (to the) General Manager</span></p>
        <p>Seven Brothers, LLC - Dec 2017 - Nov 2018</p>
        <div className='exp-content'>
          <ul>
            <li>Managed Scheduling and People Operations for 50 employees </li>
            <li>Organized and trained on better practice policies set as a standard for employees </li>
            <li>Encouraged and maintained a clean and family oriented environment for employees and customers </li>
            <li>Lead one on one training exercises with employees</li>
            <li>Resolved issues regarding inventory, technology, and employees</li>
          </ul>
        </div>
      </div>
    )
  }

  expFour = () => {
    return(
      <div className='experience exp3'>
        <p><span>Retailer Services Representative & Team Trainer</span></p>
        <p>LuLaRoe, LLC - Dec 2016 - Sep 2017</p>
        <div className='exp-content'>
          <ul>
            <li>Responded to customer emails and phone calls regarding tech related errors or questions for the company's website</li>
            <li>Implemented policies for solving specific tech related issues </li>
            <li>Worked closely with the IT and Programming team to identify and solve errors and</li>
          </ul>
        </div>
      </div>
    )
  }

  expFive = () => {
    return(
      <div className='experience exp3'>
        <p><span>Dispatcher & Community Service Specialist</span></p>
        <p>City of Orem - Jun 2016 - Dec 2016</p>
        <div className='exp-content'>
          <ul>
            <li>Answered 911 phone calls and dispatched police, fire, and medical for emergency situations </li>
            <li>Maintained knowledge of city code, protocols, and standard practices for specific situations </li>
            <li>Executed processes that applied to the situation at hand</li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className='resume-page'>
        <div className='topside'>
          <div className='title-and-counter'>
            <h3>experience</h3>

            <div className="counter">
              <p>Ø{this.state.counter} / Ø{this.state.experiences.length}</p>
            </div>
          </div>

          <div className='slideshow-container'>
            <div className='exp-arrow-left' onClick={this.subCounter}>
              <img src="/assets/arrow-left.png"/>
            </div>

            <div className='slideshow'>
              <div className='experience-slideshow'>
                {this.state.experiences[this.state.counter-1].exp}
              </div>
            </div>

            <div className='exp-arrow-right' onClick={this.addCounter}>
              <img src="/assets/arrow-right.png"/>
            </div>
          </div>
        </div>

        <div className='bottomside'>
          <div className='left-side'>
            <h3>skills</h3>
            
            <div className='skills'>
                {this.skills()}
            </div>
            
            <div className='border-line'></div>
          </div>

          <div className='right-side'>
            <h3>education</h3>

            <div className='education'>
              <p><span>Certificate, Full Stack Engineer</span>
              <br/>Bottega Tech School Nov 2018 - Feb 2019</p>
              <p><span>Associate of Arts and Sciences
              <br/>AAS, Psychology</span>
              <br/>Brigham Young University, Hawaii 2012- 2014</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
