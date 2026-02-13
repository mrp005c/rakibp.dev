import { type StaticImageData } from "next/image";

export type techDetailstype = {
  label: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  url: string;
};

export type experienceDetailstype = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type projectstype = {
  name: string;
  description: string;
  url: string;
  githubLink: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type testimonialstype = {
  personName: string;
  personAvatar: string | StaticImageData;
  testimonial: string;
  title: string;
};
