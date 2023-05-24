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
              Hello, My name is Abimael Ponce
              a passionate and skill software Developer with a creative mindset
              and a strong foundation in programming languages. I specialize in crafting
              interactive and user-friendly websites.
              <br></br>
              <br></br>Throughout my journey as a Software Developer, I have acquired 
              expertise in a wide range of technologies, including HTML5, CSS, Javascript
              and various frameworks such as React, Express and Bootstrap. I constantly stay 
              updated with the latest industry trends and best practices to ensure that the 
              websites I create are modern, responsive, and optimized for performance.
              <br></br>
              <br></br>Thank you for visiting my portfolio. 
              I invite you to explore my work and see firsthand how my 
              expertise and dedication can elevate your online presence.
              Let's collaborate and bring your vision to life!
            </p>
          </div>
          <div class="col"></div>
        </div>
      </div>
    );
  }