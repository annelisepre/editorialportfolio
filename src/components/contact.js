import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-page'>
        <div className="top-side">
          <h3>BUILD WHAT YOU BELIEVE</h3>
          <p>Lumos portus kedavra expelliarumus peskipiksi aresto totalus evanesco alohomora nox. Patronum legilimens serpensortia lumos.</p>
          <p>ennervate tarantallegra rictusempra. Disapparate mobilicorpus crucio incantartem.</p>
        </div>

        <div className="bottom-side">
          <div className="contact-form-box">
            <div className="form-box">
              <div className='name'>
                <div className='label'>
                  <p>NAME:</p>
                </div>
              </div>

              <div className='email'>
                <div className='label'>
                  <p>EMAIL:</p>
                </div>
              </div>

              <div className='location'>
                <div className='label'>
                  <p>LOCATION:</p>
                </div>
              </div>

              <div className='message'>
                <div className='label'>
                  <p>MESSAGE:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}