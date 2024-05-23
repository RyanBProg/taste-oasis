import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex gap-12 items-center justify-center border-t-2 py-4 text-gray-500">
      <Image
        src="/logo-128x128.png"
        width={128}
        height={128}
        className="block size-12"
        alt="taste oasis logo"
      />
      <div className="flex flex-col gap-1">
        <Link href="/" className="hover:text-black">
          Privacy policy
        </Link>
        <Link href="/" className="hover:text-black">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
