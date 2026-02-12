import React from "react";
import { Tags } from "@/components/general/tags";
import { TestimonialsDetails } from "../lib/data";
import TestimonialsDisplay from "../data-display/TestimonialsDisplay";

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

        <div className="flex justify-center flex-wrap content-center gap-4">
          {TestimonialsDetails.map((testimonal, index) => (
            <TestimonialsDisplay key={index} {...testimonal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
