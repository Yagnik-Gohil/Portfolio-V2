import face1 from "./assets/face-1.avif";
import face2 from "./assets/face-2.avif";
import face3 from "./assets/face-3.avif";

import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

import smile from "./assets/smile.svg";
import suitcase from "./assets/suitcase.svg";
import grid from "./assets/grid.svg";
import phone from "./assets/phone.svg";

import back from "./assets/back.svg";
import desktop from "./assets/desktop.svg";
import gear from "./assets/gear.svg";
import flag from "./assets/flag.svg";
import pen from "./assets/fountain-pen.svg";
import book from "./assets/book.svg";
import mailbox from "./assets/mailbox.svg";

import web from "./assets/web-section.svg";

import node from "./assets/node-js.svg";
import javascript from "./assets/javascript.svg";
import typescript from "./assets/typescript.svg";
import express from "./assets/express.svg";
import nest from "./assets/nestjs.svg";
import html5 from "./assets/html5.svg";
import css3 from "./assets/css3.svg";
import tailwind from "./assets/tailwind-css.svg";
import sql from "./assets/sql.svg";
import postgresql from "./assets/postgresql.svg";
import postman from "./assets/postman.svg";
import react from "./assets/react.svg";
import vscode from "./assets/vscode.svg";
import github from "./assets/github.svg";

import linkedin from "./assets/linkedin.svg";
import x from "./assets/x.svg";
import instagram from "./assets/instagram.svg";

export const FULL_NAME = "Yagnik Gohil";
export const TAG_LINE = "Software Engineer";

export const IMAGE = face1;
export const MENU = menu;
export const CLOSE = close;

