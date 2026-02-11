
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { techDetails } from "./types";

// logos 
import LogoJavascript from '@/app/logos/icon-javascript.svg';
import LogoTypescript from '@/app/logos/icon-typescript.svg';
import LogoReact from '@/app/logos/icon-react.svg';
import LogoNextjs from '@/app/logos/icon-nextjs.svg';
import LogoNodejs from '@/app/logos/icon-nodejs.svg';
import LogoExpress from '@/app/logos/icon-express.svg';
import LogoExpressLight from '@/app/logos/icon-express-light.svg';
import LogoPostgreSQL from '@/app/logos/icon-postgresql.svg';
import LogoMongoDB from '@/app/logos/icon-mongodb.svg';
import LogoTailwindcss from '@/app/logos/icon-tailwindcss.svg';
import LogoGit from '@/app/logos/icon-git.svg';


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
    label: "Testimonals",
    href: "#testimonals",
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
    site: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/md.rakib.patoyari.2024/",
  },
];


export const TechDetails: techDetails = [
    {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
   {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
]
