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
      className={`fixed top-0 right-0 z-[999] h-full w-full max-w-[375px] bg-surface shadow-[0_0_10px_0_rgba(168,148,148,0.24)] transition-all duration-400 ease-in-out sm:w-[375px] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(event) => event.stopPropagation()}
    >
      <Link href="/" className="header-logo absolute top-4 left-4 sm:top-5 sm:left-5" onClick={onClose}>
        <Image
          src="/logo.svg"
          alt={COMPANY.name}
          width={140}
          height={13}
          className="h-auto w-full max-w-[120px] object-contain sm:max-w-[140px]"
        />
      </Link>

      <button
        id="nav-close"
        type="button"
        aria-label="メニューを閉じる"
        onClick={onClose}
        className="close-icon absolute top-4 right-4 h-[21px] w-[21px] cursor-pointer bg-[url('/icons/close.svg')] bg-no-repeat hover:opacity-60 sm:top-5 sm:right-5"
      />

      <div className="menu-home-menu-container relative mt-16 flex h-[calc(100%-4rem)] w-full sm:mt-20">
        <ul
          id="main-menu"
          className="sidebar-nav m-0 w-full list-none overflow-y-auto px-4 pb-10 pl-6 sm:px-5 sm:pl-[30px]"
        >
          {MAIN_NAV_LINKS.map((link, index) => (
            <li key={link.href} className="menu__item">
              <Link
                href={link.href}
                className={`menu__link block text-[clamp(1.25rem,5vw,1.875rem)] leading-[1.6] font-bold tracking-[clamp(1px,0.8vw,3.6px)] text-foreground uppercase no-underline sm:leading-[54px] ${
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
              className={`outer-link__box mt-6 flex flex-col gap-4 sm:mt-[30px] sm:flex-row sm:gap-8 ${
                isOpen ? "animate-fade-in-right" : ""
              }`}
              style={{ animationDelay: isOpen ? "0.4s" : undefined }}
            >
              {EXTERNAL_NAV_LINKS.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-1">
                  {column.map((link) => {
                    const className =
                      "inline-flex items-center text-xs leading-[22px] font-bold tracking-[1.4px] text-foreground no-underline hover:no-underline hover:text-brand sm:text-[13px] sm:tracking-[1.6px]";
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
