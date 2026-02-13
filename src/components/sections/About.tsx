import React from "react";
import { Tags } from "@/components/general/tags";
import Image from "next/image";
import { SelfInfo } from "../lib/data";

const About = () => {
  return (
    <section id="about" className="bg-violet-100 dark:bg-[#582a5b] pt-16 py-3">
      <Tags>About Me</Tags>
      <div className=" max-w-7xl mx-auto flex flex-col-reverse sm:flex-row-reverse justify-between py-10 px-3 items-center">
        {/* left side */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-[32px] font-bold">
            Curious about me? Here you have it:
          </h1>

          {SelfInfo.about.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div>
            Finally, some quick bits about me.
            <ul className="list-disc list-inside grid grid-cols-2">
              {SelfInfo.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <p>
            {
              "One last thing, I\'m available for freelance work, so feel free to reach out and say hello! I promise I don\'t bite 😉"
            }
          </p>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex-center">
          <div className="relative h-87.5 w-72.5">
            <div className="absolute rounded-sm top-8 -left-8 h-75 w-70 bg-gray-300 dark:bg-gray-500"></div>
            <div className="absolute rounded-sm top-0 left-0 border-16 box-border border-violet-100 dark:border-[#582a5b] h-75 w-70 ">
              <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="overflow-hidden rounded-sm"
                src={SelfInfo.secAvatar}
                alt="rakib"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
