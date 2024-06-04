import React from "react";
import "./View.css";
export const View = () => {
  return (
    <div>
      <div>
        <div>
          <div className="view-port-img">
            <img src={"/viewportimg.svg"} />
            <img src={"/doublearrow.svg"} />
          </div>
          <div className="view-port-oneline">
            <div className="view-soilt-head">
              <h1>Soilt Architecture</h1>
            </div>
            <div className="view-port-content">
              <p className="desc">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                venenatis consectetur auctor felis, id fermentum velit tristique
                turpis. Auctor lectus aliquam mauris elit in mi fringilla ut
                posuere. Nunc leo in massa interdum enim. Libero sit donec
                auctor adipiscing lacus diam.
              </p>
            </div>
          </div>
          <div className="current-grid">
            <div className="current-grid-left">
              <p>Current bid</p>
              <p>8.38 ETH</p>
              <p>= $22.775</p>
            </div>
            <div className="current-grid-line"></div>
            <div className="current-grid-right">
              <p>Bid ending in </p>
              <div className="timing">
                <div className="timing-first">
                  <p>6</p>
                  <h5>Hours</h5>
                </div>
                <div className="timing-first">
                  <p>15</p>
                  <h5>Mins</h5>
                </div>
                <div className="timing-first">
                  <p>29</p>
                  <h5>Sec</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="current-grid-button">
          <button>Place your bid now</button>
        </div>
      </div>
      <div className="view-portal">
        <div className="view-detail-parent">
          <div className="view-info-img-pro">
            <img src={"/Ellipsethree.svg"} />
          </div>
          <div className="view-info">
            <div className="view-info-about">
              <p>Bid placed by #114BV32</p>
              <p>Mar 26 2021 at 4.59 PM</p>
            </div>
            <div className="view-info-num">
              <p>5.69 ETH</p>
              <p>= $10,889</p>
            </div>
          </div>
        </div>
        <div className="view-detail-parent">
          <div className="view-info-img-pro">
            <img src={"/bidimg.svg"} />
          </div>
          <div className="view-info">
            <div className="view-info-about">
              <p>Bid placed by #114BV32</p>
              <p>Mar 26 2021 at 4.59 PM</p>
            </div>
            <div className="view-info-num">
              <p>6.99 ETH</p>
              <p>= $12,289</p>
            </div>
          </div>
        </div>
      </div>
      <div className="his-view">
        <p>History</p>
        <p>View all</p>
      </div>
      <div className="view-detail-parent">
        <div className="view-info-img-pro">
          <img src={"/historyimg.svg"} />
        </div>
        <div className="view-info">
          <div className="view-info-about">
            <p>Bid placed by #114BV32</p>
            <p>Adam Effinome #23AS88</p>
          </div>
          <div className="view-info-num">
            <p>Price</p>
            <p>6.99 ETH (= $ 12,289)</p>
          </div>
        </div>
      </div>
      <div className="view-detail-parent">
        <div className="view-info-img-pro">
          <img src={"/historyimg.svg"} />
        </div>
        <div className="view-info">
          <div className="view-info-about">
            <p>Last owned by</p>
            <p>Adam Effinome #23AS88</p>
          </div>
          <div className="view-info-num">
            <p>Price</p>
            <p>6.99 ETH (= $ 12,289)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
