import React from "react";

import EDU from "../assets/aa64ea78-653d-4a10-a229-790e3def669d.png";
import Restaurantly from "../assets/cabcd0c7-0bd4-49cd-9861-cc4c01f8aabf.png";

const Projects = () => {
  //jsx
  return (
    <React.Fragment>
      <div className="Projects" id="Projects">
        <div className="container">
          <div className="header">
            <h1>
              <span>MY</span> Projects
            </h1>
            <h5>Some of my work</h5>
          </div>
          <div className="Someprojects">
            <div className="box">
              <img src={Restaurantly} alt="" />
              <div className="content">
                <h3>Restaurantly</h3>
              </div>
              <div className="info">
                <a href=""> </a>
              </div>
            </div>

            <div className="box">
              <img src={EDU} alt="" />
              <div className="content">
                <h3>EDU</h3>
              </div>
              <div className="info">
                <a href=""> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
