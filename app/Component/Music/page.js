"use client";
import React, { useState } from "react";
import "./Music.css";
import Link from "next/link";

export default function page() {
  const [data, setData] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleClickUpload = () => {
    // Simulate data upload (replace with your actual data fetching logic)
    setData();
    setIsUploaded(true);
  };

  return (
    <div>
      <div className="create-music">
        <p>Create Music collectible</p>
      </div>
      <div className="top-music">
        <div>
          <div className="overall-upload">
            <div>
              {isUploaded ? null : (
                <div className="upload-work">
                  <div onClick={handleClickUpload}>
                    <img src={"/upload.svg"} />
                  </div>
                  <div className="upload-work-drop">
                    <p>
                      Drop or <span className="work-here"> Upload</span> your
                      work here
                    </p>
                  </div>
                  <div className="upload-image-format">
                    <p>Supports MP4, JPG, GIF, JPEG & PNG format</p>
                  </div>
                </div>
              )}
              <div>
                {isUploaded ? (
                  <div className="upload-work">
                    <img src="/afterupload.svg" />
                    <p>IMG 0012532 uploading</p>
                    <p>4.6/9.0MB Completed</p>
                    <img src="/longline.svg" />
                    <div className="pau-wro">
                      <img src="/pause.svg" />
                      <img src="/wrong.svg" />
                    </div>
                  </div>
                ) : (
                  <p>{null}</p>
                )}
              </div>
            </div>

            <div className="toggle">
              <div className="toggle-grid">
                <p>Put on sale</p>
                <p>You’ll receive bids on this item</p>
              </div>
              <div className="toggle-img">
                <img src={"/toggle.svg"} />
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
              <Link href="/Component/Preview">
                <div className="wallet">
                  <button>Connect wallet & create</button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="top-preview">
          <div>
            <p>Preview</p>
          </div>
          <div className="reel">
            <div className="preview-img">
              <img src={"/previewimg.svg"} />
            </div>
            <div className="once">
              <p>Once in a blue neon</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                cursus id vel sed vitae commodo. Suspendisse amet, consequat
                egestas in cum suspendisse sit. Ultrices venenatis tristique
                amet fringilla. Nunc, cursus erat etiam nibh lacus velit in.
              </p>
              <h4>6.59 ETH</h4>
            </div>
          </div>
          <Link href="/Component/Preview">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
