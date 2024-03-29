import React from "react";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg ">
      <div className="container-fluid">
        <a href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }>
          A. Ponce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">+</span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="toggle-btn" id="btn">
                
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
          </svg>
          </div>
          
        </div>

        
        
        </div>
        </nav>

    )
}

export default Navbar;
