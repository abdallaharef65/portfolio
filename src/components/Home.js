import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsFillArrowUpCircleFill, BsFillFilePersonFill } from "react-icons/bs";
import { FaHome, FaBars, FaCogs, FaArchive, FaEnvelope } from "react-icons/fa";

import photo from "../assets/personal-photo.jpg";

const Home = () => {
  //jsx
  return (
    <React.Fragment>
      <div className="home" id="Home">
        <div className="container">
          <a className="totop" href="#Home">
            <BsFillArrowUpCircleFill className="iconTop" />
          </a>
          <div className="nav">
            <li className="bars">
              <a href="">
                <FaBars className="navIcon" />
              </a>
            </li>
            <ul>
              <li>
                <a href="#Home">
                  <FaHome className="navIcon" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#About-Me">
                  <BsFillFilePersonFill className="navIcon" />
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a href="#Skills">
                  <FaCogs className="navIcon" /> <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <FaArchive className="navIcon" /> <span>Projects</span>
                </a>
              </li>
              <li>
                <a className="border" href="#Contact">
                  <FaEnvelope className="navIcon" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="homeContent">
            <div className="personal-photo">
              <img src={photo} alt="Logo" />
            </div>
            <div className="Content">
              <h4>HI THERE !</h4>
              <h1>I'M</h1>
              <h2>Front-End developer</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
// <Button
// id="changecolor"
// onClick={() => {
//   changeColor();
// }}
// ></Button>
