"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import item1 from "../../../public/item1.jpg";
import item2 from "../../../public/item2.jpg";
import "./Latest.css";
const Latest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="border-bottom pb-5">
      <div className="empty"></div>
      <div className="container-fluid p-5 lh-1 mob-p">
        <div className="row">
          <div className="col-md-6">
            <div className="item">
              <span className="color-blue h4">LATEST LAUNCHES</span>
              <p className="text-muted">
                Marakez builds with purpose. Every project we create comes to
                life <br /> through meticulous attention to detail for our
                client's needs. Here <br /> are our latest responses to the
                market's demands.
              </p>
              <div className="btn-view">
                <button className="btn-edit my-2 btn-width btn-mobile">
                  View all <br /> properties
                </button>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className="navigation-wrapper d-none mob-show">
            <div
              ref={sliderRef}
              className="keen-slider mob-height gap-1 rounded-4"
            >
              <div className="keen-slider__slide  number-slide1 w-100 mob-min-width ">
                <div className="w-100 h-100 mob-hover  w-100 position-relative">
                  <Image
                    src={item1}
                    alt="photo"
                    className="img-fluid mob-zoom  w-100 h-100 "
                  />
                  <div className="position-absolute overlay">
                    <div className="d-flex flex-column  text-white px-4 py-5 h-100 justify-content-end ">
                      <p className="m-0 ">District 5</p>
                      <h6 className="m-0 fw-bolder">Plateau</h6>
                      <p className="m-0 lh-1 ">
                        Taking living spaces to elevated heights; The Plateau
                        designed to offer endless views of beautiful lush
                        greenery that are bound to take your breath away from
                        the highest vantage point on District 5
                      </p>
                      <a href="#" className="text-white fw-bold">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="keen-slider__slide  number-slide2 w-100 mob-min-width ">
                <div className="w-100 h-100 mob-hover w-100 position-relative">
                  <Image
                    src={item2}
                    alt="photo"
                    className="img-fluid mob-zoom  w-100 h-100"
                  />
                  <div className="position-absolute overlay">
                    <div className="d-flex flex-column  text-white px-4 py-5 h-100 justify-content-end ">
                      <p className="m-0 ">District 5</p>
                      <h6 className="m-0 fw-bolder">Plateau</h6>
                      <p className="m-0 lh-1 ">
                        Taking living spaces to elevated heights; The Plateau
                        designed to offer endless views of beautiful lush
                        greenery that are bound to take your breath away from
                        the highest vantage point on District 5
                      </p>
                      <a href="#" className="text-white fw-bold">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {loaded && instanceRef.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
          </div>
          {/* End Mobile View */}

          {/* Desktop View */}
          <div className="col-md-6 d-flex justify-content-end align-items-end mob-hide">
            <div className="row   g-2">
              <div className="col-md-6">
                <div className="position-relative h-85">
                  <Image
                    src={item1}
                    width={500}
                    height={320}
                    className="w-100 h-100 rounded-3"
                    alt="dd"
                  />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0">
                    <div className="container text-white lh-1 d-flex flex-column h-100 justify-content-end p-4">
                      <span className="fs-6 fw-normal">District 5</span>
                      <h6>Plateau</h6>
                      <p className="fs-6 fw-normal">
                        Taking living spaces to elevated heights; The Plateau
                        designed to offer endless views of beautiful lush
                        greenery that are bound to take your breath away from
                        the highest vantage point on District 5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="position-relative ">
                  <Image
                    src={item2}
                    width={500}
                    height={350}
                    className="w-100 h-100 rounded-3"
                    alt="ss"
                  />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0">
                    <div className="container text-white lh-1 d-flex flex-column h-100 justify-content-end p-4">
                      <span className="fs-6 fw-normal">District 5</span>
                      <h6 className="h5 fw-bolder">D Parks</h6>
                      <p className="fs-6 fw-normal">
                        D Parks is the last multi-family neighborhood D5R,and
                        consists of three uniquely designed clusters overlooking
                        three distinctive parks.Each park has a unique concept
                        and offers a group of outdoor amenities and experiences
                        to all community members while granting unprecedented
                        views.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Desktop View */}
        </div>
      </div>
    </section>
  );
};
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left latest-left" : "arrow--right latest-right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Latest;
