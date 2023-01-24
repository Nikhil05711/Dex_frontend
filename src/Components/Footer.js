import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="footer1">
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-content logo-footer">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <a href="#">
                        <img src="asset/img/logo/logo2.png" alt="" />
                      </a>
                    </div>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <a href="#">
                            <img src="asset/img/about/midea1.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="asset/img/about/midea2.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="asset/img/about/midea3.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="asset/img/about/midea4.png" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="asset/img/about/midea5.png" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-content rs-mar-0">
                  <div className="footer-head">
                    <h4>Payments option</h4>
                    <ul className="footer-list">
                      <li>
                        <a href="signup.html">Ripple coin</a>
                      </li>
                      <li>
                        <a href="signup.html">Bitcoin</a>
                      </li>
                      <li>
                        <a href="signup.html">Binance</a>
                      </li>
                      <li>
                        <a href="signup.html">Ethereum</a>
                      </li>
                      <li>
                        <a href="signup.html">Coin base</a>
                      </li>
                    </ul>
                    <ul className="footer-list">
                      <li>
                        <a href="signup.html">About Us</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="signup.html">Privacy</a>
                      </li>
                      <li>
                        <a href="signup.html">Notification</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- end single footer --> */}
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-content last-content rs-mar-0">
                  <div className="footer-head">
                    <h4>Subscribe</h4>
                    <p>
                      Are you looking for professional advice for your new
                      business. Are you looking for professional advice.
                    </p>
                    <div className="subs-feilds">
                      <div className="suscribe-input">
                        <input
                          type="email"
                          className="email form-control width-80"
                          id="sus_email"
                          placeholder="Type Email"
                        />
                        <button
                          type="submit"
                          id="sus_submit"
                          className="subs-btn coin-btn"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Start Footer Bottom Area --> */}
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>
                    Copyright © 2023
                    <a href="#">Graphbit</a> All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="coin.html">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer Bottom Area --> */}
      </footer>
    </div>
  );
};

export default Footer;