export const HOME = {
  PROFILE: face1,
  PROFILE_2: face2,
  PROFILE_3: face3,
  INTRODUCTION: "👋 Hello, I'm David – Crafting Creative Code!",
  SUMMARY:
    "As a creative developer, I blend code and design to build unique, user-centric experiences. Let's turn your ideas into a dynamic and engaging digital reality!",
  ABOUT: "A Peek into My Creative Journey",
  ABOUT_ICON: smile,
  PORTFOLIO: "Top Work and Creative Projects",
  PORTFOLIO_ICON: suitcase,
  SERVICES: "Solutions to Meet Your Goals",
  SERVICES_ICON: grid,
  CONTACT: "Let's Start a Conversation",
  CONTACT_ICON: phone,
};
export const ABOUT = {
  INTRODUCTION: "Inside My World – The Story Behind Work",
  SUMMARY:
    "Get a glimpse into my journey and the inspiration behind my work. Discover what drives me and how my experiences shape my creative vision.",
  PASSION: "✨ The Drive, Passion, and Vision Behind My Work",
  PASSION_SUMMARY_1:
    "I'm David Harrison, a creative developer passionate about turning ideas into engaging digital experiences. Starting in New Jersey, my love for tech and design grew from building simple sites to developing complex applications.",
  PASSION_SUMMARY_2:
    "I blend technical skill with design to create seamless, user-friendly solutions, always pushing boundaries to exceed expectations.",
  SKILL: "🔆 Unleashing My Skillful Superpowers",
  SKILL_LIST: [
    "Back-End Development",
    "Front-End Development",
    "System Design",
    "Database Design",
    "Debugging",
    "DSA",
    "Problem Solving",
    "Deployment",
  ],
  AWARD: "🏆 Showcasing My Awards and Honors",
  AWARD_LIST: [
    { name: "🏆 Innovative Web Developer", year: 2024 },
    { name: "🏅 Top Emerging Tech Talent", year: 2024 },
    { name: "🥇 Best App Developer", year: 2024 },
  ],
};
export const PORTFOLIO = {
  TITLE: "Collection of My Exceptional Solutions",
  SUMMARY:
    "Explore a selection of my top digital projects, where creativity meets innovation. Each piece reflects my commitment to delivering impactful solutions.",
  LIST: [
    {
      id: "rick-brown",
      color: "#8cc71b",
      image:
        "https://cdn.prod.website-files.com/66c737bcc8413594906f4c3e/66c744b391685bdacff10184_Thumbnail.avif",
      name: "Rick Brown",
      year: "2024",
      type: "Website",
      tags: ["Portfolio"],
      summary:
        "Developing the 'Rick Brown' portfolio site was a challenge to blend striking visuals with user-friendly functionality. The goal was to showcase Rick's diverse photography while ensuring a seamless, intuitive experience.",
      github: "https://rick-brown.framer.website/",
      live: "https://rick-brown.framer.website/",
      gallery: [
        "https://cdn.prod.website-files.com/66c737bcc8413594906f4c3e/66c744e3a56792ed239fe39b_1.avif",
        "https://cdn.prod.website-files.com/66c737bcc8413594906f4c3e/66c744b9315d3bc71db75f37_2.avif",
      ],
    },
    {
      id: "it-conf",
      color: "#FFB3C1",
      image:
        "https://cdn.prod.website-files.com/66c737bcc8413594906f4c3e/66c7432110a89d8aa3a1e767_Thumbnail.avif",
      name: "IT/CONF",
      year: "2024",
      type: "Website",
      tags: ["Portfolio"],
      summary: "",
      github: "",
      live: "",
      gallery: [],
    },
    {
      id: "adzen",
      color: "#e7ff53",
      image:
        "https://cdn.prod.website-files.com/66c737bcc8413594906f4c3e/66c742188c0a131331c46cf1_Thumbnail.avif",
      name: "ADZEN",
      year: "2024",
      type: "Website",
      tags: ["Portfolio"],
      summary: "",
      github: "",
      live: "",
      gallery: [],
    },
    {
      id: "andrew-williams",
      color: "#111",
      image:
        "https://cdn.prod.website-files.com/66c737bcc8413594906f4c3e/66c73fce86d7ff45cb82f641_Thumbnail.avif",
      name: "Andrew Williams",
      year: "2024",
      type: "Website",
      tags: ["Portfolio"],
      summary: "",
      github: "",
      live: "",
      gallery: [],
    },
  ],
};
export const ICON = {
  BACK: back,
  DESKTOP: desktop,
  GEAR: gear,
  FLAG: flag,
  PEN: pen,
  BOOK: book,
  MAIL_BOX: mailbox,
  PHONE: phone,
};
export const SERVICES = {
  INTRODUCTION: "Explore My Range of Specialized Services",
  SUMMARY:
    "Explore services crafted to bring your vision to life. From innovative solutions to expert support, I offer everything needed for exceptional results.",
  LIST: [
    {
      ICON: web,
      TITLE: "Web Development",
      SUMMARY:
        "End-to-end development services, covering both front-end and back-end, to create robust and scalable web applications.",
      TAGS: [
        "Responsive Design",
        "Custom Features",
        "Performance Boost",
        "Responsive Design",
        "Custom Features",
        "Performance Boost",
      ],
    },
    {
      ICON: web,
      TITLE: "Full-Stack Development",
      SUMMARY:
        "End-to-end development services, covering both front-end and back-end, to create robust and scalable web applications.",
      TAGS: [
        "Responsive Design",
        "Custom Features",
        "Performance Boost",
        "Responsive Design",
        "Custom Features",
        "Performance Boost",
      ],
    },
  ],
  TECHNOLOGY_TITLE: "🧩 Tools & Technologies Powering My Creations",
  TECHNOLOGY_SUMMARY:
    "Explore the cutting-edge tools and technologies I use to build innovative and effective digital solutions, from web and mobile apps to seamless integrations and optimizations.",
  TECHNOLOGY: [
    {
      NAME: "Node.js",
      ICON: node,
      LINK: "https://nodejs.org/en",
    },
    {
      NAME: "JavaScript",
      ICON: javascript,
      LINK: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      NAME: "TypeScript",
      ICON: typescript,
      LINK: "https://www.typescriptlang.org",
    },
    {
      NAME: "Express",
      ICON: express,
      LINK: "https://expressjs.com",
    },
    {
      NAME: "NestJS",
      ICON: nest,
      LINK: "https://nestjs.com",
    },
    {
      NAME: "SQL",
      ICON: sql,
      LINK: "https://www.w3schools.com/sql",
    },
    {
      NAME: "PostgreSQL",
      ICON: postgresql,
      LINK: "https://www.postgresql.org",
    },
    {
      NAME: "React",
      ICON: react,
      LINK: "https://react.dev",
    },
    {
      NAME: "Tailwind CSS",
      ICON: tailwind,
      LINK: "https://tailwindcss.com",
    },
    {
      NAME: "HTML 5",
      ICON: html5,
      LINK: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      NAME: "CSS 3",
      ICON: css3,
      LINK: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      NAME: "GitHub",
      ICON: github,
      LINK: "https://github.com",
    },
    {
      NAME: "VS Code",
      ICON: vscode,
      LINK: "https://code.visualstudio.com",
    },
    {
      NAME: "Postman",
      ICON: postman,
      LINK: "https://www.postman.com",
    },
  ],
};
export const CONTACT = {
  TITLE: "Let's Connect and Collaborate",
  SUMMARY:
    "Reach out to discuss your project or ideas. I’m here to provide support and turn your vision into reality.",
  FORM: "📤 Get In Touch",
  FORM_SUMMARY:
    "Have a question or want to start a project? Contact me, and let’s make your ideas come to life!",
  SOCIAL_LINK: "🔹 Follow Me",
  CONTACT: "🦋 Book a Call",
  CONTACT_SUMMARY:
    "Have a question or want to start a project? Contact me, and let’s make your ideas come to life!",
  LINK: [
    {
      NAME: "LinkedIn",
      LINK: "https://www.linkedin.com/in/yagnik-gohil-087601189/",
      ICON: linkedin,
    },
    {
      NAME: "GitHub",
      LINK: "https://github.com/Yagnik-Gohil",
      ICON: github,
    },
    {
      NAME: "X",
      LINK: "https://x.com/yagnik_19",
      ICON: x,
    },
    {
      NAME: "Instagram",
      LINK: "https://www.instagram.com/y.r.gohil",
      ICON: instagram,
    },
  ],
};
export const LICENSES = {
  TITLE: "Licenses Information",
  SUMMARY:
    "All graphical assets in this template are licensed for personal and commercial use. If You'd like to use a specific asset, please check the licenses below.",
  LIST: [
    {
      TITLE: "✍️ Fonts",
      SUMMARY:
        "For “David Harrison”, we carefully selected the Inter font. This font is freely available for both personal and commercial use.",
    },
    {
      TITLE: "🏞️ Icons",
      SUMMARY:
        "All icons used in “David Harrison” come from Phosphor Icons. They are free for personal and commercial use.",
    },
    {
      TITLE: "🥰 Emoji",
      SUMMARY:
        "All emojis used on this site are sourced from Free Emoji Pack. They are free for personal and commercial use.",
    },
    {
      TITLE: "🧑🏻 Memoji",
      SUMMARY:
        "All Memoji used on this site are sourced from Apple’s Memoji feature. They are free for personal and commercial use.",
    },
  ],
};
