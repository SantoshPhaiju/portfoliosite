import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid-four-column">
          <div className="f-about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus nam accusantium
            </p>
          </div>
          {/* end */}
          <div className="f-links">
            <h3>Links</h3>
            <ul>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
            </ul>
          </div>
          {/* end */}

          <div className="f-services">
            <h3>Services</h3>
            <ul>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
              <li>
                <span>
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
                <a href="/">home</a>
              </li>
            </ul>
          </div>
          {/* end */}
          <div className="f-address">
            <h3>Have a Question?</h3>
            <address>
              <div>
                <p>
                  <span>
                    <ion-icon name="location-outline"></ion-icon>
                    <a href="/">Kathmandu, Nepal</a>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <ion-icon name="call-outline"></ion-icon>
                    <a href="tel:+9779803045389">+977 9803045389</a>
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <ion-icon name="mail-outline"></ion-icon>
                    <a href="mailto:santoshphaiju@gmail.com">
                      santoshphaiju@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </address>
          </div>
          {/* end */}
        </div>

        <div className="container">
          <div className="f-social-icons">
            <a
              href="https://www.facebook.com/santoshphaiju/"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon className="icons" name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/santoshphaiju/"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon className="icons" name="logo-instagram"></ion-icon>
            </a>
            <a
              href="https://www.youtube.com/channel/UCByGWpesZxihcadhkU4sYzQ"
              rel="noreferrer"
              target="_blank"
            >
              <ion-icon className="icons" name="logo-youtube"></ion-icon>
            </a>
          </div>

          <div className="f-rights">
            Copyright &copy; Santosh Phaiju 2022 | All rights reserved 😘 ❤
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
