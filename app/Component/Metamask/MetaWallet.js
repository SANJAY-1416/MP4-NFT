import React from "react";
import "./MetaWallet.css";

export const MetaWallet = () => {
  return (
    <>
      <div className="top-meta">
        <div className="meta-mask">
          <img src={"fox.svg"} />
          <p>Connect your MetaMask Wallet to continue</p>
          <button>Connect Wallet</button>
        </div>
      </div>
    </>
  );
};
