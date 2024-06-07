import React from "react";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found">
        <img src={"/pnfimg.svg"} />
        <p>Page Not Found</p>
        <p>
          Oops! We can’t seem to find the page you are looking for. Try going to
          the previous page or to the
          <span className="resource"> Resources</span> for more infomation
        </p>
        <div className="go">
          <button>Go to previous page</button>
        </div>
      </div>
    </>
  );
};
