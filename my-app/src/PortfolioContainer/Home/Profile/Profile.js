
import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/julius-ngetich-47b8b4182/">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.linkedin.com/in/julius-ngetich-47b8b4182/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/julius-ngetich-47b8b4182/">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://www.linkedin.com/in/julius-ngetich-47b8b4182/">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Julius</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Network Configuration 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "IT Support 📱",
                    1000,
                    "Database Administrator 🔴",
                    1000,
                    "React/Nodejs 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              IT Expert Building Applications both Front end and back end.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
