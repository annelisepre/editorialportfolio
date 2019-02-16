import React from "react";

export default class SocialIcons extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="social-media-icons">
        <div className="social-icons">
          <div className="icon">
          <a href="https://www.linkedin.com/in/annelise-preciado" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.linkedin.com/in/annelise-preciado" target="_blank"><i className="fab fa-linkedin-in icon2"></i></a>
          </div>

          <div className="icon">
          <a href="https://github.com/annelisepre" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://github.com/annelisepre" target="_blank"><i className="fab fa-github icon2"></i></a>
          </div>

          <div className="icon">
          <a href="https://www.instagram.com/annelise.june/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.instagram.com/annelise.june/" target="_blank"><i className="fab fa-instagram icon2"></i></a>
          </div>

          <div className="icon">
          <a href="https://www.hackerrank.com/ajunepre?hr_r=1" target="_blank"><i class="fab fa-hackerrank"></i></a>
          <a href="https://www.hackerrank.com/ajunepre?hr_r=1" target="_blank"><i class="fab fa-hackerrank icon2"></i></a>
          </div>
        </div>
      </div>
    )
  }
}