import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  experienceDetailstype,
  projectstype,
  techdetailstype,
  testimonialstype,
} from "./types";

// logos frontend
import LogoNextjs from "@/app/images/logos/icon-nextjs.svg";
import LogoReact from "@/app/images/logos/icon-react.svg";
import LogoJavascript from "@/app/images/logos/icon-javascript.svg";
import LogoTypescript from "@/app/images/logos/icon-typescript.svg";
import LogoHtml from "@/app/images/logos/logo-html.webp";
import LogoCss from "@/app/images/logos/logo-css.webp";
import LogoTailwindcss from "@/app/images/logos/icon-tailwindcss.svg";
import LogoBootstrap from "@/app/images/logos/Bootstrap_logo.png";
import LogoSwiperjs from "@/app/images/logos/logo-swiperjs.png";
import LogoResponsive from "@/app/images/logos/logo-responsive2.jpg";
// logos backend
import LogoNodejs from "@/app/images/logos/icon-nodejs.svg";
import LogoExpress from "@/app/images/logos/icon-express.svg";
import LogoRestApis from "@/app/images/logos/logo-restapis.jpg";
import LogoPostgreSQL from "@/app/images/logos/icon-postgresql.svg";
import LogoMongoDB from "@/app/images/logos/icon-mongodb.svg";
import LogoMySql from "@/app/images/logos/logo-mysql.png";
// logos tools
import LogoGit from "@/app/images/logos/icon-git.svg";
import LogoGithub from "@/app/images/logos/logo-github.png";
import LogoReduxToolkit from "@/app/images/logos/logo-reduxtoolkit.jpeg";
import LogoProblem from "@/app/images/logos/logo-problemsolving.png";
import LogoCollaborate from "@/app/images/logos/logo-team-colaboration.webp";
import LogoCommunication from "@/app/images/logos/logo-communication.jpg";

// experience Logo
import LogoFullStack from "@/app/images/logos/full-stack-logo.jpg";

// Project Logo
import PrevNextEcom from "@/app/images/site/nextecom-preview.png";
import PrevInvoiceApp from "@/app/images/site/invoice-app.png";
import PrevSpotifyClone from "@/app/images/site/spotify-clone.png";

import AvatarKrisztian from "@/app/images/avatar-krisztian.png";
import AvatarEugen from "@/app/images/avatar-eugen.png";
import AvatarDummy from "@/app/images/avatar-dummy.svg";

import SiteLogo from "@/../public/images/rakib/rakiblogo.png";
// self info
import SelfAvater from "@/../public/images/rakib/me.jpg";
import SelfSecAvater from "@/../public/images/rakib/me.jpg";

export const SelfInfo = {
  firstName: "Muhammad",
  lastName: "Rakib",
  avatar: SelfAvater,
  secAvatar: SelfSecAvater,
  age: 20,
  summary:
    "I\’m a Full-Stack Web Developer specializing in modern React and Next.js applications. I build scalable, responsive, and performance-focused web applications using TypeScript, PostgreSQL, and Prisma. I enjoy turning complex problems into clean, efficient solutions and creating user-friendly interfaces with smooth animations and modern UI patterns.",
  label: ["Front-End Developer", "Back-End Developer", "Full Stack Developer"],
  logo: SiteLogo,
  address: "Natore, Bangladesh",
  availableForNewProject: true,
  about: [
    "I\’m passionate about building real-world web applications using modern technologies like Next.js, TypeScript, and MongoDB.",
    "I have experience working with authentication systems (JWT), database design, API integration, and building responsive UI components.",
    "I enjoy working on ecommerce platforms, admin dashboards, and dynamic web applications. My goal is to continuously improve my skills and deliver high-quality software solutions.",
  ],
  education: [
    "B.A Hons in Accounting",
    "Higher Secondary in Business Studies",
    "Secondary in Business Studies",
    "Avid Learner",
  ],
};

export const Nav_Links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Works",
    href: "#works",
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
];

