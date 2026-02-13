"use client";
import React from "react";
import { Tags } from "@/components/general/tags";
import { TestimonialsDetails } from "../lib/data";
import TestimonialsDisplay from "../data-display/TestimonialsDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-violet-50 dark:bg-[#28285b] pt-16 py-3"
    >
      <Tags>Testimonials</Tags>
      <div className=" max-w-7xl mx-auto px-3 py-4">
        <div className="text-center">
          Nice things people have said about me:
        </div>

        <div className="py-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ enabled: true }}
            freeMode={true}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={2000}
            className="flex flex-center justify-center flex-wrap content-center gap-4 "
          >
            {TestimonialsDetails.map((testimonal, index) => (
              <SwiperSlide key={index} >
                <TestimonialsDisplay {...testimonal} />
              </SwiperSlide>
            ))}
          </Swiper>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex assumenda temporibus accusantium quia excepturi illo animi voluptate. Sequi eius fugiat accusantium adipisci corporis quae nostrum? Nobis, perferendis. Accusamus illo alias quod culpa.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
