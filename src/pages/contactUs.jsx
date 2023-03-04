import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import contact from "../../public/contact.jpeg";
import person from "../../public/person.svg";
import "./contactUs.css";

import React from "react";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className=" about-us p-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-us-img">
                <Image alt="contactUs" src={contact} className="w-100 h-100" />
              </div>
            </div>
            <div className="col-md-6">
              <form>
                <div className="row g-1">
                  <div className="col-6 position-relative">
                    <label className="text-muted ">First Name </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      aria-label="First name"
                      required
                    />
                    <div className="position-absolute top-50 border-end px-2  z-0 ">
                      <Image src={person} alt="logo" className=" mb-1" />
                      {/* <div className="line-form"></div> */}
                    </div>
                  </div>
                  <div className="col-6 position-relative">
                    <label className="text-muted ">Last Name </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      aria-label="Last name"
                    />
                    <div className="position-absolute top-50 border-end px-2">
                      <Image src={person} alt="logo" className=" " />
                      {/* <div className="line-form"></div> */}
                    </div>
                  </div>
                  <div className="col-md-12 position-relative my-3">
                    <label className="text-muted ">Your Email </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      aria-label="First name"
                    />
                    <div className="position-absolute top-50 border-end px-2">
                      <Image src={person} alt="logo" className=" " />
                      {/* <div className="line-form"></div> */}
                    </div>
                  </div>
                  <div className="col-md-12 position-relative">
                    <label className="text-muted ">Your Mobile Number </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      aria-label="First name"
                    />
                    <div className="position-absolute top-50 border-end px-2">
                      <Image src={person} alt="logo" className="" />
                      {/* <div className="line-form"></div> */}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-area">
                      <label className="text-muted my-2">
                        Your Message | optional )
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="40"
                        rows="10"
                        className="w-100 border-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-end mt-3">
                    <button className="w-50 rounded-5  border-0 text-white fw-bold py-2 bg-blue-2">
                      Send Messages
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <div className="row ">
                <div className="col-4 border-start">
                  <div className=" pe-2 lh-1">
                    <h6 className="color m-0">District 5</h6>
                    <p className="text-muted m-0 fs-6">New Katameya,</p>
                    <a href="#" className="color m-0 fs-6">
                      VIEW ON MAPS
                    </a>
                  </div>
                </div>
                <div className="col-4 border-start">
                  <div className=" pe-2 lh-1">
                    <h6 className="color m-0">Mall Of Arabia</h6>
                    <p className="text-muted m-0 fs-6">
                      Al Giza Desert, Giza Governorate,
                    </p>
                    <a href="#" className="color m-0 fs-6">
                      VIEW ON MAPS
                    </a>
                  </div>
                </div>
                <div className="col-4 border-start">
                  <div className=" pe-2 lh-1">
                    <h6 className="color m-0"> Zamalek</h6>
                    <p className="text-muted m-0 fs-6">
                      6 Alsheikh Al masrafy,
                    </p>
                    <a href="#" className="color m-0 fs-6">
                      VIEW ON MAPS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 mt-5 border">
        <div className="container px-5">
          <div className="row px-5 ">
            <div className="col-md-3">
              <div className="text-center m-0 p-0 ">
                <p className="text-muted m-0 p-0 size">SALES</p>
                <p className="color m-0 p-0 size">INFO@MARAKEZ.COM</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center m-0 p-0 ">
                <p className="text-muted m-0 p-0 size">SALES</p>
                <p className="color m-0 p-0 size">INFO@MARAKEZ.COM</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center m-0 p-0 ">
                <p className="text-muted m-0 p-0 size">SALES</p>
                <p className="color m-0 p-0 size">INFO@MARAKEZ.COM</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center m-0 p-0 ">
                <p className="text-muted m-0 p-0 size">SALES</p>
                <p className="color m-0 p-0 size">INFO@MARAKEZ.COM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center ">
          <span className="text-muted m-0 p-0"> CUSTOMER SERVICE </span>
          <p className="color m-0 p-0"> 19876 </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
