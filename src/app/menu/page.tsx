import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Menu | Taste Oasis",
  description:
    "Explore the delectable dishes offered at Taste Oasis. From gourmet starters to sumptuous desserts, our menu is crafted to satisfy every palate. Discover your new favorite dish today!",
};

export default function Menu() {
  return (
    <>
      <Image
        src="/chef-banner.jpg"
        height={1178}
        width={4280}
        alt="chef preparing food"
        className="max-h-32 sm:max-h-40 object-cover brightness-75"
      />
      <div className="px-4 sm:text-center mt-14 mb-20">
        <h1 className="text-6xl sm:text-7xl font-bold text-black">
          <span className="text-orange-400">Explore</span> Our Menu
        </h1>
        <p className="text-gray-700 py-6 sm:max-w-[550px] sm:mx-auto">
          Welcome to Taste Oasis, where we invite you to discover the vibrant
          and diverse flavors of Asia. Our menu is a carefully curated
          collection of dishes, each crafted with fresh ingredients and
          masterful techniques to provide you with an{" "}
          <em className="font-medium">unforgettable</em> dining experience.
        </p>
        <a
          href="/taste-oasis-menu.pdf"
          download
          className="block max-w-max mx-auto bg-orange-400 text-gray-50 font-semibold p-4 rounded-md hover:bg-orange-500">
          Download Our Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline ml-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
