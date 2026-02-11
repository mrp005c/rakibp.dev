"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Typography from "@/components/general/typography";
import Social_links from "@/components/data-display/Social-links";

const Hero = () => {
  return (
    <section className="bg-secgray">
      <div className=" max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-between py-10 px-3 items-center">
        {/* left side */}
        <div className="flex-1">
          <h1 className="text-[48px] font-bold">Hi, I&apos;m Rakib 👋</h1>
          <h3 className="text-2xl font-semibold">
            I&apos;m a&nbsp;
            {/* <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
                "Full Stack Developer",
                1000,
                "JavaScript Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            /> */}
          </h3>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 6 months, I still love it as if it was something new.
          </p>

          <div className="links py-4 font-mono">
            <div className="flex items-center">
              <MapPin />
              <Typography>Natore, Bangladesh</Typography>
            </div>
            <div className="flex items-center ">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <Social_links/>
        </div>

        {/* right side */}
        <div className="min-w-[400px] flex-center">
          <div className="relative h-[350px] w-[290px]">
            <div className="absolute rounded-sm top-8 left-8 h-[300px] w-[280px] bg-gray-300 dark:bg-gray-500"></div>
            <div className="absolute rounded-sm top-0 left-0 border-16 box-border border-secgray  h-[300px] w-[280px] ">
              <Image
                fill
                className="overflow-hidden rounded-sm"
                src="/images/rakib/me.jpg"
                alt="rakib"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
