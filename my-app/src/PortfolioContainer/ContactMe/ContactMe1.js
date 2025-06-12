import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import imageBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactMe.css";

function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={"Contact Me"}>
      <ScreenHeading title={"ContactMe"} subHeading={"Let's Keep in touch?"} />
      <div className="central-form">
        <div className="back-form">
          <p>{banner}</p>
          <div className="image-back">
            <h4 className="title">Get in touch</h4>
            <img src={imageBack} alt="failed to load" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleName} />

            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={handleEmail} />

            <label htmlFor="message">Message</label>
            <textarea type="message" value={message} onChange={handleMessage} />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
