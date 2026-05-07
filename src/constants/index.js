import {
  sdlc,
  huniversity,
  iuniversity,
  nexora,
  sunhungkai,
  chargeswap,
  jackbit,
  recruitment,
  khoj,
  kosh,
  antony,
  mensah,
  lee,
  sparkleinpink,
  thisisneeded,
  ivoryanddeene,
  aiornot,
  etsy,
  eventplanner,
  freshflow,
  customerx,
  iceblink,
  winderfirst,
  thechapel,
  secondbaytown,
  danielfusco,
  andrewpaolucci,
  humancentric,
  rufusteague,
  Nottoosweetlife
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
  AiOutlineGitlab,
  AiOutlineDiscord
} from "react-icons/ai";

import {
  DiPhp,
  DiCss3,
  DiJava,
  DiRuby
} from "react-icons/di";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiClaude,
  // SiOracle,
  SiShopify,
  SiLaravel,
  SiStrapi,
  SiFirebase,
  SiPostgresql,
  SiHiveBlockchain,
  SiMongodb
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

import { FaHardHat, FaRust, FaHtml5, FaWordpress, FaReact, FaFigma, FaShopify, FaHubspot  } from "react-icons/fa";

import { BsTypescript } from "react-icons/bs";

import { RiTailwindCssFill } from "react-icons/ri";


import { IoIosNotificationsOutline, IoLogoCss3, IoLogoJavascript } from "react-icons/io";

import { FaElementor, FaPhp } from "react-icons/fa6";

import { VscAzure } from "react-icons/vsc";

import { PiDivideFill } from "react-icons/pi";

import { BiLogoVisualStudio } from "react-icons/bi";

import { DiIllustrator } from "react-icons/di";

import { TbBrandAdobePhotoshop } from "react-icons/tb";

import { TbBrandTypescript, TbBrandMongodb } from "react-icons/tb";

import { PiAngularLogo, PiFileCSharpDuotone } from "react-icons/pi";

import { BsMicrosoftTeams } from "react-icons/bs";

import { TfiWordpress } from "react-icons/tfi";




export const resumeLink =
  "";

