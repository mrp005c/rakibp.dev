"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav_Links } from "@/components/lib/data";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/general/theme-switcher";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Logo from "@/components/general/logo";
import Download_CV from "@/components/general/download-cv";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    Nav_Links.forEach((e) => {
      const element = document.getElementById(e.label.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-900 box-border border-gray/20 border bg-gray/50 backdrop-blur-xl h-17.5 `}
    >
      <div className="flex-between p-3 box-border max-w-7xl mx-auto h-full">
        <Logo />
        <nav className="flex-between hidden md:flex gap-3">
          <ul className=" text-black/80  flex-between gap-3">
            {Nav_Links.map((item, index) => (
              <li
                key={index}
                className={`hover:scale-110 hover:text-black transition-all px-2 py-0.5 ${active === item.label.toLowerCase() ? " bg-black/20 rounded-md text-black scale-105 " : ""}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex-center gap-2">
            <ThemeSwitcher />
            <Download_CV />
          </div>
        </nav>

        {/* drawer menu */}
        <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
          <DrawerTrigger asChild className="flex md:hidden">
            <Button size={"icon"} variant={"ghost"}>
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="p-2 z-9999">
            <div className="flex-between">
              <DrawerTitle>
                <Logo />
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <X />
                </Button>
              </DrawerClose>
            </div>
            <div className="no-scrollbar overflow-y-auto ">
              <ul className=" flex-col w-full flex text-black/80  gap-3 border border-gray/80 rounded-md py-2">
                {Nav_Links.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray/40 rounded-sm box-border px-2 w-full"
                  >
                    <Link
                      href={item.href}
                      className="block w-full h-full"
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 300);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="">
                <div className="flex-between">
                  <span className="text-sm text-black/30">Switch Theme</span>
                  <ThemeSwitcher />
                </div>
                <Download_CV />
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
