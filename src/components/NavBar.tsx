'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-3 px-4 border-b-2 bg-white transition-transform duration-300 ${
        hidden ? "-translate-y-full hover:translate-y-0" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <Image src="/logo.svg" alt="Logo" width={180} height={90} />
        <div className="flex-1 flex justify-center gap-20 text-sm">
          <Link href="/" className="transform transition hover:text-[#567968] hover:-translate-y-0.5">
            Home
          </Link>
          <Link href="/destination" className="transform transition hover:text-[#567968] hover:-translate-y-0.5">
            Explore Destination
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('This feature is still in progress. Please check back soon!');
            }}
            className="transform transition hover:text-[#567968] hover:-translate-y-0.5"
          >
            Add Packages
          </Link>

        </div>
        <Link href="/profile">
          <Button className="rounded-full font-semibold px-5 bg-[#3E6652] text-white cursor-pointer hover:-translate-y-0.5 transform transition">
            Profile
          </Button>
        </Link>
      </div>
    </nav>
  );
};
