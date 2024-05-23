"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function NavMobile() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen((prev) => !prev);
  };

  const CloseBtn = ({ classes }: { classes: string }) => {
    return (
      <button
        aria-label="close mobile navigation"
        onClick={toggleMenu}
        className={classes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  const OpenBtn = ({ classes }: { classes: string }) => {
    return (
      <button
        aria-label="open mobile navigation"
        onClick={toggleMenu}
        className={classes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  return (
    <div>
      <OpenBtn classes="mr-3" />
      <div
        className={`fixed top-0 right-0 h-full bg-gray-50 z-50 transform w-80 drop-shadow-2xl ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}>
        <CloseBtn classes="my-6 ml-8" />
        <hr className="border-t-2" />
        <ul className="flex flex-col gap-4 py-6 px-8 font-semibold">
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className={pathname === "/" ? "nav__link--active" : "nav__link"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={
                pathname === "/about" ? "nav__link--active" : "nav__link"
              }>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              onClick={toggleMenu}
              className={
                pathname === "/menu" ? "nav__link--active" : "nav__link"
              }>
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              onClick={toggleMenu}
              className={
                pathname === "/booking" ? "nav__link--active" : "nav__link"
              }>
              Booking
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={
                pathname === "/contact" ? "nav__link--active" : "nav__link"
              }>
              Contact
            </Link>
          </li>
        </ul>
        <button className="mx-8 w-[calc(100%-4rem)] bg-orange-200 rounded-md p-2 hover:bg-orange-300 transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
}
