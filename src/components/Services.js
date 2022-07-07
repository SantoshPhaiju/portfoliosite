import React from "react";
import icon from "../images/logo512.png";
// import icon2 from "../images/computer-icon-free-vector.webp" 
import icon3 from "../images/1260181.png"
// import icon4 from "../images/download.png"
import icon5 from "../images/3159310.png"
// import icon6 from "../images/download (1).png"

const Services = () => {
  return (
    <>
      <div className="section section-services">
        <div className="container">
          <div className="services-text">
            <h2 className="common-heading">Service Offers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              soluta. Magnam veniam quo cumque nemo, quia esse harum aut vero.
            </p>
          </div>
          <div className="grid grid-three-column serviceDiv">
            <div className="service-item">
              <img src={icon} alt="" className="service-icon" />
              <h3>Single Page App</h3>
              <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis cum doloremque?"</p>
            </div>
            <div className="service-item">
              <img src={icon3} alt="" className="service-icon" />
              <h3>Digital Marketing</h3>
              <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis cum doloremque?"</p>
            </div>
            <div className="service-item">
              <img src={icon5} alt="" className="service-icon" />
              <h3>Computer Work</h3>
              <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis cum doloremque?"</p>
            </div>
            <div className="service-item">
              <img src={icon3} alt="" className="service-icon" />
              <h3>SEO</h3>
              <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis cum doloremque?"</p>
            </div>
            <div className="service-item">
              <img src={icon5} alt="" className="service-icon" />
              <h3>Web Design</h3>
              <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis cum doloremque?"</p>
            </div>
            <div className="service-item">
              <img src={icon} alt="" className="service-icon" />
              <h3>Website Development</h3>
              <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis cum doloremque?"</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
