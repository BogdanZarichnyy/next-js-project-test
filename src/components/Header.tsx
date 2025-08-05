import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="order-b border-white/10 px-6 px-4 flex items-center justify-between bg-black">
      <Link
        href="/"
        className="flex items-centergap-3"
      >
        <Image 
          src="/vercel.svg"
          alt="X logo"
          width={28}
          height={28}
          priority
        />
      </Link>

      <Menu />
    </header>
  );
}