export const callToAction = "https://t.me/sinpung_131";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Testimonial",
    title: "Testimonial",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: huniversity,
    title: "University of Santo Tomas",
    degree: "Bachelor of Computer Science",
    duration: "09/2013 – 07/2017",
    content1: "Major: Computer Science",
  },
  {
    id: "education-2",
    icon: iuniversity,
    title: "New Era University",
    degree: "Diploma",
    duration: "08/2012 – 05/2013",
    content1: "Major: Information Technology",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Language",
    items: [
      {
        id: "p-1",
        icon: FaHtml5,
        name: "HTML5",
      },
      {
        id: "p-2",
        icon: IoLogoCss3,
        name: "CSS3",
      },
      {
        id: "p-3",
        icon: IoLogoJavascript,
        name: "JavaScript",
      },
      {
        id: "p-4",
        icon: BsTypescript,
        name: "TypeScript",
      },
      {
        id: "p-5",
        icon: FaPhp,
        name: "PHP",
      },

    ],
  },
  {
    title: "Frontend",
    items: [
      {
        id: "f-1",
        icon: FaShopify,
        name: "Shopify",
      },
      {
        id: "f-2",
        icon: FaElementor,
        name: "Elementor",
      },
      {
        id: "f-3",
        icon: FaReact,
        name: "React",
      },
      {
        id: "f-4",
        icon: PiDivideFill,
        name: "Divi",
      },
      {
        id: "f-5",
        icon: FaWordpress,
        name: "WordPress"
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        id: "p-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "p-2",
        icon: BiLogoPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "p-3",
        icon: SiMongodb,
        name: "Monogodb",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: FaFigma,
        name: "Figma",
      },
      {
        id: "t-2",
        icon: TbBrandAdobePhotoshop,
        name: "Photoshop",
      },
      {
        id: "t-3",
        icon: DiIllustrator,
        name: "illustrator",
      }

    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Freshflow",
    logo: freshflow,
    link: "https://www.freshflow.ai/",
    positions: [

      {
        title: "Senior Shopify Developer",
        duration: "Oct 2023 - Aug 2025",
        content: [
          {
            text: "Led development of advanced Shopify themes using Liquid, Sections, and JSON templates, creating dynamic and immersive storefront experiences.",
            link: "",
          },
          {
            text: "Designed and implemented integrations using Shopify APIs (GraphQL & REST), connecting Shopify with ERP systems, logistics platforms, and third-party services.",
            link: "",
          },
          {
            text: "Architected and built custom Shopify Apps using Node.js and React, powering complex business workflows including product customization and order automation",
            link: "",
          },
        ],
      },
      // {
      //   title: "Junior Web Developer",
      //   duration: "Feb 2017 - Oct 2017",
      //   content: [
      //     {
      //       text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
      //       link: "",
      //     },
      //     {
      //       text: "developed REST APIs for secure integration of patient health data across multiple providers, ensuring HIPAA compliance. ",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "CustomerX",
    logo: customerx,
    link: "https://www.customerx.org/",
    positions: [
      {
        title: "Ecommerce Web Developer",
        duration: "Feb 2019 - August 2023",
        content: [
          {
            text: "Developed custom Shopify storefronts and themes using Liquid templates and JavaScript.",
            link: "",
          },
          {
            text: "Configured Shopify Webhooks and API integrations for real-time order and product data synchronization.",
            link: "",
          },
          {
            text: "Implemented integrations with third-party APIs and external services for payment processing, analytics, and marketing automation.",
            link: "",
          }
        ],
      },
      // {
      //   title: "Software Developer Intern",
      //   duration: "Sept 2019 - Feb 2021",
      //   content: [
      //     {
      //       text: "Added support for the discoverability of Microsoft Azure assets utilising Go and Gremlin.",
      //       link: "",
      //     },
      //     {
      //       text: "Extended support for Azure for reachability analysis of assets for cloud security posture management.",
      //       link: "",
      //     },
      //     {
      //       text: "Implemented real-time WebSocket services to push patient alerts, notifications, and analytics to clinical staff",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    organisation: "Iceblink Solution",
    logo: iceblink,
    link: "https://ww.iceblink.com",
    positions: [

      {
        title: "Web Developer",
        duration: "Dec 2017 - Sep 2018",
        content: [
          {
            text: "Assisted in building and customizing Shopify themes and storefront functionality.",
            link: "",
          },
          {
            text: "Developed frontend interfaces using JavaScript, HTML, and CSS.",
            link: "",
          },
          {
            text: "Wrote clean HTML, CSS, and JavaScript to deliver responsive, accessible, and maintainable UI components",
            link: "",
          },
        ],
      },
      // {
      //   title: "Junior Web Developer",
      //   duration: "Feb 2017 - Oct 2017",
      //   content: [
      //     {
      //       text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
      //       link: "",
      //     },
      //     {
      //       text: "developed REST APIs for secure integration of patient health data across multiple providers, ensuring HIPAA compliance. ",
      //       link: "",
      //     },
      //   ],
      // },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "sparkleinpink",
    link: "https://sparkleinpink.com/",
    image: sparkleinpink,
    content:
      "Sparkle in Pink designs their clothing so they are original and focus on selling only the trendiest and highest quality items.",
    stack: [
      {
        id: "icon-1",
        icon: SiShopify,
        name: "Shopify",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-2",
    title: "Nottoosweetlife",
    link: "https://nottoosweetlife.com/",
    image: Nottoosweetlife,
    content: "Not Too Sweet Life is a small, emerging beverage brand specializing in low-sugar, plant-based water infusions/tea infusions made with herbs, botanicals, flowers, honey, and monk fruit.",
    stack: [
      {
        id: "icon-1",
        icon: FaShopify,
        name: "Shopify",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "TailwindCss",
      },
      {
        id: "icon-2",
        icon: SiJquery,
        name: "JQuery",
      },
    ],
  },
  
  {
    id: "project-3",
    title: "Ivoryanddeene",
    link: "https://ivoryanddeene.com.au/",
    image: ivoryanddeene,
    content:
      "Lighting, decor & furniture that adds style to any room and makes coming home the best part of your day.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiShopify,
        name: "Shopify",
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "Typescript",
      },
    ],
  },

  {
    id: "project-4",
    title: "Etsy",
    link: "https://etsy.com",
    image: etsy,
    content:
      "Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.",
    stack: [
      {
        id: "icon-1",
        icon: DiPhp,
        name: "PHP",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "bootstrap",
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MySQL",
      },

    ],
  },
  {
    id: "project-5",
    title: "Thechapel",
    link: "https://thechapel.org/",
    image: thechapel,
    content: "The Chapel's website lets people learn about their casual-yet-reverent Sunday services (8:40am, 10:00am & 11:20am), watch expository sermons by Pastor Dave, sign up for events, give online, and connect via their Church Center app.",
    stack: [
      {
        id: "icon-1",
        icon: TfiWordpress,
        name: "WordPress",
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-2",
        icon: SiJquery,
        name: "JQuery",
      },
    ],
  },
  {
    id: "project-6",
    title: "Thisisneeded",
    link: "https://thisisneeded.com",
    image: thisisneeded,
    content:
      "thisisneeded is a direct-to-consumer supplement brand focused on high quality, science backed nutrition for women, especially during fertility, pregnancy, postpartum, motherhood, perimenopause, and general women's health.",
    stack: [
      {
        id: "icon-1",
        icon: SiShopify,
        name: "Shopify",
      },
      {
        id: "icon-2",
        icon: RiTailwindCssFill,
        name: "TailwindCSS",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-7",
    title: "humancentric",
    link: "http://www.humancentric.com",
    image: humancentric,
    content:
      "HumanCentric is a direct-to-consumer brand that designs and sells premium ergonomic home and office products, with a strong focus on workspace accessories that improve productivity, ergonomics, and aesthetics.",
    stack: [
      {
        id: "icon-1",
        icon: SiShopify,
        name: "Shopify",
      },
      {
        id: "icon-2",
        icon: RiTailwindCssFill,
        name: "TailwindCSS",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
    {
    id: "project-8",
    title: "rufusteague",
    link: "https://rufusteague.com/",
    image: rufusteague,
    content:
      "Rufus Teague is a Kansas City based BBQ sauce and seasoning brand known for its award-winning, craft style barbecue sauces, dry rubs, and steak sauces.",
    stack: [
      {
        id: "icon-1",
        icon: SiShopify,
        name: "Shopify",
      },
      {
        id: "icon-2",
        icon: RiTailwindCssFill,
        name: "TailwindCSS",
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "Css",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
];


// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the Testimonial activities you have indulged in, like - student clubs, research groups etc.
export const Testimonials = [
  {
    id: 1,
    organisation: "Antoby James Adwards",
    title: "Executive Director &Deputy Chief Executive Officer",
    content: [
      {
        text: "Working with him made my job very easy.",
      },
      {
        text: "I never had to explain requirements twice."
      },
    ],
    logo: antony,
  },
  {
    id: 2,
    organisation: "Mensah Alkebu Lan",
    title: "Founder & Tech Lead",
    content: [
      {
        text: "He was the best developer among the trainees I mentored.",
      },
      {
        text: " I believe he will also perform very well in a technical managerial role.",
      },
    ],
    logo: mensah,
  },
  {
    id: 3,
    organisation: "Lee Seng Huang",
    title: "Group Executive Chairman",
    content: [
      {
        text: "He performed his duties well during his tenure.",
      },
      {
        text: "All applications he developed were of high quality.",
      },
    ],
    logo: lee,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://linkedin.com/in/schouten-tom-1a61b4373",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:schouten0914@gmail.com",
  },
  {
    id: "social-media-4",
    icon: BsMicrosoftTeams,
    link: "msteams:/l/chat/0/0?users=schouten0914@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiOutlineDiscord,
    link: "https://discord.com/users/354609674995367937",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Alberto Castillo",
  tagLine:
    "Quezon City, Philippines",
  intro:
        "Senior Shopfy Developer from Alberto Castillo Who create/maintain beautiful store",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
