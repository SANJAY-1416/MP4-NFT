"use client";
import React, { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <div className="page">
      <div className="header">
        <div className="brand">
          <img src={"/brand.svg"} />
        </div>
        <div className="search-bar">
          <img src={"/search.svg"} />
          <input placeholder="Search Musicians, artists & more...." />
        </div>
        <div className="menu">
          <ul>
            <a>Home</a>
          </ul>
          <ul>
            <a>Create</a>
          </ul>
          <ul>
            <a>Collections</a>
          </ul>
        </div>
        <div className="button-profile">
          <button>0 Collectible</button>
          <img src={"/avatar.png"} />
        </div>
        <div className="parent-button">
          <button className="toggle" onClick={toggleNavbar}>
            {isClick ? <img src={"/close.svg"} /> : <img src={"/burger.svg"} />}
          </button>
        </div>{" "}
      </div>
      {isClick && (
        <div className="mobile-menu">
          <div className="mobile-grid">
            <div className="mobile-search-bar">
              <img src={"/search.svg"} />
              <input placeholder="Search Musicians, artists & more...." />
            </div>
            <div className="menus">
              <a href="/">Home</a>
              <a href="/">Create</a>
              <a href="/">Music Collections</a>
            </div>
            <div className="mobile-menu-button">
              <button>Connect Wallet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
