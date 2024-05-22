import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Taste Oasis",
  description:
    "Discover the story behind Taste Oasis. Learn about our culinary journey, our passion for creating unforgettable dining experiences, and our commitment to using the finest ingredients. Join us in our culinary oasis!",
};

export default function About() {
  return (
    <div className="px-4 sm:text-center mt-14 mb-20">
      <h1 className="text-6xl sm:text-7xl font-bold text-black">
        <span className="text-orange-400">Our</span> Story
      </h1>
      <p className="text-gray-700 py-6 sm:max-w-[550px] sm:mx-auto">
        Taste Oasis was born out of a passion for bringing the vibrant and
        diverse flavors of Asia to our community. Founded by Steven, a culinary
        enthusiast with a deep love for Asian cuisine, Taste Oasis is more than
        just a restaurant – it's a journey through the rich culinary traditions
        of Asia.
      </p>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row mt-4 sm:mt-10">
        <Image
          src="/chef-steven.jpeg"
          height={960}
          width={640}
          alt="portait of chef steven cooking"
          className="rounded-md h-[480px] w-[320px]"
        />
        <div className="flex flex-col gap-2 bg-orange-300 bg-opacity-70 p-5 rounded-md max-w-[500px]">
          <h2 className="text-2xl font-semibold">Meet Steven</h2>
          <p className="text-gray-800 text-left">
            Taste Oasis was born out of a passion for bringing the vibrant and
            diverse flavors of Asia to our community. Founded by Steven, a
            culinary enthusiast with a deep love for Asian cuisine, Taste Oasis
            is more than just a restaurant – it's a journey through the rich
            culinary traditions of Asia.
          </p>
        </div>
      </div>
    </div>
  );
}
