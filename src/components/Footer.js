import React from "react";
import "./styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <a
        className="contact-links"
        href="https://github.com/Apjuve"
        target="_blank"
        rel="noreferrer"
      >
           <i class="fab fa-github"></i>
      </a>

      

      <a
        className="contact-links"
        href="https://www.linkedin.com/in/abi-ponce-308a2a229/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-linkedin"></i>
      </a>

      </footer>
  );
};

export default Footer;