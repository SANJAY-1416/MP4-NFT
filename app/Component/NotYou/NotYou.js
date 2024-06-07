import React from "react";
import "./NotYou.css";
export const NotYou = () => {
  return (
    <>
      <div className="page-not-found">
        <img src={"/youimage.svg"} />
        <p>It's not you. Its us</p>
        <p>
          Unfortunately we are down for a maintainance right now. We will be
          online as soon as possible. Please check again in a little while.
        </p>
      </div>
    </>
  );
};
