import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I'm a full-stack engineer with five years of professional experience working on freelance and startup projects. I'm passionate about building scalable high quality software, and automation. Having worked across the entire development cycle, I specialize on the frontend.",
    highlights: {
      bullets: [
        "Full Stack web development",
        "PWA",
        "CI/CD",
        "Agile Development",
        "Testing",
        "Interactive Front End as per the design",
        "Building REST APIs",
        "Database Management",
        "Micro Frontend",
        "Micro Services",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card1">
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {" "}
                Contact Me{" "}
              </button>
              <a href="Agboola Iyanu.pdf" download=" Agboola Iyanu.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-details">
            <div className="about-me-highlights">
              <div className="highlight-heading"></div>
            </div>
            <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                Contact Me
              </button>
              <a href="Agboola Iyanu.pdf" download="Agboola Iyanu.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="about-me-details">
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
