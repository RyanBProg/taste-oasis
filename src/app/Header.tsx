"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavDesktop from "./components/NavDesktop";
import NavMobile from "./components/NavMobile";

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
        <div className="hidden sm:block">
          <NavDesktop />
        </div>
        <div className="sm:hidden">
          <NavMobile />
        </div>
      </nav>
    </header>
  );
}
