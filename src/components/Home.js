import React from "react";
import heroImg from "../images/hero.jpg";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import NumberSection from "./NumberSection";
import Testimonial from "./Testimonial";
import Freelancing from "./Freelancing";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      {/* Our Main hero section starts here */}
      <main>
        <section className="section section-hero">
          <div className="container grid grid-two-column">
            <div className="section-hero-data">
              <p className="hero-top-data">this is me</p>
              <h1 className="hero-heading">SANTOSH PHAIJU</h1>
              <p className="hero-para">
                {" "}
                {/* <i class="fas fa-quote-left"></i> */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                voluptas. Quas consectetur deleniti soluta sed error provident
                labore molestias, doloribus vero aliquam!
              </p>
              <div>
                <a href="/" className="btn hireme-btn">
                  Hire me
                </a>
              </div>
            </div>
            {/* Hero section right side */}
            <div className="section-hero-image">
              <img
                src={heroImg}
                className="hero-image"
                alt="hero images here"
              />
            </div>
          </div>
        </section>
      </main>

      <About />
      <Portfolio />
      <NumberSection />
      <Services />
      <Testimonial />
      <Freelancing />
      <Contact />
    </>
  );
};

export default Home;
