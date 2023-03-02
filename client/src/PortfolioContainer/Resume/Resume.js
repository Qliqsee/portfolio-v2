import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">{props.fromDate + "-" + props.toDate}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
          {props?.links || ""}
        </div>
      </div>
    );
  };

  const Links = (props) => {
    return (
      <div className="row-stack">
        {props.links.map(({ url, icon }, index) => (
          <div onClick={() => window.open(url, "_blank")} key={index} className="link-icons">
            <i className={"fa fa-" + icon} />
          </div>
        ))}
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    // { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Typescript", ratingPercentage: 95 },
    { skill: "React", ratingPercentage: 95 },
    { skill: "Angular", ratingPercentage: 70 },
    { skill: "Vue", ratingPercentage: 70 },
    { skill: "Jest", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 90 },
    { skill: "Mongo DB", ratingPercentage: 90 },
    { skill: "Docker", ratingPercentage: 80 },
    // { skill: "Kubernetes", ratingPercentage: 60 },
    { skill: "Prisma", ratingPercentage: 80 },
    { skill: "Story book", ratingPercentage: 80 },
    { skill: "Digital Ocean", ratingPercentage: 80 },
    { skill: "Mysql", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Interstellar Prime",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A fullstack fantasy space exploration web application.",
      subHeading: "Technologies Used: Express, Mongo DB, React, Docker, AWS EC2, Supertest, Jest ",
      links: (
        <Links
          links={[
            { url: "https://github.com/Qliqsee/market", icon: "github" },
            { url: "https://market-sqaure.netlify.app/", icon: "eye" },
          ]}
        />
      ),
    },
    // {
    //   title: "Job Portal ",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description: "An ecommerce application designed to sell products online wth payment system integration",
    //   subHeading: "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    // },
    {
      title: "Market",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Firebase Powered ecommerce web application for showcasing and selling products onlne with Stripe for payment.",
      subHeading: "Technologies Used: React Js, Firebase, PWA for offline support, Jest.",
      links: (
        <Links
          links={[
            { url: "https://github.com/Qliqsee/Interstellar-Prime", icon: "github" },
            { url: "http://54.173.10.64:8000/", icon: "eye" },
          ]}
        />
      ),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Federal University Of Technology, Minna"}
        subHeading={"BACHELOR OF ELECTRIC AND COMPUTER ENGINEERING TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"National Youth Service Corps"}
        subHeading={"VDT Communications. Osogbo, Osun State"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading heading={"High School"} subHeading={"Goshen Christian Academy"} fromDate={"2008"} toDate={"2014"} />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Swiftcore Technologies"}
          subHeading={"Full Stack Web Developer"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">Here are are some of my projects with swiftcore technologies</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Pontifical Mission Societies(PMS): Responsible for building a CRM portal to manage the day-to-day operations and
            facilitation of fundraising efforts. <a href="https://pmsclient.azurewebsites.net/">See here</a>
          </span>
          <br />
          <span className="resume-description-text">
            - VibeWith(MVP): Responsible for building a progressive web application to help people connect in circles and spaces.{" "}
            <a href="https://app.vibewith.co/">See here</a>
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          links={projectsDetails.links}
          // fromDate={projectsDetails.duration.fromDate}
          // toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    // <div className="resume-screen-container" key="interests">
    //   <ResumeHeading
    //     heading="Teaching"
    //     description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
    //   />
    //   <ResumeHeading
    //     heading="Music"
    //     description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
    //   />
    //   <ResumeHeading
    //     heading="Competitive Gaming"
    //     description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
    //   />
    // </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`).default} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div style={carousalOffsetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
