import React from "react";


export default function Resume() {
    return (
      <div>
        <h1 className="resume-header">Resume</h1>
  
        <p className="coding-icons">Languages and Technologies:</p>
        <p className="icons">
          <i className="fab fa-html5"> </i>
          <i className="fab fa-css3-alt"> </i>
          <i className="fab fa-js-square"> </i>
          <i className="fab fa-react"> </i>
          <i class="fab fa-github"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-bootstrap"></i>
          <i class="fab fa-accessible-icon"></i>
        </p>
        <p className="download">
          Click{" "}
          {/* <a
            className="link"
            href={PonceResume}
            download="resume"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "} */}
          to download a copy of my resume!
        </p>
      </div>
    );
  }