import React from "react";
import "./footer.css";
import EndFooter from "./EndFooter";

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-5 padding-mob">
        <div className="row">
          <div className="col-md-2 col-6">
            <div className="footer-text d-flex flex-column">
              <span className="text-muted footer-fs">NAVIGATE</span>
              <span className="color-blue footer-fs">Home</span>
              <span className="color-blue footer-fs">Our Communities</span>
              <span className="color-blue footer-fs">Latest Launches</span>
              <span className="color-blue footer-fs">Latest Updates</span>
            </div>
          </div>
          <div className="col-md-2 col-6 ">
            <div className="footer-text d-flex flex-column ">
              <span className="text-muted footer-fs">ABOUT</span>
              <span className="color-blue footer-fs">WHAT WE DO </span>
            </div>
          </div>
          <div className="col-md-2 mt-mob">
            <div className="footer-text d-flex flex-column">
              <span className="text-muted footer-fs">Support</span>
              <span className="color-blue footer-fs">Contact US </span>
              <span className="color-blue footer-fs">Careers </span>
            </div>
          </div>
          <div className="col-md-4 offset-md-2">
            <div className="item-search ">
              <h6 className="color-blue-blue footer-fs"> NEWSLETTER </h6>
              <p className="footer-fs text-muted">
                Join our mailing list to receive monthly news and updates about
                our developments
              </p>
            </div>
            <div className="d-flex ">
              <input
                type="text"
                className="input w-75 px-2 py-2  mob-input"
                placeholder="Your Email"
              />
              <button className="footer-btn text-center fs-6 fw-bolder">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      <EndFooter />
    </>
  );
};

export default Footer;
