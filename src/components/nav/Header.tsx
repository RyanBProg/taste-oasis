"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import logo from "../../../public/logo-128x128.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center p-3">
      <Image src={logo} className="block size-12" alt="taste oasis logo" />
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
