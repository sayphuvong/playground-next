import { Image } from "@mantine/core";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="h-[60px] flex gap-3 items-center px-10">
        <div className="h-full flex items-center">
          <Link href="/">
            <Image h={48} src="logo-brand.png" alt="" />
          </Link>
        </div>
        <div className="flex-1" />
        <nav className="hover:text-blue-500 hover:underline">
          <Link href="/">Home</Link>
        </nav>
        <nav className="hover:text-blue-500 hover:underline">
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
    </>
  );
}
