import React from "react";

const AboutMe = () => {
  //jsx
  return (
    <React.Fragment>
      <div className="About-Me" id="About-Me">
        <div className="container">
          <div className="header">
            <h1>
              <span>ABOUT</span> ME
            </h1>
            <h5>Main information about me</h5>
          </div>

          <div className="info-about">
            <h3>I'm Aref Abdallah Web developer.</h3>
            <p>
              passionate about my work. I have acquired the skills and knowledge
              necessary to make your project a success. I enjoy every step of
              the design process, from discussion and collaboration to concept
              and execution.
            </p>
            <div className="personal-info">
              <div>
                <div>Birthday</div>
                <div>03/29/1998</div>
              </div>
              <div>
                <div>Age</div>
                <div>24</div>
              </div>
              <div>
                <div>City</div>
                <div>Amman, Jordan</div>
              </div>
              <div>
                <div>Major Field of Study</div>
                <div>Electrical Power Engineering</div>
              </div>
              <div>
                <div>Mail</div>
                <div>abdallaharef65@gmail.com</div>
              </div>
              <div>
                <div>Phone</div>
                <div>+962775645242</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
