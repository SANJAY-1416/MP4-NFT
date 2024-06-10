import React from "react";
import "./Music.css";

export default function page() {
  return (
    <div>
      <div className="create-music">
        <p>Create Music collectible</p>
      </div>
      <div className="overall-upload">
        <div>
          <div className="upload-work">
            <div>
              <img src={"/upload.svg"} />
            </div>
            <div className="upload-work-drop">
              <p>
                Drop or <span className="work-here"> Upload</span> your work
                here
              </p>
            </div>
            <div className="upload-image-format">
              <p>Supports MP4, JPG, GIF, JPEG & PNG format</p>
            </div>
          </div>
        </div>
        <div className="toggle">
          <div className="toggle-grid">
            <p>Put on sale</p>
            <p>You’ll receive bids on this item</p>
          </div>
          <div className="toggle-img">
            <img src={"toggle.svg"} />
          </div>
        </div>
        <div className="toggle">
          <div className="toggle-grid">
            <p>Instant sale price</p>
            <p>Enter the price for which the item will be instantly sold</p>
          </div>
          <div className="toggle-img">
            <img src={"/toggleleft.svg"} />
          </div>
        </div>

        <div className="unocard">
          <div className="uno-left-grid">
            <p>6.59</p>
            <p>Service fee 2.5% you will receive 8.6 ETH =$14,263</p>
          </div>
          <div className="uno-right-grid">
            <img src={"/unocard.svg"} />
            <p>ETH</p>
          </div>
        </div>
        <div className="second-part">
          <div className="input-overall">
            <div className="name-input">
              <p>Name</p>
            </div>
            <div className="input-input">
              <p> Enter the title of this Music Collectable</p>
              <p>This field is required</p>
            </div>
          </div>
          <div className="description">
            <p>
              Description
              <span className="one"> (1012 of 1000 characters used)</span>
            </p>
            <p>Whatis the best way to describe this Music Collectable ?</p>
            <p>12 characters more used than the accepted limit</p>
          </div>
          <div className="royalties">
            <p>Royalties</p>
            <div className="eg">
              <p>Eg 10,20,30,40</p>
              <p>%</p>
            </div>
          </div>
          <div className="wallet">
            <button>Connect wallet & create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
