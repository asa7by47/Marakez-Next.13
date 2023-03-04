"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import one from "../../../public/one.jpg";
import two from "../../../public/two.jpg";
import three from "../../../public/three.jpg";
import './FirstInTheBussiness.css'

const FirstInTheBussiness = () => {
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
    <>
      {/* Desktop view */}

      <section className="p-4 pb-5">
        <div className="text-center d-flex justify-content-center">
          <div>
            <span className=" first color-blue">1</span>
            <span className="fs-2 color-blue">st</span>
            <span className="color-blue mt-1 fs-3"> IN THE BUSNISS TO DO </span>
          </div>
        </div>

        <div className="container-fluid ">
          {/*Mobile View  */}
          <div className="navigation-wrapper d-none mob-show">
            <div ref={sliderRef} className="keen-slider mob-height gap-1">
              <div className="keen-slider__slide  number-slide1 w-100 mob-min-width ">
                <div className="w-100 h-100 mob-hover  w-100">
                  <Image
                    src={one}
                    alt="photo"
                    className="img-fluid mob-zoom  w-100 h-100 "
                  />
                </div>
              </div>
              <div className="keen-slider__slide  number-slide2 w-100 mob-min-width ">
                <div className="w-100 h-100 mob-hover ">
                  <Image
                    src={two}
                    alt="photo"
                    className="img-fluid mob-zoom  w-100 h-100"
                  />
                </div>
              </div>
              <div className="keen-slider__slide  number-slide3 w-100 mob-min-width ">
                <div className="w-100 h-100 mob-hover ">
                  <Image
                    src={three}
                    alt="photo"
                    className="img-fluid mob-zoom  w-100 h-100"
                  />
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

          {/*End Mobile View  */}

          {/* Desktop View */}
          <div className="row mt-2 pb-5 mob-hide">
            <div className="col-md-4">
              <div className="img-first">
                <Image
                  src={one}
                  width={"500"}
                  height={500}
                  className="w-100 h-100"
                  alt="hh"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-first">
                <Image
                  src={two}
                  width={"500"}
                  height={500}
                  className="w-100 h-100"
                  alt="hh"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-first">
                <Image
                  src={three}
                  width={"500"}
                  height={500}
                  className="w-100 h-100"
                  alt="hh"
                />
              </div>
            </div>
          </div>
          {/* End Desktop View */}
        </div>
      </section>
      {/* End Desktop View */}
    </>
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

export default FirstInTheBussiness;
