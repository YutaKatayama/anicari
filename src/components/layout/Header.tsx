"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { COMPANY } from "@/constants/company";
import { BurgerButton } from "@/components/layout/BurgerButton";
import { SidebarNav } from "@/components/layout/SidebarNav";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openNav = useCallback(() => setIsOpen(true), []);
  const closeNav = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="wrapper-navbar">
      <div
        className={`main-nav fixed top-0 z-[998] h-[60px] w-full transition-all duration-400 ease-in-out ${
          isScrolled ? "bg-surface/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <Link href="/" className="logo absolute top-4 left-4 z-[999] sm:top-5 sm:left-5">
          <Image
            src="/logo.svg"
            alt={COMPANY.name}
            width={140}
            height={20}
            priority
            className={`h-auto w-full max-w-[120px] object-contain transition-all duration-300 sm:max-w-[140px] ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <div className="menu-toggle c-header_burger text-white">
          <BurgerButton
            isOpen={isOpen}
            onClick={openNav}
            variant={isScrolled ? "dark" : "light"}
          />
        </div>
      </div>

      <SidebarNav isOpen={isOpen} onClose={closeNav} />
    </div>
  );
}
