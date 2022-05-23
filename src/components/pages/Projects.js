import React from "react";
import HappyArbol from "../../happy-arbol.gif";
import WorldDinner from "../../world-dinner.gif";
// import "../styles/Projects.css";

export default function Projects() {
    return (
      <div className="container projects-container">
        <h1 className="projects-header">Portfolio</h1>
  
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <div className="card project-card">
                <img
                  src={HappyArbol}
                  class="card-img-top"
                  alt="Happy tree Demo"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Dinner around The Wordl</h5>
                  <p className="card-text">
                  This application is designed to query through planted plant data 
                parameters to make an informed decision on what to plant at a new 
                site as well as upload newly planted plant data
                  </p>
                  <a
                    href="https://gentle-lake-59989.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="btn "
                  >
                    Deployed Site
                  </a>
                </div>
              </div>
            </div>

            <div class="col">
            <div className="card project-card ">
              <img
                src={WorldDinner}
                class="card-img-top"
                alt="Happy trees Demo"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Dinner Around The World</h5>
                <p className="card-text">
                A recipe search engine for food and cocktails. Search by
                  country and cocktail type.
                </p>
                <a
                  href="https://likearollinson.github.io/recipe-finder/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn "
                >
                  Deployed Site
                </a>
              </div>
            </div>
          </div>

            </div>
            </div>
            </div>
            );
            }

        