"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-3">
      <Image
        src="/logo-128x128.png"
        width={128}
        height={128}
        className="block size-12"
        alt="taste oasis logo"
      />
      <nav>
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
              className={
                pathname === "/about" ? "nav__link--active" : "nav__link"
              }>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={
                pathname === "/menu" ? "nav__link--active" : "nav__link"
              }>
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
      </nav>
    </header>
  );
}
