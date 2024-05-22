import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ActionBanner() {
  return (
    <section className="flex justify-center items-center bg-gradient-to-b from-white via-orange-400 to-red-500 py-8 px-4">
      <div className="bg-white bg-opacity-15 rounded-md flex flex-col md:flex-row items-center">
        <Image
          src="/poke-banner.jpeg"
          width={7517}
          height={2947}
          alt="chef cooking a meal"
          className="rounded-t-md md:rounded-md w-full md:w-[400px] h-40 md:h-full md:ml-4 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-xl sm:text-2xl mb-1">
            Need More Information?
          </h2>
          <p className="max-w-96 font-light text-sm sm:text-md">
            Have questions or need assistance? Our team is here to help. Visit
            our contact page for more information on how to reach us.
          </p>
          <button className="bg-orange-400 text-gray-50 font-semibold p-4 rounded-md mt-6 md:mt-2 hover:bg-orange-500">
            <Link href="/contact">Get in Touch</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
