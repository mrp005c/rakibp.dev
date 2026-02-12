"use client";
import React from "react";
import { Tags } from "@/components/general/tags";
import Image from "next/image";
import { TechDetails } from "../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-200 dark:bg-slate-600 pt-16 py-3">
      <Tags>Skills</Tags>
      <div className=" max-w-screen mx-auto px-3 py-4">
        <div className="text-center">
          The skills, tools and technologies I am really good at:
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination, FreeMode]}
          pagination
          navigation
          freeMode={{enabled: true}}
          spaceBetween={30}
          autoplay={{ delay: 0, disableOnInteraction: false , pauseOnMouseEnter: true,}}
          speed={1000}
          loop
          breakpoints={{
            220: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1224: {
              slidesPerView: 7,
            },
            1524: {
              slidesPerView: 8,
            },
          }}
          className="flex flex-wrap items-center px-2 pt-8 mx-2 my-5 rounded-sm overflow-visible"
        >
          {TechDetails.map((item, index) => (
            <SwiperSlide key={index} className=" relative ">
              <Link href={item.url} target="_blank" className="flex-center pt-4 flex-col gap-2 hover:scale-110  transition-all">
                <Image
                  height={100}
                  width={130}
                  className={`object-contain h-25 w-32.5 `}
                  src={item.logo}
                  alt={item.label}
                />
                <div className="text-lg ">{item.label}</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
