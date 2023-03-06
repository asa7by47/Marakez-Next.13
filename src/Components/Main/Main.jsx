"use client";
import React, { useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import { BsFacebook } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import CheckBox from "../CheckBox/CheckBox";
import SearchProperties from "../SearchProperties/SearchProperties";
import SideBarCheckbox from "../SideBarCheckbo/SideBarCheckbox";
import "./Main.css";

const Main = () => {
  const [user, setUser] = useState("");
  const getUser = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => [inputValue, 20000000]);
  };
  const getUserMax = (e) => {
    // getting the input Value from e.target.value
    let inputValue = e.target.value;
    setValue((value) => [2000000, inputValue]);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Our States
  const [value, setValue] = useState([2000000, 20000000]);
  const [min, setMin] = useState(1000000);
  const [max, setMax] = useState(30000000);

  const [destination, setDestination] = useState(false);
  const [unit, setUnit] = useState(false);
  const [projects, setProjects] = useState(false);
  const [range, setRange] = useState(false);

  const handleDestination = () => {
    setDestination(!destination);
    setUnit(false);
    setProjects(false);
    setRange(false);
  };
  const handleUnit = () => {
    setDestination(false);
    setUnit(!unit);
    setProjects(false);
    setRange(false);
  };
  const handleProjects = () => {
    setDestination(false);
    setUnit(false);
    setProjects(!projects);
    setRange(false);
  };
  const handleRange = () => {
    setDestination(false);
    setUnit(false);
    setProjects(false);
    setRange(!range);
  };

  return (
    <section id="video w-100 h-100">
      {/* Left Side Navbar For Mobile Users */}

      <div
        className="offcanvas offcanvas-start position-absolute top-0 start-0 d-none mob-show z-index"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header mt-0 pt-0">
          <button
            type="button"
            className="btn-close ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mt-0 pt-0">
          <div className="container">
            <div className="side-one">
              <h6 className="color-blue fw-bolder">Destination</h6>
              <form>
                <SideBarCheckbox title="East Cairo" />
                <SideBarCheckbox title="Mansoura" />
                <SideBarCheckbox title="Tanta" />
                <SideBarCheckbox title="North Coast" />
                <SideBarCheckbox title="New Cairo" />
                <SideBarCheckbox title="West Cairo" />
              </form>
            </div>
            <div className="side-two mt-3">
              <h6 className="color-blue fw-bolder">Type of Unit</h6>
              <form>
                <SideBarCheckbox title="Offices" />
                <SideBarCheckbox title="Medical" />
                <SideBarCheckbox title="Commercial" />
                <SideBarCheckbox title="Residential" />
                <SideBarCheckbox title="Malls" />
                <SideBarCheckbox title="Retail" />
              </form>
            </div>
            <div className="side-three mt-3">
              <h6 className="color-blue fw-bolder">Projects</h6>
              <form>
                <SideBarCheckbox title="district-5 work" />
                <SideBarCheckbox title="district-5" />
                <SideBarCheckbox title="aeon" />
              </form>
            </div>
            <div className="side-four mt-3">
              <h6 className="color-blue">Type Of Unit</h6>

              <Slider
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
                valueLabelDisplay="auto"
              />
              <div className="d-flex justify-content-between">
                <div className="min d-flex flex-row">
                  <input
                    type="text"
                    className="rounded price border-end-0 w-75"
                    id="min"
                    value={value[0]}
                    onChange={getUser}
                  />
                  <div className="p-1 bord rounded-end ">EGP</div>
                </div>

                <div className="min d-flex flex-row">
                  <input
                    type="number"
                    className="rounded price border-end-0 w-75"
                    id="max"
                    onChange={getUserMax}
                    value={value[1]}
                  />
                  <div className="p-1 bord rounded-end ">EGP</div>
                </div>
              </div>
            </div>
            <div className="w-100 p-4 bg-blue rounded-2 d-flex flex-row align-items-center justify-content-center mt-3">
              <div className="fs-3">
                {" "}
                <FcSearch />{" "}
              </div>
              <div>Search Properties</div>
            </div>
          </div>
        </div>
      </div>

      {/* End Left Side Navbar For Mobile Users */}

      {/* Home Page for Desktop */}
      <div className="bg-black w-100 h-100 position-relative d-flex justify-content-center align-items-center hide-from-phone">
       <div className="embed-responsive embed-responsive-21by9 hello">
       <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/vGF22tNJoRI?playlist=vGF22tNJoRI&loop=1&autoplay=1&mute=1&controls=0"
          title="YouTube video player"
          allowFullScreen="allowfullscreen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="border-unset iframe  embed-responsive-item w-100 h-100"
        ></iframe>

       </div>
        <div className="search bg-white rounded-5 w-75  py-3 d-none-mob">
          <div className="container-fluid p-3">
            <div className="row">
              <div className="col-md-9 hide-2">
                <div className="row">
                  <div className="col-md-3">
                    <SearchProperties
                      title="Destination"
                      subtitle="Any"
                      target="#collapseOne"
                      controls="collapseOne"
                      click={handleDestination}
                    />
                  </div>
                  <div className="col-md-3">
                    <SearchProperties
                      title="Type Of Units"
                      subtitle="Any"
                      target="#collapseOne"
                      controls="collapseOne"
                      click={handleUnit}
                    />
                  </div>
                  <div className="col-md-3">
                    <SearchProperties
                      title="Projects"
                      subtitle="Any"
                      target="#collapseOne"
                      controls="collapseOne"
                      click={handleProjects}
                    />
                  </div>
                  <div className="col-md-3">
                    <SearchProperties
                      title="Price Range"
                      subtitle={value[0] + " to " + value[1]}
                      target="#collapseOne"
                      controls="collapseOne"
                      click={handleRange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className=" text-end">
                  <button className="btn-search rounded-3 border-0">
                    <BsFacebook className="me-3" /> Search Properties
                  </button>
                  <button
                    className="btn-search rounded-3 border-0 d-none mob-show"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <BsFacebook className="me-3" /> Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>

          {unit && (
            <>
              <div className="container bg-grey">
                <div className="row">
                  <CheckBox title="Offices" />
                  <CheckBox title="Medical" />
                  <CheckBox title="Residential" />
                  <CheckBox title="Commercial" />
                  <CheckBox title="Retail" />
                  <CheckBox title="Malls" />
                </div>
              </div>
            </>
          )}
          {destination && (
            <>
              <div className="container bg-grey">
                <div className="row">
                  <CheckBox title="New Cairo" />
                  <CheckBox title="Mansoura" />
                  <CheckBox title="Tanta" />
                  <CheckBox title="North Cost" />
                  <CheckBox title="New Cairo" />
                  <CheckBox title="West Cairo" />
                </div>
              </div>
            </>
          )}
          {projects && (
            <>
              <div className="container bg-grey">
                <div className="row justify-content-between">
                  <CheckBox title="district-5 work" />
                  <CheckBox title="district-5" />
                  <CheckBox title="aeon" />
                </div>
              </div>
            </>
          )}
          {range && (
            <>
              <div className="container px-4">
                <Slider
                  value={value}
                  onChange={handleChange}
                  min={min}
                  max={max}
                  valueLabelDisplay="auto"
                />
                <div className="d-flex justify-content-between">
                  <div className="min d-flex flex-row">
                    <input
                      type="text"
                      className="rounded price border-end-0"
                      id="min"
                      value={value[0]}
                      onChange={getUser}
                    />
                    <div className="p-1 bord rounded-end ">EGP</div>
                  </div>

                  <div className="min d-flex flex-row">
                    <input
                      type="number"
                      className="rounded price border-end-0"
                      id="max"
                      onChange={getUserMax}
                      value={value[1]}
                    />
                    <div className="p-1 bord rounded-end ">EGP</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
      </div>
            <div className="text-center mt-2 d-none show-in-mop">
            <button
                    className="btn-search rounded-3 border-0 w-75"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <BsFacebook className="me-3" /> Search Properties
                  </button>

            </div>
      {/* End Home Page for Desktop */}

    </section>
  );
};

export default Main;