export const TechDetails: techdetailstype = {
  "Frontend Skills": [
    {
      label: "Next.js",
      logo: LogoNextjs,
      url: "https://nextjs.org/",
      level: "Intermediate",
    },
    {
      label: "React",
      logo: LogoReact,
      url: "https://react.dev/",
      level: "Intermediate",
    },
    {
      label: "Tailwind CSS",
      logo: LogoTailwindcss,
      url: "https://tailwindcss.com/",
      level: "Intermediate",
    },
    {
      label: "Bootstrap",
      logo: LogoBootstrap,
      url: "https://getbootstrap.com/",
      level: "Intermediate",
    },
    {
      label: "JavaScript",
      logo: LogoJavascript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      level: "Intermediate",
    },
    {
      label: "TypeScript",
      logo: LogoTypescript,
      url: "https://www.typescriptlang.org/",
      level: "Intermediate",
    },
    {
      label: "HTML",
      logo: LogoHtml,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      level: "Intermediate",
    },
    {
      label: "CSS",
      logo: LogoCss,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      level: "Intermediate",
    },
    {
      label: "Swiper.js",
      logo: LogoSwiperjs,
      url: "https://swiperjs.com/",
      level: "Intermediate",
    },
    {
      label: "Responsive Design",
      logo: LogoResponsive,
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      level: "Intermediate",
    },
  ],

  "Backend Skills": [
    {
      label: "Node.js",
      logo: LogoNodejs,
      url: "https://nodejs.org/en",
      level: "Intermediate",
    },
    {
      label: "Express.js",
      logo: LogoExpress,
      url: "https://expressjs.com/",
      level: "Intermediate",
    },
    {
      label: "REST APIs",
      logo: LogoRestApis,
      url: "https://restfulapi.net/",
      level: "Intermediate",
    },
    {
      label: "MongoDB",
      logo: LogoMongoDB,
      url: "https://www.mongodb.com/",
      level: "Intermediate",
    },
    {
      label: "MySQL",
      logo: LogoMySql,
      url: "https://www.mysql.com/",
      level: "Intermediate",
    },
    {
      label: "PostgreSQL (Basic)",
      logo: LogoPostgreSQL,
      url: "https://www.postgresql.org/",
      level: "Intermediate",
    },
  ],

  "Tools & Tech": [
    {
      label: "Git",
      logo: LogoGit,
      url: "https://git-scm.com/",
      level: "Intermediate",
    },
    {
      label: "GitHub",
      logo: LogoGithub,
      url: "https://github.com/",
      level: "Intermediate",
    },
    {
      label: "Redux Toolkit",
      logo: LogoReduxToolkit,
      url: "https://redux-toolkit.js.org/",
      level: "Intermediate",
    },
    {
      label: "Problem Solving",
      logo: LogoProblem,
      url: "#",
      level: "Intermediate",
    },
    {
      label: "Communication",
      logo: LogoCommunication,
      url: "#",
      level: "Intermediate",
    },
    {
      label: "Team Collaboration",
      logo: LogoCollaborate,
      url: "#",
      level: "Intermediate",
    },
  ],
};

export const ExperienceDetails: experienceDetailstype[] = [
  {
    logo: LogoFullStack,
    logoAlt: "upwork logo",
    startDate: new Date(2025, 8),
    position: "Full Stack Developer (Self Projects)",
    currentlyWorkHere: true,
    summary: [
      "Built full-stack ecommerce applications using Next.js and PostgreSQL.",
      "Implemented secure authentication using JWT.",
      "Designed database schemas and optimized queries.",
      "Integrated Stripe payment system and handled webhooks.",
      "Developed responsive UI with modern animations and smooth user interactions.",
      "Deployed applications using Vercel.",
    ],
  },
  // {
  //   logo: LogoUpwork,
  //   logoAlt: "upwork logo",
  //   startDate: new Date(2025, 10),
  //   position: "Independent Freelancer",
  //   currentlyWorkHere: true,
  //   summary: [
  //     "I have been working here since 2025",
  //     "I have been working here since 2025",
  //     "I have been working here since 2025",
  //   ],
  // },
];

export const Projects: projectstype[] = [
  {
    name: "Next Ecommerce",
    description:
      "Built a complete ecommerce platform with product management. Implemented authentication and role-based access. Integrated Stripe payments with webhook order updates. Developed admin dashboard for managing products and users. Optimized performance and database queries. ",
    url: "https://nextecombd.vercel.app",
    githubLink: "https://github.com/mrp005c/Next-Ecom2",
    previewImage: PrevNextEcom,
    technologies: [
      "React",
      "Express",
      "Next.js",
      "Stripe",
      "Tailwindcss",
      "Responsive UI",
      "React Query",
      "React Bootstrap",
      "Express.js",
      "MongoDB",
      "Redux",
      "Vercel Deploy",
    ],
  },
  {
    name: "Invoice Management",
    description:
      "A platform that let you create, read, update, and delete your invoice. Your can download your invoice pdf in no time.",
    url: "https://invoice-mrp.vercel.app/",
    githubLink: "https://github.com/mrp005c/invoice-mrp",
    previewImage: PrevInvoiceApp,
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwindcss",
      "React Bootstrap",
      "Express.js",
      "MongoDb",
    ],
  },
  {
    name: "Spotify Clone",
    description:
      "A clone web application of Spotify music. That let you listen music, control panel, see music information. A Responsive and UI friendly web application.",
    url: "/",
    githubLink: "https://github.com/mrp005c/Spotify-Clone",
    previewImage: PrevSpotifyClone,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const TestimonialsDetails: testimonialstype[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex assumenda temporibus accusantium quia excepturi illo animi voluptate. Sequi eius fugiat accusantium adipisci corporis quae nostrum? Nobis, perferendis. Accusamus illo alias quod culpa",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda similique dolorem beatae voluptatem magni ratione nulla iste, non, ad aperiam iusto nihil ipsum. Laborum at nostrum dignissimos eligendi voluptate quod minus iste adipisci, libero nulla, quasi quibusdam enim. Maxime, nemo harum.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Rakib was extremely easy and pleasant to work with and he truly cares about the project being a success. Rakib has a high level of knowledge and was able to work on my MERN stack application without any issues. this is a very good project for my new business",
  },
];
