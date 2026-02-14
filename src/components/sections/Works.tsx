import React from "react";
import { Tags } from "@/components/general/tags";
import ProjectsDisplay from "../data-display/projectsDisplay";
import { Projects } from "../lib/data";

const Works = () => {
  return (
    <section id="works" className="bg-violet-100 dark:bg-[#1b1b40] pt-16 py-3">
      <Tags>Works</Tags>
      <div className=" max-w-7xl mx-auto px-3 py-4">
        <div className="text-center  reveal">
          Some of the noteworthy projects I have built:
        </div>
        <div>
          {Projects.map((project, index) => (
            <ProjectsDisplay key={index} {...project} index={index}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
