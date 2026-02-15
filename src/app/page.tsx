"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Works from "@/components/sections/Works";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [isScrollPosition, setIsScrollPosition] = useState<boolean>(false);

  useEffect(() => {
    const scrolling = () => {
      setIsScrollPosition(window.scrollY > 500);
    };

    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            once: false,
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);
  useEffect(() => {
    gsap.utils.toArray(".reveal-late").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Testimonials />
      <Contact />{" "}
      {isScrollPosition && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 text-xl border border-green/50 cursor-pointer  rounded-md bg-red-300 fixed bottom-3 right-3"
        >
          <BiUpArrowAlt className="animate-bounce" />
        </button>
      )}
    </>
  );
}
