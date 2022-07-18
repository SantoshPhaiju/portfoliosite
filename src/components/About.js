import React from "react";
import bioimage from "../images/bioimg.jpg";

const About = () => {
  return (
    <>
      <section className="section section-bio">
        <div className="container grid grid-two-column">
          <div className="bio-image">
            <img
              src={bioimage}
              className="bioImg"
              alt="this is the bioimage here."
            />
          </div>
          {/* Bio right side data */}
          <div className="bio-data">
            <h2 className="common-heading">My Bio-data</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem voluptas repudiandae expedita totam odit.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur quis soluta officia.
            </p>
            <div className="bio-data-stats">
              <div className="bio-stats">
                <h3>Design</h3>
                <div className="bio-progress-bar bio-progress-1">
                  <span>80%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>HTML</h3>
                <div className="bio-progress-bar bio-progress-2">
                  <span>90%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>CSS</h3>
                <div className="bio-progress-bar bio-progress-3">
                  <span>85%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>JavaScript</h3>
                <div className="bio-progress-bar bio-progress-4">
                  <span>64%</span>
                </div>
              </div>
              <div className="bio-stats">
                <h3>MERN</h3>
                <div className="bio-progress-bar bio-progress-5">
                  <span>30%</span>
                </div>
              </div>
            </div>
            <div className="bio-data-btn">
              <a type="button" href="/" className="btn">
                download cv
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
