import React from "react";
import "./Bid.css";

export const Bid = () => {
  return (
    <>
      <div className="super-grid">
        <div className="grid-name">
          <p>Enter Values</p>
        </div>
        <div className="image-grid">
          <div className="bit-image">
            <img src={"/bitimg.svg"} />
          </div>
          <div className="bit-images-details">
            <p>Love & Late</p>
            <p>Current bid ETH 5.89</p>
            <p>
              Bid ending in <span className="global-time">12h 24m 36m</span>
            </p>
            <p>View Artifact</p>
          </div>
        </div>
        <div className="overall-bid">
          <div className="my-bid">
            <p>Enter your bid details</p>
          </div>
          <div className="grid-wallet">
            <div className="wallet-address">
              <p>Wallet address</p>
              <p>0x..1234BGHC@45</p>
            </div>
            <div className="grid-time">
              <p>Timestamp</p>
              <p>Mar 29 2021, 15:15 PM</p>
            </div>
          </div>
          <div className="bid-amount">
            <div className="bid-amount-service">
              <p>Bid amount</p>
              <p>6.59</p>
              <p>Service fee 2.5% You will receive 8.6 ETH =$14,263</p>
            </div>
            <div className="eth-mass">
              <img src={"/unocard.svg"} />
              <p>ETH</p>
            </div>
          </div>

          <div className="auction-button">
            <button>Sell on auction</button>
          </div>
        </div>
      </div>
    </>
  );
};
