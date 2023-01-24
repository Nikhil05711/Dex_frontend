import React, { useEffect } from "react";
import { WalletService } from "../Services/WalletService";

const Body = () => {
  const { isMetamaskAvailable, connectWallet, isConnected } = WalletService();
  useEffect(() => {
    isMetamaskAvailable();
  }, []);
  return (
    <div>
      <main>
        <div className="intro-area">
          <div className="bg-wrapper">
            <img src="asset/img/background/bg1.jpg" alt="" />
          </div>
          <div className="intro-content">
            <div className="slider-content">
              <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="slide-all-text slide-text-2">
                      {/* <!-- layer 2 --> */}
                      <div
                        className="layer-2 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h1 className="title-2">
                          The ultimate{" "}
                          <span className="color-text-bold"> metaverse</span>
                        </h1>
                      </div>
                      {/* <!-- layer 3 --> */}
                      <div
                        className="layer-3 wow fadeInUp"
                        data-wow-delay="0.7s"
                      >
                        <a href="token-ico.html" className="ready-btn coin-btn">
                          Get Started
                        </a>
                        <a
                          href="contact.html"
                          className="ready-btn color-btn last-btn"
                        >
                          White Paper
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    {/* <!-- Start mony send content --> */}
                    <div className="money-send">
                      <div className="calculator-inner">
                        <div className="single-cal">
                          <div className="swap-top d-flex flex-wrap align-items-center">
                            <div className="swap-left">
                              <span>RpaySwap</span>
                            </div>
                            <div className="swap-right">
                              <ul className="dashboard-right-menus">
                                <li>
                                  <a href="#0" className="thumbs">
                                    <i className="ti-layout-list-thumb"></i>
                                  </a>

                                  <div className="notification-area left-part">
                                    <div className="notifacation-header">
                                      <span className="set-text">
                                        <i className="ti-settings"></i>Setting
                                      </span>
                                      <div className="swap-set">
                                        <span>Default Transaction Spped</span>
                                        <ul>
                                          <li>
                                            <a href="#">Standard (6)</a>
                                          </li>
                                          <li>
                                            <a href="#">Fast (7)</a>
                                          </li>
                                          <li>
                                            <a href="#">Instant (8)</a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="swap-set slipege">
                                        <span>Slippage Tolerance</span>
                                        <ul>
                                          <li>
                                            <a href="#">0.1%</a>
                                          </li>
                                          <li>
                                            <a href="#">0.5%</a>
                                          </li>
                                          <li>
                                            <a href="#">1%</a>
                                          </li>
                                          <li>
                                            <a href="#">10%</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="#0" className="author">
                                    <i className="ti-time"></i>
                                  </a>
                                  <div className="notification-area side-part">
                                    <div className="author-body text-center">
                                      <span>
                                        Aspernatur sit adipisci quaerat unde at
                                        neque Redug Lagre dolorAspernatur sit
                                        adipisci quaerat unde at neque Redug
                                        Lagre dolor.Aspernatur sit adipisci
                                        quaerat unde at neque Redug Lagre dolor
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="inner-form">
                            <form action="#">
                              <label>From</label>
                              <input
                                type="number"
                                className="form-input"
                                placeholder="0"
                              />
                              <select>
                                <option value="position">BNB</option>
                                <option value="position">USDT</option>
                                <option value="position">ETH</option>
                                <option value="position">BTC</option>
                                <option value="position">BUSD</option>
                              </select>
                            </form>
                          </div>
                          <div className="middle-inti text-center">
                            <a href="#">
                              <i className="ti-arrow-down"></i>
                            </a>
                          </div>
                          <div className="inner-form">
                            <form action="#">
                              <label>To</label>
                              <input
                                type="number"
                                className="form-input"
                                placeholder="0"
                              />
                              <select>
                                <option value="position">CST</option>
                                <option value="position">BNB</option>
                                <option value="position">USDT</option>
                                <option value="position">ETH</option>
                                <option value="position">BTC</option>
                              </select>
                            </form>
                          </div>
                          <div className="inner-form-text">
                            <div className="rate-text d-flex flex-wrap align-items-center">
                              <span>Slippage Tolerance</span>
                              <span>Auto</span>
                            </div>
                          </div>
                          {isConnected ? (
                            <button className="cale-btn">Swap</button>
                          ) : (
                            <button
                              className="cale-btn"
                              onClick={connectWallet}
                            >
                              Connect Wallet
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="staking-area bg-color-2 fix area-padding-2">
          <div className="container">
            <div className=" row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="section-bg-headline">
                  <div className="top-text-title">
                    STACKING INVESTMENT PLATFORM
                  </div>
                  <h2>
                    Staking{" "}
                    <span className="color-text-bold">Graphbit token</span>{" "}
                    secure own wallet
                  </h2>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="section-bg-btn">
                  <a href="stacking.html" className="head-btn coin-btn">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Start column  --> */}
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div
                  className="staking-inner wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="staking-content">
                        <div className="stack-time">
                          <h3>Silver staking plan</h3>
                          <ul>
                            <li>
                              <a className="active" href="#">
                                15 DAYS
                              </a>
                            </li>
                            <li>
                              <a href="#">30 DAYS</a>
                            </li>
                            <li>
                              <a href="#">60 DAYS</a>
                            </li>
                          </ul>
                          <span className="part-stack">
                            Participet investor <span>2130</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="stack-name ">
                        <div className="stack-money">
                          <div className="plan-money">
                            <ul>
                              <li>
                                <a href="#">
                                  Diposite- 100 USD<span> = </span>Payment- 1000
                                  CNS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Diposite- 200 USD<span> = </span>Payment- 2000
                                  CNS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Diposite- 300 USD<span> = </span>Payment- 3000
                                  CNS
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="stack-btn coin-btn">
                          <a href="stacking.html">Stacking</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Start column  --> */}
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div
                  className="staking-inner wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="staking-content">
                        <div className="stack-time">
                          <h3>Gold staking plan</h3>
                          <ul>
                            <li>
                              <a className="active" href="#">
                                30 DAYS
                              </a>
                            </li>
                            <li>
                              <a href="#">45 DAYS</a>
                            </li>
                            <li>
                              <a href="#">60 DAYS</a>
                            </li>
                          </ul>
                          <span className="part-stack">
                            Participet investor <span>3130</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="stack-name ">
                        <div className="stack-money">
                          <div className="plan-money">
                            <ul>
                              <li>
                                <a href="#">
                                  Diposite- 1000 USD<span> = </span>Payment- 10K
                                  CNS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Diposite- 2000 USD<span> = </span>Payment- 20K
                                  CNS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Diposite- 3000 USD<span> = </span>Payment- 30K
                                  CNS
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="stack-btn coin-btn">
                          <a href="stacking.html">Stacking</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Start column  --> */}
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div
                  className="staking-inner wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                      <div className="staking-content">
                        <div className="stack-time">
                          <h3>Diamond staking plan</h3>
                          <ul>
                            <li>
                              <a className="active" href="#">
                                50 DAYS
                              </a>
                            </li>
                            <li>
                              <a href="#">75 DAYS</a>
                            </li>
                            <li>
                              <a href="#">90DAYS</a>
                            </li>
                          </ul>
                          <span className="part-stack">
                            Participet investor <span>2130</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7">
                      <div className="stack-name ">
                        <div className="stack-money">
                          <div className="plan-money">
                            <ul>
                              <li>
                                <a href="#">
                                  Diposite- 10K USD<span> = </span>Payment- 100K
                                  CNS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Diposite- 20K USD<span> = </span>Payment- 200K
                                  CNS
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Diposite- 30K USD<span> = </span>Payment- 300K
                                  CNS
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="stack-btn coin-btn">
                          <a href="stacking.html">Stacking</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Start column  --> */}
            </div>
          </div>
        </div>
      </main>
      <div className="brand-area bg-color-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="brand-content">
                <div className="brand-carousel owl-carousel">
                  <div className="single-brand-item">
                    <a href="#">
                      <img src="asset/img/brand/1.png" alt="" />
                    </a>
                  </div>
                  <div className="single-brand-item">
                    <a href="#">
                      <img src="asset/img/brand/2.png" alt="" />
                    </a>
                  </div>
                  <div className="single-brand-item">
                    <a href="#">
                      <img src="asset/img/brand/3.png" alt="" />
                    </a>
                  </div>
                  <div className="single-brand-item">
                    <a href="#">
                      <img src="asset/img/brand/4.png" alt="" />
                    </a>
                  </div>

                  <div className="single-brand-item">
                    <a href="#">
                      <img src="asset/img/brand/7.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
