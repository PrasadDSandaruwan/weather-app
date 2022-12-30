import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";

import Logo from "../common/SVG/footerLogo";

function Footer() {
  return (
    <React.Fragment>
      <footer class="main-footer">
        <div class="container">
          <div class="footer-content">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div class="logo-widget footer-widget">
                  <figure class="logo-box">
                    <a href="#">
                      <Logo></Logo>
                    </a>
                  </figure>
                  <div class="text">
                    <p>
                      We provide elaborate weather analysis 
                      and weather forecast services for
                      Clayton, Victoria, Australia.
                    </p>
                  </div>
                  {/* <ul class="footer-social">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div class="service-widget footer-widget">
                  <div class="footer-title">Services</div>
                  <ul class="list">
                    <li>
                      <Link to="#">Weather Data Analysis</Link>
                    </li>
                    <li>
                      <Link to="#">Weather Forecasting</Link>
                    </li>
                    <li>
                      <Link to="#">Weather Data</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div class="contact-widget footer-widget">
                  <div class="footer-title">Contacts</div>
                  <div class="text">
                    <p>Weather Spark developers</p>
                    {/* <p>+2(784) 1223323</p>
                    <p>info@example.com</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 column">
              <div class="copyright">
                <a href="#">WeatherSpark</a> &copy; 2022 All Right Reserved
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 column">
              <ul class="footer-nav">
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
