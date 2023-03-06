import React from "react";
import "./navbar.css";
import logo1 from "../../../public/marakezlogo1.svg";
import logo2 from "../../../public/marakezlogo2.svg";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import NavbarIcon from "./NavbarIcon";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* Right Sticky Bar */}
      <div className="bg-white side-navbar border color">
        <BsTelephoneFill className=" fs-5 color-blue pointer" />
        <span className="my-5 fs-5 color-blue pointer">
          <GrMail className="fs-5" />
        </span>
        <IoLogoWhatsapp className="fs-5 color-blue pointer" />
      </div>
      {/* End Right Sticky Bar */}

      <div
        className="position-sticky top-0 z-index mob-hide"
        id="navbarSection"
      >
        <nav className="navbar-expand-sm text-muted mt-0 pt-0 border bg-white ">
          <div className="container-fluid hide-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-block"
              id="navbarSupportedContent"
            >
              <h1>Omar Tamer</h1>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item border-end">
                  <Link
                    className="nav-link p-1 fs"
                    aria-current="page"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li className="nav-item mx-2 border-end">
                  <Link className="nav-link p-1 fs" href="/aboutUs">
                    About Us
                  </Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="nav-link p-1 fs" href="/contactUs">
                    Contact Us
                  </Link>
                </li>
                <div className="d-flex flex-row me-5">
                  <NavbarIcon icon={<BsFacebook />} />
                  <NavbarIcon icon={<AiOutlineInstagram />} />
                  <NavbarIcon icon={<AiOutlineLinkedin />} />
                  <NavbarIcon icon={<AiFillYoutube />} />
                </div>
              </ul>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark border p-3 bg-white">
            <div className="container-fluid ">
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon custom-toggle"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link color-blue"
                          aria-current="page"
                          href="#"
                        >
                          Retail
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link color-blue" href="#">
                          Residential
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link color-blue" href="#">
                          Offices
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link color-blue">What We Do</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link color-blue">Latest Updates</a>
                      </li>
                    </ul>
                  </div>
                  <div className="me-5 pe-5">
                    <Link href="/">
                      <svg
                        className="mt-2 me-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="101.066"
                        height="12.566"
                        viewBox="0 0 101.066 12.566"
                      >
                        <g
                          id="Group_1324"
                          data-name="Group 1324"
                          transform="translate(4521.11 9914.112)"
                        >
                          <g
                            id="Group_1324-2"
                            data-name="Group 1324"
                            transform="translate(-4521.11 -9914.112)"
                          >
                            <path
                              id="Path_6679"
                              data-name="Path 6679"
                              d="M163.015,832.924v8.434c-.566.032-1.1.017-1.617.009l-.053-.057c-.011-.012-.029-.025-.03-.039a2.673,2.673,0,0,1-.026-.293q0-5.967.006-11.934a.939.939,0,0,1,.059-.2c.426,0,.866-.023,1.3.015.119.011.252.186.328.316.521.876,1.028,1.76,1.54,2.64q.83,1.428,1.662,2.854c.081.138.171.27.31.489,1.264-2.132,2.455-4.221,3.68-6.3h1.431c.115.358.143,11.877.03,12.482h-1.67c0-.941,0-1.871,0-2.8v-5.653l-.107-.033c-.4.585-.727,1.217-1.09,1.826-.379.635-.746,1.277-1.118,1.917-.364.623-.729,1.247-1.136,1.942a16.635,16.635,0,0,1-.884-1.439c-.281-.464-.55-.935-.825-1.4l-.85-1.444-.81-1.382-.131.051Z"
                              transform="translate(-161.29 -828.839)"
                              fill="#21275b"
                            />
                            <path
                              id="Path_6680"
                              data-name="Path 6680"
                              d="M515.576,837.146a25.4,25.4,0,0,0,2.866,4.173c-.314.069-.606,0-.883.04a1.914,1.914,0,0,1-2.032-1.071c-.524-.853-1.066-1.7-1.581-2.555a.571.571,0,0,0-.591-.328c-.292.021-.587,0-.943,0-.038.672-.014,1.307-.018,1.94s0,1.279,0,1.962h-1.621c-.111-.364-.132-11.9-.018-12.455a1.274,1.274,0,0,1,.223-.033c1.281,0,2.563-.024,3.843.023a4.631,4.631,0,0,1,1.481.314,3.616,3.616,0,0,1,2.278,3.089,4.844,4.844,0,0,1-.034,1.91,3.883,3.883,0,0,1-2.433,2.774c-.091.037-.185.065-.277.1-.075.03-.149.065-.257.112Zm-3.127-6.614a40.405,40.405,0,0,0,.036,5.195c.766,0,1.543.056,2.307-.013a2.166,2.166,0,0,0,2.1-1.944,4.532,4.532,0,0,0-.018-1.371,2.03,2.03,0,0,0-1.941-1.851c-.812-.079-1.636-.016-2.482-.016Z"
                              transform="translate(-476.214 -828.819)"
                              fill="#21275b"
                            />
                            <path
                              id="Path_6681"
                              data-name="Path 6681"
                              d="M654.956,841.736h-1.8L652.243,839h-4.587l-.911,2.737H644.94c1.367-4.176,2.721-8.306,4.082-12.463h1.854C652.233,833.4,653.6,837.543,654.956,841.736Zm-4.951-9.588-.114,0-1.654,5.055h3.427C651.1,835.492,650.553,833.82,650.005,832.148Z"
                              transform="translate(-597.231 -829.225)"
                              fill="#21275b"
                            />
                            <path
                              id="Path_6682"
                              data-name="Path 6682"
                              d="M342.025,829.18h1.851l4.094,12.5h-1.8c-.171-.512-.333-.992-.492-1.475-.083-.25-.154-.5-.242-.75-.212-.6-.081-.567-.776-.568h-3.988l-.921,2.766H337.94C339.307,837.479,340.665,833.336,342.025,829.18Zm2.633,7.943c-.19-.588-.37-1.145-.55-1.7-.187-.577-.366-1.157-.566-1.729a13.027,13.027,0,0,0-.617-1.72l-1.683,5.151h3.418Z"
                              transform="translate(-320.515 -829.144)"
                              fill="#21275b"
                            />
                            <path
                              id="Path_6683"
                              data-name="Path 6683"
                              d="M818.08,828.868h1.672v5.119l.115.041c.092-.14.189-.278.276-.422.876-1.448,1.759-2.892,2.618-4.35a.713.713,0,0,1,.737-.424c.523.031,1.05.008,1.558.008a.627.627,0,0,1,.038.07c0,.015.014.036.007.045-1.3,2.037-2.591,4.073-3.92,6.158a54.393,54.393,0,0,0,4.188,6.236c-.6,0-1.171.037-1.729-.018a1.2,1.2,0,0,1-.664-.383,6.527,6.527,0,0,1-.773-1.016c-.7-1.112-1.38-2.237-2.07-3.357a1.184,1.184,0,0,0-.362-.4c-.005.409-.013.819-.015,1.229,0,.444,0,.888,0,1.332v2.588h-1.675V828.868Z"
                              transform="translate(-753.292 -828.829)"
                              fill="#21275b"
                            />
                            <path
                              id="Path_6684"
                              data-name="Path 6684"
                              d="M966.351,839.7h5.195v1.623H964.72c-.1-.376-.13-11.758-.038-12.409.349-.1,6.13-.127,6.862-.032V830.5c-1.714.012-3.428,0-5.168.009v3.746c1.245.083,2.486,0,3.758.05v1.507c-1.228.049-2.469-.008-3.775.034-.023,1.279-.011,2.532-.008,3.859Z"
                              transform="translate(-885.383 -828.823)"
                              fill="#21275b"
                            />
                            <path
                              id="Path_6685"
                              data-name="Path 6685"
                              d="M1114.462,829.27c-1.719,3.595-3.408,7.127-5.139,10.749h4.813v1.662c-.389.1-6.922.116-7.485.007l5.119-10.734h-4.83V829.27h7.524Z"
                              transform="translate(-1013.397 -829.225)"
                              fill="#21275b"
                            />
                          </g>
                        </g>
                      </svg>

                      <svg
                        id="Group_3048"
                        data-name="Group 3048"
                        xmlns="http://www.w3.org/2000/svg"
                        width="62.088"
                        height="54.548"
                        viewBox="0 0 62.088 54.548"
                      >
                        <path
                          id="Path_6673"
                          data-name="Path 6673"
                          d="M490.669,73.63v.551c0,2.523-.029,5.048.016,7.57a8.336,8.336,0,0,1-1.8,5.328,25.146,25.146,0,0,1-2.939,3.14Q481.968,93.93,478,97.648c-.01.01-.02.022-.031.03a1.157,1.157,0,0,0-.458,1.048c.02,3.916-.015,7.832.027,11.747a8.15,8.15,0,0,1-1.785,5.2,21.187,21.187,0,0,1-2.662,2.805c-1.281,1.156-2.578,2.294-3.862,3.448-.366.329-.709.685-1.065,1.027-.069.066-.145.126-.266.232-.013-.14-.026-.219-.026-.3q-.005-6.309-.011-12.618a7.515,7.515,0,0,1,1.089-3.843,13.451,13.451,0,0,1,2.271-2.905c1.34-1.3,2.72-2.568,4.081-3.852.612-.577,1.211-1.168,1.828-1.739a.893.893,0,0,0,.3-.724c-.016-2.248.046-4.5-.038-6.743a9.019,9.019,0,0,1,2.246-6.228,30.277,30.277,0,0,1,2.771-2.821q3.959-3.729,7.906-7.469c.09-.084.185-.162.354-.309Z"
                          transform="translate(-454.726 -73.63)"
                          fill="#21275b"
                        />
                        <path
                          id="Path_6674"
                          data-name="Path 6674"
                          d="M627.756,268.462v.474c.006,7.89-.02,15.782.039,23.672a9.23,9.23,0,0,1-2.189,6.12,32.614,32.614,0,0,1-3.08,3.191q-2.1,1.957-4.193,3.924c-.041.038-.088.071-.2.163-.011-.208-.026-.354-.026-.5q0-3.372,0-6.745c0-5.7.03-11.4-.026-17.1a8.934,8.934,0,0,1,1.947-5.722,23.844,23.844,0,0,1,2.662-2.867c1.208-1.129,2.433-2.241,3.644-3.365.372-.345.726-.709,1.09-1.064.079-.077.166-.147.25-.22l.089.04Z"
                          transform="translate(-591.866 -251.465)"
                          fill="#21275b"
                        />
                        <path
                          id="Path_6675"
                          data-name="Path 6675"
                          d="M326.619,404.4c.012.156.027.266.028.375.019,4.088.015,8.178.065,12.265a8.458,8.458,0,0,1-1.67,5.155,23.214,23.214,0,0,1-3.1,3.4c-1.176,1.1-2.368,2.179-3.549,3.273-.351.325-.682.67-1.025,1-.078.076-.166.143-.327.279v-.551c-.017-4,0-8-.069-12a8.709,8.709,0,0,1,1.932-5.634,24.56,24.56,0,0,1,2.684-2.9q2.423-2.28,4.858-4.547A1.715,1.715,0,0,1,326.619,404.4Z"
                          transform="translate(-316.973 -375.609)"
                          fill="#21275b"
                        />
                        <path
                          id="Path_6676"
                          data-name="Path 6676"
                          d="M778.618,403.76v.635c0,4-.026,8.007.02,12.009a8.591,8.591,0,0,1-1.74,5.309A23.241,23.241,0,0,1,774,424.9c-1.129,1.065-2.285,2.1-3.423,3.156-.52.482-1.022.984-1.575,1.518a2.871,2.871,0,0,1-.039-.315q-.005-6.419-.009-12.836a7.183,7.183,0,0,1,.759-3.186,12.013,12.013,0,0,1,2.366-3.262c1.314-1.309,2.684-2.564,4.029-3.842q1.072-1.018,2.144-2.039c.091-.086.185-.17.361-.33Z"
                          transform="translate(-729.618 -375.025)"
                          fill="#21275b"
                        />
                        <path
                          id="Path_6677"
                          data-name="Path 6677"
                          d="M928.851,267.9v.543c0,2.03-.022,4.06.008,6.089a7.02,7.02,0,0,1-.893,3.451,14.1,14.1,0,0,1-2.538,3.3c-.838.842-1.715,1.646-2.579,2.462q-1.676,1.581-3.361,3.154c-.068.064-.146.118-.286.23v-.539c0-1.856.045-3.712-.008-5.566a8.45,8.45,0,0,1,1.851-5.443,25.4,25.4,0,0,1,3.015-3.247q2.3-2.158,4.6-4.309a1.845,1.845,0,0,1,.189-.121Z"
                          transform="translate(-866.772 -250.99)"
                          fill="#21275b"
                        />
                        <path
                          id="Path_6678"
                          data-name="Path 6678"
                          d="M317.406,284.374c0-1.442-.043-2.8.013-4.161a6.847,6.847,0,0,1,1.073-3.183,15.622,15.622,0,0,1,2.71-3.328c1.319-1.264,2.673-2.489,4.007-3.737.581-.544,1.149-1.1,1.733-1.664.03.042.073.073.074.105.005,1.246.037,2.494,0,3.739a7.3,7.3,0,0,1-1.183,3.594,15.357,15.357,0,0,1-2.527,3.089c-1.382,1.322-2.8,2.61-4.194,3.919-.487.456-.954.932-1.432,1.4-.07.068-.149.126-.275.232Z"
                          transform="translate(-317.354 -251.356)"
                          fill="#21275b"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex">
                    <button className="start-call fw-bold">
                      Start Instant Call
                    </button>
                    <button className="choose-unit fw-bold">
                      Choose Your Unit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </nav>
      </div>
      {/* Mobile Navbar View */}

      <nav className="navbar navbar-expand-lg bg-white position-sticky top-0 z-index d-none show">
        <div className="container-fluid">
          <div className="d-flex w-75  justify-content-end">
            <a className="navbar-brand  " href="#">
              <Image src={logo1} alt="logo" className="w-100 margin" />
            </a>
            <a className="navbar-brand " href="#">
              <Image src={logo2} alt="logo" className="w-100" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="d-flex justify-content-between gap-4">
                <button className="btn-edit fw-bold w-75">
                  Start Instant Call
                </button>
                <button className="btn-edit fw-bold w-75">
                  Choose Your Unit
                </button>
              </div>
              <li className="nav-item border-bottom">
                <a
                  className="nav-link color-blue "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="#">
                  Retail
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="#">
                  Residential
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="#">
                  Offices
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="#">
                  What We Do
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="#">
                  Latest Updates
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="aboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item border-bottom">
                <a className="nav-link color-blue " href="contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Mobile View */}
    </>
  );
};

export default Navbar;
