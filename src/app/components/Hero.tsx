import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col sm:flex-row h-[450px] bg-black overflow-hidden items-center justify-center ">
      <Image
        src="/home-hero.png"
        width={640}
        height={853}
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
        <button className="bg-orange-400 text-gray-50 font-semibold p-4 rounded-md mt-8 hover:bg-orange-500">
          <Link href="/booking">Book a Table</Link>
        </button>
      </div>
    </section>
  );
}
