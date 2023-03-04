"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import tanta from "../../../public/img2.jpg";
import lead1 from "../../../public/lead1.jpg";
import lead2 from "../../../public/lead2.jpg";
import lead3 from "../../../public/lead3.jpg";
import lead4 from "../../../public/lead4.jpg";
import lead5 from "../../../public/lead5.jpg";
import HeaderText from "../HeaderText/HeaderText";
import './Gallery.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides:{
      perView:1
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
    <section className="p-5">
      <HeaderText customColor="color-blue" bgWhite="gray-bg" text="THE LEADING MIXED-USE DEVELOPER IN EGYPT" />







      {/* Desktop View */}
    
      <div className="container-fluid h-100 mob-hide">
        <div className="row ">
          <div className="col-md-4">
            <div className="img-gallery position-relative hover overflow-hidden ">
              <Image
                src={lead1}
                className="w-100 shadow-1-strong rounded-4 zoom"
                width={500}
                height={500}
                alt="Boat on Calm Water"
              />

              <div className="position-absolute overlay rounded-4">
              <div className="d-flex h-100 flex-column justify-content-end">
                  <span className="ms-5 mb-4 fs-3">Retail</span>
                  <a href="#" className="ms-5 mb-4 text-white">
                    Know More
                  </a>
                </div>
 
              </div>
            </div>

            <div className="img-gallery position-relative hover overflow-hidden mt-4">
              <Image
                src={lead2}
                className="w-100 shadow-1-strong rounded-4 zoom"
                width={500}
                height={500}
                alt="Boat on Calm Water"
              />

              <div className="position-absolute overlay rounded-4">
              <div className="d-flex h-100 flex-column justify-content-end">
                  <span className="ms-5 mb-4 fs-3">Retail</span>
                  <a href="#" className="ms-5 mb-4 text-white">
                    Know More
                  </a>
                </div>
 
              </div>
            </div>
          
          </div>
          <div className="col-md-4 m-0 p-0">
            <div className="img-gallery position-relative hover overflow-hidden h-100 rounded-4">
            <Image
              src={lead3}
              className="w-100  zoom rounded-4 h-100"
              width={500}
              height={800}
              alt="Boat on Calm Water"
            />
             <div className="position-absolute overlay rounded-4">
              <div className="d-flex h-100 flex-column justify-content-end">
                  <span className="ms-5 mb-4 fs-3">Retail</span>
                  <a href="#" className="ms-5 mb-4 text-white">
                    Know More
                  </a>
                </div>
 
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className="img-gallery position-relative hover overflow-hidden ">
              <Image
                src={lead4}
                className="w-100 shadow-1-strong rounded-4 zoom"
                width={500}
                height={500}
                alt="Boat on Calm Water"
              />

              <div className="position-absolute overlay rounded-4">
              <div className="d-flex h-100 flex-column justify-content-end">
                  <span className="ms-5 mb-4 fs-3">Retail</span>
                  <a href="#" className="ms-5 mb-4 text-white">
                    Know More
                  </a>
                </div>
 
              </div>
            </div>

            <div className="img-gallery position-relative hover overflow-hidden mt-4">
              <Image
                src={lead5}
                className="w-100 shadow-1-strong rounded-4 zoom"
                width={500}
                height={500}
                alt="Boat on Calm Water"
              />

              <div className="position-absolute overlay rounded-4">
              <div className="d-flex h-100 flex-column justify-content-end">
                  <span className="ms-5 mb-4 fs-3">Retail</span>
                  <a href="#" className="ms-5 mb-4 text-white">
                    Know More
                  </a>
                </div>
 
              </div>
            </div>
          
          </div>
        </div>

      </div>
     {/* End Desktop View */}
     {/* Mobil View */}
      <div className="navigation-wrapper d-none mob-show">
        <div ref={sliderRef} className="keen-slider mob-height gap-1">
          <div className="keen-slider__slide  number-slide1 w-100 mob-min-width rounded-4">
            <div className="w-100 h-100 mob-hover position-relative w-100">
              <Image
                src={lead1}
                alt="photo"
                className="img-fluid mob-zoom rounded-4 w-100 h-100 "
              />
              <div className="position-absolute overlay mob-text">
                <div className="text-center mb-5 w-100">
                <h6 className="text-white">Offices</h6>
                <a href="#" className="text-white">
                  Know More
                </a>

                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide  number-slide2 w-100 mob-min-width rounded-4">
            <div className="w-100 h-100 mob-hover position-relative">
              <Image
                src={lead2}
                alt="photo"
                className="img-fluid mob-zoom rounded-4 w-100 h-100"
              />
               <div className="position-absolute overlay mob-text">
                <div className="text-center mb-5 w-100">
                <h6 className="text-white">Offices</h6>
                <a href="#" className="text-white">
                  Know More
                </a>

                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide  number-slide3 w-100 mob-min-width rounded-4">
            <div className="w-100 h-100 mob-hover position-relative">
              <Image
                src={lead3}
                alt="photo"
                className="img-fluid mob-zoom rounded-4 w-100 h-100"
              />
              <div className="position-absolute overlay mob-text">
                <div className="text-center mb-5 w-100">
                <h6 className="text-white">Offices</h6>
                <a href="#" className="text-white">
                  Know More
                </a>

                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide  number-slide4 w-100 mob-min-width rounded-4">
            <div className="w-100 h-100 mob-hover position-relative">
              <Image
                src={lead4}
                alt="photo"
                className="img-fluid mob-zoom rounded-4 w-100 h-100"
              />
              <div className="position-absolute overlay mob-text">
                <div className="text-center mb-5 w-100">
                <h6 className="text-white">Offices</h6>
                <a href="#" className="text-white">
                  Know More
                </a>

                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide  number-slide5 w-100 mob-min-width rounded-4">
            <div className="w-100 h-100 mob-hover position-relative">
              <Image
                src={lead5}
                alt="photo"
                className="img-fluid mob-zoom rounded-4 w-100 h-100"
              />
              <div className="position-absolute overlay mob-text">
                <div className="text-center mb-5 w-100">
                <h6 className="text-white">Offices</h6>
                <a href="#" className="text-white">
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
      {/* End Mobil View */}

    </section>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
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

export default Gallery;
