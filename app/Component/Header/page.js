"use client";
import React, { useState } from "react";
import "./Header.css";
import Link from "next/link";

export default function page() {
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
            <Link href="/Component/Hero">Home</Link>
          </ul>
          <ul>
            <Link href="/Component/Music">Create</Link>
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
          <div className="mobile-menu-san">
            <button>Connect Wallet</button>
          </div>
          <button className="toggle" onClick={toggleNavbar}>
            {isClick ? <img src={"/close.svg"} /> : <img src={"/burger.svg"} />}
          </button>
        </div>
      </div>

      {isClick && (
        <div className="mobile-menu">
          <div className="mobile-grid">
            <div className="mobile-search-bar">
              <img src={"/search.svg"} />
              <input placeholder="Search Musicians, artists & more...." />
            </div>
            <div className="menus">
              <Link href="/">Home</Link>
              <Link href="/Component/Music">Create</Link>
              <Link href="/">Music Collections</Link>
            </div>

            <div className="mobile-menu-button">
              <div>
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
