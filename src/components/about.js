import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <div className="top-side">
          <div className="left-side">
            <img src="/assets/portraitannelise.JPG"/>
          </div>

          <div className="right-side">
            <div className="heading">
              <span>SOFTWARE DEVELOPER</span>
              <p>& artist</p>
            </div>

            <div className="paragraph">
              <p>Alohomora lumos quietus imperius patronum momentum. Exume serpensortia concealment stupefy. Aparecium funnunculus locomotor petrificus evanesco fidelius locomotor.</p>
              <p>Tarantallegra expecto patronum incarcerous hover mortis incantatem immobilus petrificus mortis aparecium. Legilimens mortis lacarnum incarcerous totalus lacarnum sonorus engorgio leviosa sonorus leviosa. Serpensortia totalus leviosa quietus. </p>
              <p>Aparecium kedavra evanesco totalus petrificus. Alohomora locomotor levicorpus totalus rictusempra.</p>
            </div>
          </div>
        </div>

        <div className="bottom-side">
          <div className="quote-box">
            <p><span>- annelise</span></p>
          </div>
        </div>
      </div>
    );
  }
}
