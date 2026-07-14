"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { COMPANY } from "@/constants/company";
import {
  EXTERNAL_NAV_LINKS,
  MAIN_NAV_LINKS,
} from "@/constants/navigation";

type SidebarNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SidebarNav({ isOpen, onClose }: SidebarNavProps) {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (sidebarRef.current?.contains(target)) return;
      if ((target as Element).closest?.(".main-nav")) return;

      onClose();
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <nav
      id="sidebar-wrapper"
      ref={sidebarRef}
      aria-hidden={!isOpen}
      className={`fixed top-0 right-0 z-[999] h-full w-[375px] max-w-full bg-surface shadow-[0_0_10px_0_rgba(168,148,148,0.24)] transition-all duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } max-md:w-screen`}
      onClick={(event) => event.stopPropagation()}
    >
      <Link href="/" className="header-logo absolute top-5 left-5" onClick={onClose}>
        <Image
          src="/logo.svg"
          alt={COMPANY.name}
          width={140}
          height={13}
          className="h-auto w-full max-w-[140px] object-contain"
        />
      </Link>

      <button
        id="nav-close"
        type="button"
        aria-label="メニューを閉じる"
        onClick={onClose}
        className="close-icon absolute top-5 right-5 h-[21px] w-[21px] cursor-pointer bg-[url('/icons/close.svg')] bg-no-repeat hover:opacity-60"
      />

      <div className="menu-home-menu-container relative mt-20 flex h-full w-full">
        <ul id="main-menu" className="sidebar-nav m-0 w-full list-none px-5 pl-[30px] pb-10">
          {MAIN_NAV_LINKS.map((link, index) => (
            <li key={link.href} className="menu__item">
              <Link
                href={link.href}
                className={`menu__link block text-[30px] leading-[54px] font-bold tracking-[3.6px] text-foreground uppercase no-underline ${
                  isOpen ? "animate-fade-in-right" : ""
                }`}
                style={{ animationDelay: isOpen ? `${index * 0.05}s` : undefined }}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="menu__item outer-link">
            <div
              className={`outer-link__box mt-[30px] flex gap-8 ${
                isOpen ? "animate-fade-in-right" : ""
              }`}
              style={{ animationDelay: isOpen ? "0.4s" : undefined }}
            >
              {EXTERNAL_NAV_LINKS.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-1">
                  {column.map((link) => {
                    const className =
                      "inline-flex items-center text-[13px] leading-[22px] font-bold tracking-[1.6px] text-foreground no-underline hover:no-underline hover:text-brand";
                    const content = (
                      <>
                        {link.label}
                        {link.external && (
                          <Image
                            src="/icons/go-out.svg"
                            alt=""
                            width={12}
                            height={12}
                            aria-hidden
                            className="-mt-[5px] ml-[5px]"
                          />
                        )}
                      </>
                    );

                    return link.external ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={className}
                        onClick={onClose}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
