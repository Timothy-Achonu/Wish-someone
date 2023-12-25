import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import {Button} from '../index';

export function Navbar() {
  return (
    <nav className="bg-primary flex py-8 px-14 shadow-navbar-primary justify-between items-center">
      <Link href="/">
        <Image src={Logo} height={"75"} width={"67.55"} alt="logo" />
      </Link>
      <div className="flex gap-2 text-[1.375rem]">
        <Link href="/goals">Goals</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/about">About Us</Link>
      </div>
      <Button
        isLink={true}
        href="/about"
        className="border-[2.4px] border-black shadow-btn-primary"
      >
        Send Wishes
      </Button>
    </nav>
  );
}
