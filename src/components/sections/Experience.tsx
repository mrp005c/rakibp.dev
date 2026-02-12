import React from "react";
import { Tags } from "@/components/general/tags";
import { ExperienceDetails } from "../lib/data";
import Image from "next/image";
import ExperienceDisplay from "../data-display/experienceDisplay";

const Experience = () => {
 

  return (
    <section id="skills" className="bg-slate-100 dark:bg-slate-700 pt-16 py-3">
      <Tags>Experience</Tags>
      <div className=" max-w-7xl mx-auto px-3 py-4 space-y-3">
        {ExperienceDetails.map((item, index) => (
         <ExperienceDisplay key={index} {...item}/>
        ))}
      </div>
    </section>
  );
};

export default Experience;
