import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./Component/Header/Header";
import { Hero } from "./Component/Hero/Hero";
import { Footer } from "./Component/Footer/Footer";
// import { View } from "./Component/ViewPort/View";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />
      {/* <View /> */}
      <Footer />
    </div>
  );
}
