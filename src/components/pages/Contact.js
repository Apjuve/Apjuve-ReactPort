import React from "react";
import "../styles/Contact.css";



export default function Contact() {
    return (
      <div className="container">
        <h1 className="contact-header">Contact Me</h1>
        <div className="cointainer links-container">
          <a
            className="contact-me-links"
            href="https://github.com/Apjuve"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: <i class="fab fa-github"></i>
          </a>
          <br></br>
          <a
            className="contact-me-links"
            href="https://www.linkedin.com/in/abi-ponce-308a2a229/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn: <i class="fab fa-linkedin"></i>
          </a>
          <br></br>
          <a
            className="contact-me-links"
            href="https://twitter.com/The0ldLady"
            target="_blank"
            rel="noreferrer"
          >
            Twitter: <i class="fab fa-twitter"></i>
          </a>
        </div>
        <form
          action="https://formsubmit.co/abiponce.ap@gmail.com"
          method="POST"
        >
          <p className="contact-form-header">
            Enter your email and questions and I will get back to you ASAP:
          </p>
          <input
            type="email"
            name="email"
            className="user-email"
            placeholder="Email Address"
            required
          ></input>
          <br></br>
          <input
            type="text"
            name="message"
            className="textarea"
            placeholder="Write your questions here"
            required
          ></input>
          <br></br>
          <button className="button" type="submit" id="questions-submit">
            Submit
          </button>
        </form>
      </div>
    );
  }