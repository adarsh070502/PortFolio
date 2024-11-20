import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Contact() {
  const emailjs_api_key = process.env.REACT_APP_EMAILJS_API_KEY;
  const emailjs_service_id = process.env.REACT_APP_SERVICE_ID;
  const emailjs_template_id = process.env.REACT_APP_TEMPLATE_ID;

  useEffect(() => emailjs.init(emailjs_api_key), [emailjs_api_key]);

  const [loading, setLoading] = useState(false);

  const [formdata, SetFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [emailSentFeedback, SetemailSentFeedback] = useState({
    sent: false,
    failed: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    SetemailSentFeedback((prevValue) => {
      return {
        sent: false,
        failed: false,
      };
    });

    SetFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      document.getElementById("submit-button").classList.add("disabled");

      await emailjs.send(emailjs_service_id, emailjs_template_id, {
        subject: formdata.subject,
        firstname: formdata.firstname,
        lastname: formdata.lastname,
        email: formdata.email,
        message: formdata.message,
      });

      SetFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
      SetemailSentFeedback((prevValue) => {
        return {
          ...prevValue,
          sent: true,
        };
      });
    } catch (error) {
      console.log(error);
      SetemailSentFeedback((prevValue) => {
        return {
          ...prevValue,
          failed: true,
        };
      });
    } finally {
      setLoading(false);
      document.getElementById("submit-button").classList.remove("disabled");
    }
  }

  return (
    <div className="contact-me-div">
      <h2 className="page-heading page-headers">Contact Me</h2>
      <div className="contact-me-container">
        <div className="contact-me-information">
          <h3>
            Let`s create something amazing together—get in touch!
            <br /> <br />
            Based in{" "}
            <span
              style={{
                color: "#1e90ff",
              }}
            >
              Hyderabad
            </span>
          </h3>
          <h3 className="contact-me-headers">Email Me</h3>
          <a
            href="mailto: adarsheluri143@gmai.com"
            style={{ fontSize: "16px" }}
            class="contact-me-gmail-anchor"
          >
            adarsheluri143@gmail.com
          </a>
          <h3 className="contact-me-headers">Connect With Me</h3>
          <div className="social-media-container">
            <div className="social-media-item">
              <a href="mailto: adarsheluri143@gmai.com">
                <EmailOutlinedIcon sx={{ fontSize: 30, color: "black" }} />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.instagram.com/adarsheluri/">
                <InstagramIcon sx={{ fontSize: 30, color: "black" }} />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.linkedin.com/in/eluri-adarsh-bb089522a/">
                <LinkedInIcon sx={{ fontSize: 30, color: "black" }} />
              </a>
            </div>
            <div className="social-media-item">
              <a href="https://www.facebook.com/adarsh.eluri.7">
                <FacebookIcon sx={{ fontSize: 30, color: "black" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="contact-me-form">
          <h3
            className="contact-me-headers"
            style={{ textAlign: "center", paddingBottom: "10px" }}
          >
            Send Me Message
          </h3>
          <form className="user-form-container">
            <div>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="form-input"
                placeholder="First Name"
                value={formdata.firstname}
                onChange={handleChange}
                required
              />
              <br />

              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-input"
                placeholder="Last Name"
                value={formdata.lastname}
                onChange={handleChange}
                required
              />

              <br />

              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Email"
                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                required
                value={formdata.email}
                onChange={handleChange}
              />

              <br />

              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formdata.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                className="form-input text-area"
                placeholder="Message"
                value={formdata.message}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <button
            id="submit-button"
            onClick={handleSubmit}
            disabled={false}
            className="submit-button"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          <p
            className="email-sent-feedback-message-pass"
            style={{
              color: "green",
              display: emailSentFeedback.sent ? "block" : "none",
            }}
          >
            Email sent successfully
          </p>
          <p
            className="email-sent-feedback-message-fail"
            style={{
              color: "red",
              display: emailSentFeedback.failed ? "block" : "none",
            }}
          >
            Error while sending email
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
