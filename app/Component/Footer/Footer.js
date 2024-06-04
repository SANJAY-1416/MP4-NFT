import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <div className="footer-brand">
        <img src={"/brandtwo.svg"} />
      </div>
      <div className="fb-in">
        <img src={"/facebook.svg"} />
        <img src={"/instagram.svg"} />
      </div>
      <div className="footer-info">
        <p>Terms of Service</p>
        <p>Privacy</p>
        <p>Resource center</p>
      </div>
      <div className="footer-detail">
        <p>© 2020 MP4toNFT. All rights reserved</p>
        <p>Developed and maintained by ZEVO CORPORATION</p>
      </div>
    </div>
  );
};
