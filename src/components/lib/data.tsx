import { FaFacebook, FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  experienceDetailstype,
  projectstype,
  techDetailstype,
  testimonialstype,
} from "./types";

// logos
import LogoJavascript from "@/app/images/logos/icon-javascript.svg";
import LogoTypescript from "@/app/images/logos/icon-typescript.svg";
import LogoReact from "@/app/images/logos/icon-react.svg";
import LogoNextjs from "@/app/images/logos/icon-nextjs.svg";
import LogoNodejs from "@/app/images/logos/icon-nodejs.svg";
import LogoExpress from "@/app/images/logos/icon-express.svg";
import LogoExpressLight from "@/app/images/logos/icon-express-light.svg";
import LogoPostgreSQL from "@/app/images/logos/icon-postgresql.svg";
import LogoMongoDB from "@/app/images/logos/icon-mongodb.svg";
import LogoTailwindcss from "@/app/images/logos/icon-tailwindcss.svg";
import LogoGit from "@/app/images/logos/icon-git.svg";
import LogoUpwork from "@/app/images/logos/logo-upwork.svg";
import LogoGreenApex from "@/app/images/logos/logo-greenapex.svg";
import LogoDotnpixel from "@/app/images/logos/logo-dotnpixel.svg";
import PrevNextEcom from "@/app/images/site/nextecom-preview.png";

import AvatarKrisztian from "@/app/images/avatar-krisztian.png";
import AvatarEugen from "@/app/images/avatar-eugen.png";
import AvatarDummy from "@/app/images/avatar-dummy.svg";

export const Nav_Links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Social_Links = [
  {
    site: "Github",
    icon: FaGithub,
    href: "https://github.com/mrp005c",
  },
  {
    site: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mrp-rakib-dev/",
  },
  {
    site: "Figma",
    icon: FaFigma,
    href: "https://www.figma.com/@mdrakibpatoyari",
  },
  {
    site: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/md.rakib.patoyari.2024/",
  },
];

export const TechDetails: techDetailstype[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const ExperienceDetails: experienceDetailstype[] = [
  {
    logo: LogoUpwork,
    logoAlt: "upwork logo",
    startDate: new Date(2025, 10),
    position: "Independent Freelancer",
    currentlyWorkHere: true,
    summary: [
      "I have been working here since 2025",
      "I have been working here since 2025",
      "I have been working here since 2025",
    ],
  },
  {
    logo: LogoGreenApex,
    logoAlt: "Greenapex logo",
    position: "Team Lead",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      "Acted as team lead in different projects.",
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend + backend).",
      "Worked on enterprise-level projects for a variety of clients.",
      "Handled sprint planning & task distribution.",
    ],
  },
  {
    logo: LogoDotnpixel,
    logoAlt: "Dotnpixel logo",
    position: "Full Stack Developer",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ["Worked as a full stack developer (React / Laravel)."],
  },
];

export const Projects: projectstype[] = [
  {
    name: "Next Ecommerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe molestias laborum hic aut sint dignissimos totam iure. Animi pariatur error accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe molestias laborum hic aut sint dignissimos totam iure. Animi pariatur error accusamus! ",
    url: "https://nextecombd.vercel.app",
    previewImage: PrevNextEcom,
    technologies: [
      "React",
      "Express",
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: PrevNextEcom,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: PrevNextEcom,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: PrevNextEcom,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

export const TestimonialsDetails: testimonialstype[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues. this is a very good project for my new business",
  },
];
