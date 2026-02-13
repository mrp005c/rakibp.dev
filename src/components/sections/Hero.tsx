"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TypeAnimation } from "react-type-animation";
import Typography from "@/components/general/typography";
import Social_links from "@/components/data-display/Social-links";
import { SelfInfo } from "@/components/lib/data";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            once: false,
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <section className="bg-secgray min-h-[90vh] flex-center md:py-12" id="home">
      <div className=" max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between py-10 px-3 items-center">
        {/* left side */}
        <div className="flex-1 p-2 ">
          <h1 className="text-[48px] max-sm:text-[36px] font-bold reveal">
            Hi, I&apos;m {SelfInfo.lastName} 👋
          </h1>
          <h3 className="text-2xl font-semibold reveal">
            I&apos;m a&nbsp;
            <TypeAnimation
              sequence={SelfInfo.label.flatMap((item) => [item, 1000])}
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="reveal">{SelfInfo.summary}</p>

          <div className="links py-4 font-mono reveal">
            <div className="flex items-center ">
              <MapPin className="animate-bounce" />
              <Typography>{SelfInfo.address}</Typography>
            </div>
            {SelfInfo.availableForNewProject ? (
              <div className="flex items-center ">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography>Available for new projects</Typography>
              </div>
            ) : (
              <div className="flex items-center ">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                  </span>
                </div>
                <Typography>Working in a project</Typography>
              </div>
            )}
          </div>
          <Social_links />
        </div>

        {/* right side */}
        <div className=" flex-center reveal">
          <div className="relative h-87.5 w-72.5">
            <div className="absolute rounded-sm top-8 left-8 h-75 w-70 bg-gray-300 dark:bg-gray-500 reveal"></div>
            <div className="absolute rounded-sm top-0 left-0 border-16 box-border border-secgray  h-75 w-70 reveal">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="overflow-hidden rounded-sm"
                src={SelfInfo.avatar}
                alt={SelfInfo.firstName.concat(SelfInfo.lastName)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
