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
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Nextjs", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "PostgreSQL", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "Tailwind", ratingPercentage: 80 },
  ];

  const projectsDetails = [
      {
      title: "Acme Dashboard to manage Invoices In realtime.",
      duration: { fromDate: "2024", toDate: "2025" },
      description:
        "This is a nextjs Dashboard developed as part of learning Nextjs and it can be used to manage invoices in real time",
      subHeading: "Technologies Used: Nextjs, TypeScript, POSTGRESQL and Tailwind",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2024", toDate: "2025" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, HTML and Bootsrap",
    },

    {
      title: "Employee Management System ",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "CRUD application project.",
      subHeading:
        "Technologies Used Nodejs, Express js, HTML, CSS, Mongo db and Containerization Docker",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Meru University of Science and Technology"}
        subHeading={
          "BACHELOR OF APPLIED SCIENCE MATHEMATICS & COMPUTER SCIENCE"
        }
        fromDate={"2016"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"BARTOLIMO HIGH SCHOOL"}
        fromDate={"2011"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"SAVANNAH INFORMATICS"}
          subHeading={"FIELD SUPPORT ANALYST"}
          fromDate={"2024"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Oversee the installation and configuration of solutions, ensuring
            compatibility with client infrastructure
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Client Support & Advocacy
          </span>
          <br />
          <span className="resume-description-text">
            -Product Development and Management
          </span>
          <br />
          <span className="resume-description-text">
            -Performance Metrics and Reporting
          </span>
          <br />
          <span className="resume-description-text">
            -Technical support and troubleshooting of biometrics devices
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"PRESIDENTIAL DIGITALENT INTERN"}
          subHeading={"JUNIOR ICT OFFICER"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Network Administration, User Support, Knowledge Shairing and Training, Hardware Maintenance
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Inventory Management, installation and configuration of Computer Hardware and Software
          </span>
        </div>
        
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
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
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
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
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
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
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
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
