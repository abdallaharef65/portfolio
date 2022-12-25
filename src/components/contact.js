import React from "react";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

const Contact = () => {
  // modal redux

  //jsx
  return (
    <React.Fragment>
      <div className="Contact" id="Contact">
        <div className="container">
          <div className="header">
            <h1>
              <span>CONTACT</span> ME
            </h1>
            <h5>Get in touch with me</h5>
          </div>

          <div className="info-Contact">
            <div className="Phone-Email">
              <div className="Phone">
                <div>Phone</div>
                <div>+962775645242</div>
              </div>
              <div className="Email">
                <div>Email</div>
                <div>abdallaharef65@gmail.com</div>
              </div>
            </div>

            <div className="my-Contact">
              <div>
                <h1>
                  <a href="https://www.linkedin.com/in/aref-abdallah-4a4b11210/">
                    <BsLinkedin className="ContactIcon" />
                  </a>
                </h1>
              </div>
              <div>
                <h1>
                  <a href="https://www.facebook.com/abdallaharef65">
                    <BsFacebook className="ContactIcon" />
                  </a>
                </h1>
              </div>
              <div>
                <h1>
                  <a href="https://www.instagram.com/arefabdallah/">
                    <BsInstagram className="ContactIcon" />
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="copyright">
            Designed by <span>Aref Abdallah</span> &copy; 2022
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
