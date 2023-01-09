import React from "react";
import abiFoto from "../../abi-foto.jpeg";
import "../styles/About.css";


export default function About() {
    return (
      <div>
        {/* <h1 className="about-header">
          { <div className="logo-back">
            <img src={abiFoto} alt="logo" className="logo" ></img>
          </div>}
        </h1> */}
        <div className="container">
          <div className="col about-me-column">
            <img
              src={abiFoto}
              alt="..."
              className="img-thumbnail rounded-circle" 
            ></img>
  
            <p className=" col about-me-content">
              {" "}
              Hello and thanks for checking out my portfolio! My name is Abimael
              Ponce and I am currently a student in the UNC Full Stack Developer
              Bootcamp. I am currently working for Honda. I recently
              decided it's time to move on to a new career where I can
              put my problem-solving skills to the test.
              <br></br>
              <br></br>I am originally from Mexico, and miss it 
              everyday. I have lived in North Carolina for the past 20 years, and
              truly love it..
              <br></br>
              <br></br>I am an avid home cook,
              and music lover. I am a proud resident of Burlington, NC and
              am excited to enter the world of web development full-time once my
              coursework has concluded.
            </p>
          </div>
          <div class="col"></div>
        </div>
      </div>
    );
  }