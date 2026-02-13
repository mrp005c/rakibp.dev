"use client";
import React from "react";
import { experienceDetailstype as ExpProps } from "@/components/lib/types";
import Image from "next/image";
import { useTheme } from "next-themes";

const ExperienceDisplay = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExpProps) => {
  const { theme } = useTheme();
  const dateFormatOpt: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return (
    <div className="flex justify-between flex-col md:flex-row gap-3  p-8 rounded-sm box-border bg-gray border border-red/20 shadow-md shadow-blue reveal">
      {/* 1 */}
      <div className="relative max-md:order-1 md:w-1/4 reveal">
        <Image
          src={theme === "dark" ? (darkModeLogo ? darkModeLogo : logo) : logo}
          height={70}
          width={200}
          alt={logoAlt}
          className="h-20 w-49 max-w-full object-contain"
        />
      </div>
      {/* 2 */}
      <div className="flex-1 max-md:order-3 md:w-2/4 reveal">
        <h3 className="text-xl  font-semibold">{position}</h3>
        <div>
          {summary.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
      {/* 3 */}
      <div className="max-md:order-2 md:w-1/4 reveal">
        {new Intl.DateTimeFormat("en-US", dateFormatOpt).format(startDate)} -{" "}
        {currentlyWorkHere
          ? "Present"
          : endDate
            ? new Intl.DateTimeFormat("en-US", dateFormatOpt).format(endDate)
            : "NA"}
      </div>
    </div>
  );
};

export default ExperienceDisplay;
