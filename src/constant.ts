import face1 from "./assets/face-1.avif";
import face2 from "./assets/face-2.avif";
import face3 from "./assets/face-3.avif";

import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

import smile from "./assets/smile.svg";
import suitcase from "./assets/suitcase.svg";
import grid from "./assets/grid.svg";
import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";

import back from "./assets/back.svg";
import desktop from "./assets/desktop.svg";
import gear from "./assets/gear.svg";
import flag from "./assets/flag.svg";
import pen from "./assets/fountain-pen.svg";
import book from "./assets/book.svg";
import mailbox from "./assets/mailbox.svg";

import terminal from "./assets/terminal.svg";
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

import profile from "./images/profile.jpg";

import weather0 from "./images/weather-0.png";
import weather1 from "./images/weather-1.png";
import weather2 from "./images/weather-2.png";

import movie0 from "./images/movie-0.png";
import movie1 from "./images/movie-1.png";

import solo0 from "./images/solo-0.png";
import solo1 from "./images/solo-1.png";

import skribbl0 from "./images/skribbl-0.png";
import skribbl1 from "./images/skribbl-1.png";
import skribbl2 from "./images/skribbl-2.png";

import ambient0 from "./images/ambient-0.png";
import ambient1 from "./images/ambient-1.png";

export const FULL_NAME = "Yagnik Gohil";
export const TAG_LINE = "Software Engineer";

export const IMAGE = profile;
export const MENU = menu;
export const CLOSE = close;

export const EMAIL = "mailto:gohilyagnik3@gmail.com";

