import React from "react";
import "./MetaWallet.css";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="overlay">
        <div className="top-meta">
          <div className="meta-mask">
            <img src={"/fox.svg"} />
            <p>Connect your MetaMask Wallet to continue</p>
            <Link href="/Component/Manwithlove">
              <button>Connect Wallet</button>
            </Link>
            <button>close</button>
          </div>
        </div>
      </div>
    </>
  );
}
