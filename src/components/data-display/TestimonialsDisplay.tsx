import React from "react";
import { testimonialstype as TestiProps } from "@/components/lib/types";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
const TestimonialsDisplay = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestiProps) => {
  return (
    <div className="mt-8 bg-gray/80 mx-auto relative rounded-md p-8 border border-red/40  max-w-80 shadow-md shadow-blue/40 text-sm">
      
      <div className="flex-center flex-col">
        <Image
          src={personAvatar}
          alt={personName}
          height={80}
          width={80}
          className="h-20 w-20 object-cover rounded-full"
        />
        <span className="text-base font-semibold">{personName}</span>
        <span className="text-gray-400 text-xs">{title}</span>
      </div>

      <div>
        <p>{testimonial}</p>
      </div>
      <div className=" text-2xl gap-3 p-4 flex-center w-fit mx-auto absolute z-50 rounded-full bg-red/50 py-8 -top-8 -right-12">
        <FaQuoteLeft/>
        <FaQuoteRight/>
      </div>
    </div>
  );
};

export default TestimonialsDisplay;
