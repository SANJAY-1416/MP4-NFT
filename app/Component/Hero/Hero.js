import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <div>
      <div className="grid-flex">
        <div className="parent-hero">
          <p>Welcome,</p>
          <p>Find,Buy,Bid,Sell & Collect your favourite Music Collectible.</p>
        </div>
        <div className="parent-hero-ism">
          <div className="hero-ism">
            <div className="grid">
              <div className="sub-grid">
                <div className="hero-grid">
                  <div className="hero-img">
                    <img src={"/Ellipseone.svg"} />
                  </div>
                  <div className="hero-content">
                    <p>Created by</p>
                    <p>#114Tk6</p>
                  </div>
                </div>
                <div className="sub-hero">
                  <div className="hero-content">
                    <p>Owned by</p>
                    <p>#223BV1</p>
                  </div>
                  <div className="hero-img">
                    <img src={"/Ellipsetwo.svg"} />
                  </div>
                </div>
              </div>
              <div className="hero-img">
                <img src={"/heroimage.svg"} />
                <p>Multi Verge</p>

                <div className="currnet-bid">
                  <p>Current bid ETH 5.89</p>
                  <p>= $ 11,557</p>
                </div>
                <div className="bid-ending">
                  <p>Bid ending in</p>
                  <p>12h 24m 36s</p>
                </div>

                <div className="hero-footer">
                  <div className="hero-footer-image">
                    <img src={"/up.svg"} />
                    <p>View History</p>
                  </div>
                  <div className="hero-footer-button">
                    <button>Place Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-ism">
            <div className="grid">
              <div className="sub-grid">
                <div className="hero-grid">
                  <div className="hero-img">
                    <img src={"/Ellipseone.svg"} />
                  </div>
                  <div className="hero-content">
                    <p>Created by</p>
                    <p>#114Tk6</p>
                  </div>
                </div>
                <div className="sub-hero">
                  <div className="hero-content">
                    <p>Owned by</p>
                    <p>#223BV1</p>
                  </div>
                  <div className="hero-img">
                    <img src={"/Ellipsetwo.svg"} />
                  </div>
                </div>
              </div>
              <div className="hero-img">
                <img src={"/heroimagetwo.svg"} />
                <p>FrixBie</p>

                <div className="currnet-bid">
                  <p>Current bid ETH 5.89</p>
                  <p>= $ 11,557</p>
                </div>
                <div className="bid-ending">
                  <p>Bid ending in</p>
                  <p>12h 24m 36s</p>
                </div>

                <div className="hero-footer">
                  <div className="hero-footer-image">
                    <img src={"/up.svg"} />
                    <p>View History</p>
                  </div>
                  <div className="hero-footer-button">
                    <button>Place Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-ism">
            <div className="grid">
              <div className="sub-grid">
                <div className="hero-grid">
                  <div className="hero-img">
                    <img src={"/Ellipseone.svg"} />
                  </div>
                  <div className="hero-content">
                    <p>Created by</p>
                    <p>#114Tk6</p>
                  </div>
                </div>
                <div className="sub-hero">
                  <div className="hero-content">
                    <p>Owned by</p>
                    <p>#223BV1</p>
                  </div>
                  <div className="hero-img">
                    <img src={"/Ellipsetwo.svg"} />
                  </div>
                </div>
              </div>
              <div className="hero-img">
                <img src={"/heroimagethree.svg"} />
                <p>Prizma</p>

                <div className="currnet-bid">
                  <p>Current bid ETH 5.89</p>
                  <p>= $ 11,557</p>
                </div>
                <div className="bid-ending">
                  <p>Bid ending in</p>
                  <p>12h 24m 36s</p>
                </div>

                <div className="hero-footer">
                  <div className="hero-footer-image">
                    <img src={"/up.svg"} />
                    <p>View History</p>
                  </div>
                  <div className="hero-footer-button">
                    <button>Place Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="under-hero">
        <div className="under-hero-para">
          <p>View all live auctions</p>
          <p>We are creating the new economy for collecting music</p>
          <p>
            we're bringing Music creators, digital creators,crypto natives,and
            collectors together to move culture forward.
          </p>
          <button>Sell your Music Collectable</button>
        </div>
      </div>
    </div>
  );
};
