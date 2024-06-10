"use client";

import React from "react";

import "./Terms.css";
import Link from "next/link";

export default function page() {
  return (
    <div className="overlay">
      <div className="terms">
        <div className="x-circle">
          <img src={"/x-circle.svg"} />
        </div>
        <div className="brand-h-four">
          <img src={"/brandtwo.svg"} />
          <h2>Terms of Service</h2>
        </div>
        <div className="over-tae">
          <div className="terms-of-para">
            <p>
              Please take a few minutes to read and understand MP4toNFT Terms of
              Service. To continue, you will need to accept the{" "}
              <span className="service">Terms of Service</span> by checking the
              box.
            </p>
          </div>
          <div className="two-inputs">
            <div className="age">
              <input type="checkbox" />
              <p>I am atleast 13 years old</p>
            </div>
            <div className="accept">
              <input type="checkbox" />
              <p>I accept MP4toNFT Terms of Service</p>
            </div>
          </div>
        </div>
        <Link href="/Component/Manwithlove">
          <div className="continue-button">
            <button>Continue</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