export const HOME = {
  PROFILE: face1,
  PROFILE_2: face2,
  PROFILE_3: face3,
  INTRODUCTION: "👋 Hi, I'm Yagnik – Bringing Ideas to Life Through Code!",
  SUMMARY:
    "Fullstack developer with 3+ years of experience building scalable backends using JavaScript (NestJS, Express JS), C# (ASP.NET Core), and crafting responsive frontends with React, alongside PostgreSQL for data management.",
  ABOUT: "A Glimpse into My Creative Process",
  ABOUT_ICON: smile,
  PORTFOLIO: "Top Projects and Creative Work",
  PORTFOLIO_ICON: suitcase,
  SERVICES: "Custom Solutions for Your Goals",
  SERVICES_ICON: grid,
  CONTACT: "Open to Conversations!",
  CONTACT_ICON: phone,
};
export const ABOUT = {
  INTRODUCTION: "A Look Within – The Journey Behind My Work",
  SUMMARY:
    "Discover the journey and the inspirations behind the work. Explore what drives creativity and how experiences shape the overall vision.",
  PASSION: "✨ The Fuel & Passion Behind My Work",
  PASSION_SUMMARY_1:
    "My journey in technology and design has taken me from creating basic websites to developing intricate applications. I love problem-solving and thrive on overcoming challenges.",
  PASSION_SUMMARY_2:
    "I integrate technical proficiency with design to develop smooth, user-friendly solutions, always striving to push limits and surpass expectations.",
  SKILL: "🔆 Tapping into My Expertise",
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
  AWARD: "🏆 Displaying My Certifications",
  AWARD_LIST: [
    {
      name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      year: 2022,
      link: "https://www.udemy.com/certificate/UC-2d6a8543-a8b5-4662-b9de-5354679465d1",
    },
  ],
};
export const PORTFOLIO = {
  TITLE: "Showcase of My Innovative Solutions",
  SUMMARY:
    "Discover a curated selection of my leading digital projects, where creativity intertwines with innovation. Each project showcases my dedication to providing impactful solutions.",
  LIST: [
    {
      id: "ambient-chaos",
      color: "#22c55e",
      image: ambient0,
      name: "Ambient Chaos",
      year: "2024",
      type: "Website",
      tags: ["Music"],
      summary: "Ambient Chaos is a web app that lets users create a personalized ambient sound environment.",
      github: "https://github.com/Yagnik-Gohil/Ambient-Chaos",
      live: "https://ambient-chaos.yagnik.dev",
      gallery: [ambient1],
    },
    {
      id: "skribbl",
      color: "#FFD460",
      image: skribbl0,
      name: "Skribbl",
      year: "2024",
      type: "Website",
      tags: ["Multiplayer Game"],
      summary: "Skribbl is a fun and engaging multiplayer drawing and guessing game. Players take turns sketching a word while others try to guess it in real-time. Built with an intuitive interface, it combines creativity and quick thinking, offering an enjoyable experience for users of all ages.",
      github: "https://github.com/Yagnik-Gohil/skribbl",
      live: "https://skribbl.yagnik.dev",
      gallery: [skribbl1, skribbl2],
    },
    {
      id: "solo",
      color: "#f4c613",
      image: solo0,
      name: "Solo",
      year: "2021",
      type: "Website",
      tags: ["Portfolio"],
      summary: "Solo is a fully responsive website built using HTML, CSS, JavaScript, and Bootstrap. Designed with a mobile-first approach, it ensures smooth and adaptive performance across various devices and screen sizes, offering an engaging user experience with clean, modern layouts.",
      github: "https://github.com/Yagnik-Gohil/Solo",
      live: "https://solo.yagnik.dev",
      gallery: [solo1],
    },
    {
      id: "weather",
      color: "#39A2DB",
      image: weather0,
      name: "Weather",
      year: "2022",
      type: "Website",
      tags: [],
      summary:
        "Access current weather data for any location on Earth including over 200,000 cities!. 5 day forecast is available at any location on the globe. It includes weather forecast data with 3-hour step.",
      github: "https://github.com/Yagnik-Gohil/Weather",
      live: "https://weather.yagnik.dev",
      gallery: [weather1, weather2],
    },
    {
      id: "movie-hunt",
      color: "#00cdd7",
      image: movie0,
      name: "Movie Hunt",
      year: "2022",
      type: "Website",
      tags: [],
      summary: "Movie Hunt fetches real-time movie data using The Movie Database (TMDb) API, offering a dynamic and interactive user experience.",
      github: "https://github.com/Yagnik-Gohil/MovieHunt",
      live: "https://movie-hunt.yagnik.dev",
      gallery: [movie1],
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
  MAIL: mail,
};
export const SERVICES = {
  INTRODUCTION: "Discover My Array of Specialized Services",
  SUMMARY:
    "Explore a range of services crafted to make your vision a reality. From inventive solutions to expert support, I offer all the essentials for achieving remarkable results.",
  LIST: [
    {
      ICON: terminal,
      TITLE: "Back-End Development",
      SUMMARY:
        "Backend development services focused on building robust server-side solutions, ensuring seamless data management, API integration, and system security for scalable applications.",
      TAGS: [
        "API Development",
        "Database Management",
        "Server-Side Logic",
        "Performance Optimization",
        "Microservices Architecture",
        "RESTful Services",
        "Authentication and Authorization",
      ],
    },
    {
      ICON: web,
      TITLE: "Front-End Development",
      SUMMARY:
        "Frontend development services that prioritize user experience and interface design, creating visually appealing and interactive web applications that engage users across all devices.",
      TAGS: [
        "Responsive Design",
        "Cross-Browser Compatibility",
        "Accessibility Features",
        "Modern Frameworks",
        "Mobile-First Design",
        "State Management",
        "Frontend Frameworks",
      ],
    },
  ],
  TECHNOLOGY_TITLE: "🧩 The Tools and Technologies Driving My Projects",
  TECHNOLOGY_SUMMARY:
    "Discover the advanced tools and technologies I leverage to create innovative and efficient digital solutions, encompassing web and backend applications, as well as seamless integrations and optimizations.",
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
  TITLE: "Let’s Work Together!",
  SUMMARY:
    "Contact me to discuss your project or ideas. I’m ready to provide support and help bring your vision to life.",
  FORM: "📤 Get In Touch",
  FORM_SUMMARY:
    "Got a question or ready to kick off a project? Reach out, and let's bring your ideas to life!",
  SOCIAL_LINK: "🔹 Let's Connect",
  CONTACT: "✉️ Send Mail",
  CONTACT_SUMMARY:
    "Got a question or ready to kick off a project? Shoot me an email, and let’s turn your ideas into reality!",
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
      TITLE: "🏞️ Icons",
      SUMMARY:
        "All icons used in “Portfolio” come from SVG Repo. They are free for personal and commercial use.",
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
