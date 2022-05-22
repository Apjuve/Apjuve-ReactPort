import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand flex-shrink" href="/">
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
        </div>
        </nav>

    )
}

export default Navbar;
