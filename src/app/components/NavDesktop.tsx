"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavDesktop() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 font-semibold">
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "nav__link--active" : "nav__link"}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={pathname === "/about" ? "nav__link--active" : "nav__link"}>
          About
        </Link>
      </li>
      <li>
        <Link
          href="/menu"
          className={pathname === "/menu" ? "nav__link--active" : "nav__link"}>
          Menu
        </Link>
      </li>
      <li>
        <Link
          href="/booking"
          className={
            pathname === "/booking" ? "nav__link--active" : "nav__link"
          }>
          Booking
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={
            pathname === "/contact" ? "nav__link--active" : "nav__link"
          }>
          Contact
        </Link>
      </li>
    </ul>
  );
}
