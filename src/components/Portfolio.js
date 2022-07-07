import React, { useState } from "react";
import img1 from "../images/portfolioimg/img1.jpg";
import img2 from "../images/portfolioimg/img2.jpg";
import img3 from "../images/portfolioimg/img3.jpg";
import img4 from "../images/portfolioimg/img4.jpg";
import img5 from "../images/portfolioimg/img5.jpg";
import img6 from "../images/portfolioimg/img6.jpg";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);
  const onclick = (index) => {
    setToggleState(index);
  };
  // useCountUp({
  //   ref: "counter2",
  //   end: 6000,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 0
  // });
  return (
    <>
      <div className="section section-portfolio">
        <div className="container">
          <div className="portfolio-text">
            <h2 className="common-heading">Latest Works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              soluta. Magnam veniam quo cumque nemo, quia esse harum aut vero.
            </p>
          </div>
          <div className="portfolio-buttons">
            <button
              onClick={() => onclick(1)}
              value={1}
              className={toggleState === 1 ? "active btn btn-1" : "btn btn-1"}
            >
              Websites
            </button>
            <button
              onClick={() => onclick(2)}
              value={2}
              className={toggleState === 2 ? "active btn btn-1" : "btn btn-1"}
            >
              Youtube
            </button>
            <button
              onClick={() => onclick(3)}
              value={3}
              className={toggleState === 3 ? "active btn btn-1" : "btn btn-1"}
            >
              Design
            </button>
          </div>
          <div className="grid grid-three-column">
            <div className={toggleState === 1 ? "projects" : "projects hidden"}>
              <img src={img1} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 1</h2>
              </div>
            </div>
            <div className={toggleState === 3 ? "projects" : "projects hidden"}>
              <img src={img1} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 1</h2>
              </div>
            </div>

            <div className={toggleState === 2 ? "projects" : "projects hidden"}>
              <img src={img2} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 2</h2>
              </div>
            </div>
            <div className={toggleState === 1 ? "projects" : "projects hidden"}>
              <img src={img2} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 2</h2>
              </div>
            </div>
            <div className={toggleState === 2 ? "projects" : "projects hidden"}>
              <img src={img3} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 3</h2>
              </div>
            </div>
            <div className={toggleState === 1 ? "projects" : "projects hidden"}>
              <img src={img4} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 4</h2>
              </div>
            </div>
            <div className={toggleState === 3 ? "projects" : "projects hidden"}>
              <img src={img5} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 5</h2>
              </div>
            </div>
            <div className={toggleState === 1 ? "projects" : "projects hidden"}>
              <img src={img5} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 5</h2>
              </div>
            </div>
            <div className={toggleState === 3 ? "projects" : "projects hidden"}>
              <img src={img6} className="portfolioImg" alt="" />
              <div className="overlay">
                <h2 className="common-heading">Project 6</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Portfolio;
