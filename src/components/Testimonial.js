import React from "react";
import heroImg from "../images/hero.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <>
      <div className="section section-testimonial">
        <div className="container">
          <div className="upper">
            <h2 className="common-heading">Happy Client Works</h2>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium molestiae assumenda sapiente rem nemo, cupiditate
                  autem? Obcaecati iusto alias quo est maxime.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src={heroImg} alt="this is an picturs here" />
                </figure>
                <div className="client-data-details">
                  <p>Santosh Phaiju</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
