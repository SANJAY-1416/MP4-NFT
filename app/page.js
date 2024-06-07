import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./Component/Header/Header";
// import { Hero } from "./Component/Hero/Hero";
import { Footer } from "./Component/Footer/Footer";
// import { Bid } from "./Component/Bid-details/Bid";
// import { ManPage } from "./Component/Manwithlove/ManPage";
// import { Auction } from "./Component/Auction/Auction";
// import { PageNotFound } from "./Component/PageNotFound/PageNotFound";
// import { NotYou } from "./Component/NotYou/NotYou";
// import { Terms } from "./Component/Terms/Terms";
// import { MetaWallet } from "./Component/Metamask/MetaWallet";
// import { Preview } from "./Component/Preview/Preview";
import { Music } from "./Component/Music/Music";
// import { View } from "./Component/ViewPort/View";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Terms /> */}
      {/* <NotYou /> */}
      {/* <PageNotFound /> */}
      {/* <Auction /> */}
      {/* <ManPage /> */}
      {/* <Bid /> */}
      {/* <MetaWallet /> */}
      {/* <Hero /> */}
      <Music />
      {/* <View /> */}
      {/* <Preview /> */}

      <Footer />
    </div>
  );
}
