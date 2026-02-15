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
      <div className=" max-w-7xl mx-auto px-3 py-4 space-y-4">
        <div className="text-center">
          The skills, tools and technologies I am really good at:
        </div>
        <div>
          {Object.entries(TechDetails).map(([category, items], index) => (
            <div key={index}>
              <h2 className=" reveal text-xl font-semibold text-center w-fit  rounded-full bg-green/20 box-border px-4 py-1">
                {category}
              </h2>
              <div className="flex flex-wrap items-center px-2 pt-8 mx-2 my-5 rounded-sm overflow-visible reveal">
                <Swiper
                  modules={[Autoplay, Pagination, FreeMode]}
                  pagination
                  navigation
                  freeMode={{ enabled: true }}
                  spaceBetween={30}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  speed={2000}
                  loop
                  centeredSlides
                  breakpoints={{
                    220: {
                      slidesPerView: 2,
                    },
                    320: {
                      slidesPerView: 3,
                    },
                    860: {
                      slidesPerView: items.length > 6 ? 4 : 3,
                    },
                  }}
                >
                  {items.map((item, index) => (
                    <SwiperSlide key={index} className=" relative ">
                      <Link
                        href={item.url}
                        target="_blank"
                        className="flex-center pt-4 flex-col gap-2 hover:scale-110  transition-all  "
                      >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
