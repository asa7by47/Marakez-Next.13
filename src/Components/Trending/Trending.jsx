"use client";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import React, { useState } from "react";
import aeon from "../../../public/aeon.jpg";
import aeon2 from "../../../public/aeon2.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import HeaderText from "../../Components/HeaderText/HeaderText";
import Image from "next/image";
import './Trending.css';

const Trending = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef,instanceRef] = useKeenSlider({
    loop: true,
    slides:{
      perView:1
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="bg-image p-5">
      <HeaderText text="TRENDING NOW" customColor="text-white" bgWhite="bg-white" />
      <div ref={sliderRef} className="keen-slider w-50 m-auto keen-mop">
        <div className="keen-slider__slide slide1 mob-width">
          <div className="card">
            <Image src={aeon} alt="img" className="w-100 imgg" />
            <div className="card-body  ">
              <span className="color-blue  fs-4 ms-3">Aeon - Two Bedroom </span>
              <span className="text-muted  fs-4">,Aeon Towers</span>

              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-4 ">
                    <div>
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center">
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                  <div className="col-4 mt-1 ">
                    <div className="text-end">
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <div className="text-center w-100 mt-3">
                      <button className="text-center know-more same w-100 py-2">
                        Know More
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center w-100 mt-3">
                      <button className="text-center call-us same w-100 py-2">
                        Call Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide slide2 mob-width">
        <div className="card">
            <Image src={aeon2} alt="img" className="w-100 imgg" />
            <div className="card-body  ">
              <span className="color-blue  fs-4 ms-3">Aeon - Two Bedroom </span>
              <span className="text-muted  fs-4">,Aeon Towers</span>

              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-4">
                    <div>
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center">
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                  <div className="col-4 mt-1 ">
                    <div className="text-end">
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="">
                      <AiOutlineLinkedin className="color-blue fs-2" />
                      <span className="text-muted fs-5 mb-3">2 beds</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <div className="text-center w-100 mt-3">
                      <button className="text-center know-more same w-100 py-2">
                        Know More
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center w-100 mt-3">
                      <button className="text-center call-us same w-100 py-2">
                        Call Us
                      </button>
                    </div>
                  </div>
                </div>
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
     
    </section>
  );
};
 function Arrow(props) {
     const disabeld = props.disabled ? " arrow--disabled" : "";
     return (
       <>
         <svg
           onClick={props.onClick}
           className={`arrows ${
             props.left ? "arrow---left" : "arrow---right"
           } ${disabeld}   `}
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
       </>
     );
   }
export default Trending;
