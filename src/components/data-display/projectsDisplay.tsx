import React from "react";
import { projectstype as ProjectPros } from "@/components/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Bubble } from "../general/tags";
import { MdOpenInNew } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
const ProjectsDisplay = ({
  name,
  description,
  url,
  githubLink,
  previewImage,
  technologies,
  index,
}: ProjectPros & { index: number }) => {
  return (
    <div
      className={`flex-between reveal items-stretch max-md:flex-col rounded-md border border-red/30 my-4 shadow-md shadow-blue/50 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image  */}
      <div className="md:w-1/2 flex-center p-8 box-border rounded-md bg-violet-100 dark:bg-[#344c5c] reveal">
        <Link
          target="_blank"
          href={url}
          className="w-150 max-w-full h-90 relative block "
        >
          <Image
            src={previewImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={name}
            className="object-contain rounded-md shadow-lg shadow-green/40 hover:scale-105 duration-300 transition-all"
          />
        </Link>
      </div>

      {/* text  */}
      <div className="md:w-1/2 bg-violet-50 dark:bg-[#2d3c46] rounded-md p-8 space-y-5 reveal">
        <h3 className="text-2xl font-bold reveal">{name}</h3>
        <p className="reveal">{description}</p>
        <div className="w-full flex flex-wrap items-stretch text-balance justify-between gap-2 reveal">
          {technologies.map((item, index) => (
            <Bubble key={index}>{item}</Bubble>
          ))}
        </div>
        <div className=" flex gap-5 flex-wrap reveal">
          <Link
            target="_blank"
            href={url}
            className="text-lg hover:scale-110 transition-all flex-center gap-2 "
          >
            <MdOpenInNew />
            <span>Live Site</span>
          </Link>
          <Link
            target="_blank"
            href={githubLink}
            className="text-lg hover:scale-110 transition-all flex-center gap-2"
          >
            <FaLink />
            <span>Github Link</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
