import React from "react";
import Image from "next/image";
import about from "../../../public/about.jpg";
import about2 from "../../../public/about2.jpg";
import Navbar from "../Navbar/Navbar";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* End Navbar */}

      {/* About Us Page */}
      <section className="about-us mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text">
                <h4 className="fw-bolder">
                  Marakez – Leading Mixed-Use Developer in Egypt
                </h4>
                <p className="fs-4">
                  The beginnings of the Fawaz Al Hokair Group date back to 1989,
                  when three brothers Fawaz, Salman and Abdul Majeed Abdulaziz
                  Alhokair, founded two menswear stores. Today the Group has a
                  diverse portfolio of investments ranging from construction,
                  financial services, health care, hospitality, energy, fashion
                  and real-estate development. The fashion retail sector of the
                  group spans 16 countries operating more than 2,100 stores and
                  representing more than 80 international brands. The Real
                  Estate sector of Fawaz Al Hokair Group currently operate a
                  network of 17 shopping malls, managing over 1.6 million sq
                  meters of prime retail real estate. Fawaz AL Hokair Group is
                  considered the largest retail developer in Saudi Arabia and
                  one of the largest retail developers in the Middle East. The
                  Group has expanded its business operations beyond the borders
                  of Saudi Arabia and invested in retail and real estate sectors
                  across the Middle East and North Africa (MENA), the USA and
                  Central Asia.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="imggg">
                <Image src={about} alt="about" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="imggg px-5">
                <Image src={about2} alt="about" className="w-100" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="text">
                <h4 className="fw-bolder">The Story</h4>
                <p className="fs-4">
                  Since the launch of Mall of Arabia Cairo in December 2010, the
                  Group has invested extensively in the areas of retail
                  development and fashion retail in Egypt. Based on the Group’s
                  positive outlook for the Egyptian economy, as of September
                  2015, Fawaz Al Hokair Group assembled a new team of
                  experienced, young and innovative Egyptian professionals and
                  given them the mandate to build the largest mixed use
                  development and management company in Egypt. The new vision
                  will see the creation of a new local subsidiary of Fawaz Al
                  Hokair group, MARAKEZ, with a focus on re-developing and
                  uplifting Mall of Arabia and launching new Malls as well as
                  residential developments, F&B and entertainment chains across
                  the nation{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Vision</h4>
              <p className="fw-bold fs-5">
                To envision, build and manage mixed use developments that are
                the heart and soul of the communities they serve.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Mission </h4>
              <p className="fw-bold fs-5">
                To become the first choice mixed-use developer in Egypt and the
                region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End About Us Page */}

      {/* Gallery */}
      <Gallery />
      {/* End Gallery */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default AboutUs;
