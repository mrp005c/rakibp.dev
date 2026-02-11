"use client";
import React from "react";
import { Tags } from "@/components/general/tags";
import Image from "next/image";
import { TechDetails } from "../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-200 dark:bg-slate-600 pt-16 py-3">
      <Tags>Skills</Tags>
      <div className=" max-w-7xl mx-auto px-3 py-4">
        <div className="text-center">
          The skills, tools and technologies I am really good at:
        </div>
        <div className=" "></div>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
          pagination
          navigation
          spaceBetween={10}
          autoplay={{delay: 0,
            disableOnInteraction: false
          }}
          speed={3000}
          loop
          breakpoints={{
            320:{
              slidesPerView: 3,
            },
            640:{
              slidesPerView: 4,
            },
            768:{
              slidesPerView: 5,
            },
            1024:{
              slidesPerView: 6,
            },
          }}
          className="flex flex-wrap items-center "
        >
          {TechDetails.map((item, index) => (
            <SwiperSlide key={index} className=" relative">
              <Image
                height={100}
                width={130}
                className={`object-contain h-25 w-[130px]`}
                src={item.logo}
                alt={item.label}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
