import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Experienced IT Specialist with over 4 years of expertise in managing and maintaining information technology systems, networks, and hardware. Adept at troubleshooting technical issues, ensuring system security, and supporting end-users in a fast-paced business environment. Proficient in network administration, system installation, IT support, and data management with a strong ability to provide innovative solutions to enhance system performance and security.",
    highlights: {
      bullets: [
        "-Automation SaltStack, Ansible, Chef, Puppet",
        "-Cloud GCP, Microsoft Azure",
        "-Python, Java, JavaScript, HTML, CSS",
        "-Pytest, Docker, CircleCI, Jenkins",
        "-Building REST API",
        "-MongoDb Databases.",
        "-Network Configaration",
        "-PostgreSQL",
        "-Software Engineering!"
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
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            
           <div className="about-me-options">
              
            </div> 
            
          </div>
        </div>
      </div>
    </div>
  );
}