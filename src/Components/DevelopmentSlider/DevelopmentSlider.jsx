"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.jpg";
import slide3 from "../../../public/slide3.jpg";
import slide4 from "../../../public/slide4.jpg";
import Image from "next/image";
import HeaderText from "../HeaderText/HeaderText";
import './DevelopmentSlider.css'

const DevelopmentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: {},
    breakpoints:{
      '(max-width: 990px)' : {
        slides:{
          perView:1
        }
      }
    },
    slides: {
      perView: 4,
      spacing: 10,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section className="p-3">
        <HeaderText text="OUR DEVELOPMENTS" customColor="color-blue" />
      <div ref={sliderRef} className="keen-slider edit  siz2">
        <div className=" number-slide1 keen-slider__slide container  ">
        <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide1} className=" rounded-4 zooom siz " alt="poster"  />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
          </div>
        </div>
        <div className=" number-slide2 keen-slider__slide container ">
          <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide2} className="w-100 h-100 rounded-4 zooom siz" />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons mob-container poster-100">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
          </div>
        </div>
        <div className=" number-slide3 keen-slider__slide container ">
          <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide3} className="w-100 h-100 rounded-4 zooom siz" />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons mob-container poster-100">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
          </div>
        </div>
        <div className=" number-slide4 keen-slider__slide container ">
          <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide4} className="w-100 h-100 rounded-4 zooom siz" />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons mob-container poster-100">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
          </div>
        </div>
        <div className=" number-slide5 keen-slider__slide container ">
          <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide1} className="w-100 h-100 rounded-4 zooom siz" alt="poster" />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons mob-container poster-100">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
          </div>
        </div>
        <div className=" number-slide6 keen-slider__slide container ">
          <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide3} className="w-100 h-auto rounded-4 zooom siz" />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons mob-container poster-100">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
          </div>
        </div>
        <div className=" number-slide7 keen-slider__slide container ">
          <div className="position-relative overflow-hidden hoverr rounded-4">
            <Image src={slide4} className="w-100 h-100 rounded-4 zooom siz" />
            <div className="position-absolute  top-0 start-0 end-0 bottom-0 hover-hide ">
              <div className="d-flex flex-column justify-content-end h-100 pb-4 font-respons mob-container poster-100">
              <p className="text-white">
                How to take matters to new heights is the question we answered
                with the first high-residential buildings in West Cairo. Aeon
                towers were mindfully designed to match the ambition of their
                residents. 20 floors of high-end & fully serviced
                apartments/penthouses with the extravagant skyline of Cairo as
                their view. If shooting for the stars is ambitious, then living
                above the stars is Aeon.
              </p>
              <a href="" className="text-white">Know More</a>

              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <h5 className="color-blue">East Cairo</h5>
            <p className="text-muted">Retail Malls</p>
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
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
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

export default DevelopmentSlider;
