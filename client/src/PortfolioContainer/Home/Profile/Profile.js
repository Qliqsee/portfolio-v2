import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Qliqsee">
                <i className="fa fa-github" />
              </a>
              <a href="https://wa.me/2348180169270?text=Hello%20Iyanu">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://www.linkedin.com/in/iyanu-agboola-314488214/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://twitter.com/agboola_iyanu">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div> */}
          <div className="profile-details-name">
            <div className="profile-name">
              <span>Agboola Iyanu</span>
            </div>
            <span className="profile-role">Fullstack Engineer</span>
          </div>
          <div className="profile-details-role">
            <span className="profile-role-tagline">
              A Fullstack engineer passionate about 🏗️ scalability, 🔄 automation, and 😍 user experience. I have 6+ years of solid
              experience working with React JS.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Contact Me
            </button>
            <a href="Agboola Iyanu.pdf" download="Agboola Iyanu.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        {/* <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div> */}
      </div>
    </div>
  );
}
