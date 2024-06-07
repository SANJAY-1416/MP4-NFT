import React from "react";
import "./Preview.css";

export const Preview = () => {
  return (
    <div>
      <div className="top-preview">
        <p>Preview</p>
        <div className="reel">
          <div className="preview-img">
            <img src={"/previewimg.svg"} />
          </div>
          <div className="once">
            <p>Once in a blue neon</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              cursus id vel sed vitae commodo. Suspendisse amet, consequat
              egestas in cum suspendisse sit. Ultrices venenatis tristique amet
              fringilla. Nunc, cursus erat etiam nibh lacus velit in.
            </p>
            <h3>6.59 ETH</h3>
          </div>
        </div>

        <button>Continue</button>
      </div>
    </div>
  );
};
