import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import HomeAbout from "./components/HomeAbout";
import ActionBanner from "./components/ActionBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <HomeAbout />
      <ActionBanner />
    </>
  );
}
