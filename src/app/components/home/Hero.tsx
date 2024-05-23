import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../../public/home-hero.jpeg";

export default function Hero() {
  return (
    <section className="relative flex flex-col sm:flex-row h-[450px] bg-black overflow-hidden items-center justify-center ">
      <Image
        src={heroImage}
        quality={100}
        placeholder="blur"
        className="brightness-75 object-cover"
        alt="inside the restaurant"
      />
      <div className="flex flex-col gap-2 items-center sm:items-start absolute sm:relative left-0 sm:left-auto backdrop-blur-sm bg-black/40 h-min w-full sm:w-max drop-shadow-2xl py-10 sm:p-10 rounded-md">
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-50">
          <span className="text-orange-400">Taste</span> Oasis
        </h1>
        <p className="font-thin text-white text-lg">
          A fusion dining experience
        </p>
        <Link href="/booking">
          <button className="btn bg-orange-400 text-gray-50 font-semibold p-4 rounded-md mt-8 hover:bg-orange-500">
            Book a Table
          </button>
        </Link>
      </div>
    </section>
  );
}
