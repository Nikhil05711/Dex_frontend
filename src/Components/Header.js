import React, { useEffect } from "react";
import { WalletService } from "../Services/WalletService";

const Header = () => {
  const { isMetamaskAvailable, connectWallet, isConnected } = WalletService();

  useEffect(() => {
    isMetamaskAvailable();
  }, []);

  return (
    <div>
      <header className="header-one">
        <div id="sticker" className="header-menu-area header-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
                <div className="logo">
                  <a href="index.html">
                    <img src="asset/img/logo/logo2.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-9">
                <div className="header-right ">
                  {isConnected ? (
                    <a href="#" className="top-btn coin-btn">
                      Wallet connected
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="top-btn coin-btn"
                      onClick={connectWallet}
                    >
                      Connect Wallet
                    </a>
                  )}
                </div>
                <div className="header_menu f-right">
                  <nav id="mobile-menu">
                    <ul className="main-menu">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li className="resulta">
                        <a href="#">Trade</a>
                      </li>
                      <li>
                        <a href="#">Swap</a>
                      </li>
                      <li>
                        <a href="#">Liquidity</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
// Connect Wallet {isConnected ? "true" : "false"}
