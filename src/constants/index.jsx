import boostrap from "../../public/assets/bootstrap.png";
import cosmos from "../../public/assets/projects/Cosmos.png";
import css from "../../public/assets/css.png";
import docker from "../../public/assets/docker.png";
import facebook from "../../public/assets/facebook.png";
import git from "../../public/assets/git.png";
import github from "../../public/assets/github.png";
import html from "../../public/assets/html.png";
import Huddle from "../../public/assets/projects/Hoddle.png";
import js from "../../public/assets/js.png";
import keeper from "../../public/assets/projects/Notes.png";
import pizza from "../../public/assets/projects/pizaa.png";
import weather from "../../public/assets/projects/WeatherApp.png";
import reactPng from "../../public/assets/react.png";
import Relvise from "../../public/assets/projects/Relvise.png";
import restCountries from "../../public/assets/rest-countries.png";
import sassPng from "../../public/assets/sass.png";
import todoAppPng from "../../public/assets/projects/todoApp.png";
import ubuntu from "../../public/assets/ubuntu.png";
import drone from "../../public/assets/projects/Drone.png";
import vscode from "../../public/assets/vscode.png";
import wordpress from "../../public/assets/wordpress.png";
import instagram from "../../public/assets/instagram.png";
import sushi from "../../public/assets/projects/sushi.png";
import chat from "../../public/assets/projects/chat.png";
export const LeftTech = [
  {
    id: 1,
    img: html,
  },
  {
    id: 2,
    img: css,
  },
  {
    id: 3,
    img: js,
  },
  {
    id: 4,
    img: sassPng,
  },
  {
    id: 5,
    img: boostrap,
  },
  {
    id: 6,
    img: git,
  },
];

export const RightTech = [
  {
    id: 1,
    img: reactPng,
  },
  {
    id: 2,
    img: ubuntu,
  },
  {
    id: 3,
    img: vscode,
  },
  {
    id: 4,
    img: docker,
  },
  {
    id: 5,
    img: wordpress,
  },
  {
    id: 6,
    img: github,
  },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portofolio",
    title: "Portofolio",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const matchSkill = [
  {
    id: 1,
    text: "look for an experienced Front-end Developer with broad skill set .",
  },
  {
    id: 2,
    text: "aim to create a website for your business",
  },
  {
    id: 3,
    text: "want to share your abilities with the whole world",
  },
  {
    id: 4,
    text: "have a shop or a restaurant and you want an e-commerce website",
  },
  {
    id: 5,
    text: "You already have a website transformed from template to code and you don't know what to do next with it",
  },
  {
    id: 6,
    text: "You want a website from scratch",
  },
  {
    id: 7,
    text: "You have great thoughts and you want to share them with others",
  },
];

export const projects = [
  {
    id: "chat",
    img: chat,
    title: "Chat App",
    desc: "This is a chat app , created using Firebase + React Js . This project shows up the ability of working with cloud databases and authentification",
    tech: [
      {
        id: 1,
        name: "JSX",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
      {
        id: 4,
        name: "ROUTER DOM",
      },
      {
        id: 5,
        name: "REDUX",
      },
      {
        id: 6,
        name: "Firebase",
      },
    ],
    livePreview: "https://mikexado.github.io/Chat-App/",
    code: "https://github.com/MikeXado/Chat-App",
  },
  {
    id: "romsem",
    img: sushi,
    title: "Sushi Market-REMIX",
    desc: "E-commerce website that prove knowledge of Remix , Firebase and React Js",
    tech: [
      {
        id: 1,
        name: "FIREBASE",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
      {
        id: 4,
        name: "REMIX",
      },
      {
        id: 5,
        name: "REDUX",
      },
    ],
    livePreview: "https://sushi-market-remix.netlify.app/",
    code: "https://github.com/MikeXado/Sushi-Market-remix",
  },
  {
    id: "cosmos",
    img: cosmos,
    title: "Cosmos",
    desc: "This is a multi page responsive website which shows the ability of working with sliders and filtering using simple JS code.",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
    ],
    livePreview: "https://mikexado.github.io/Cosmos/",
    code: "https://github.com/MikeXado/Cosmos",
  },
  {
    id: "pizza",
    img: pizza,
    title: "Pizza App",
    desc: "This is a simple e-commerce app created with react. The purpose of this app is to show how i can handle global states using Redux.",
    tech: [
      {
        id: 1,
        name: "JSX",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
      {
        id: 4,
        name: "REDUX",
      },
      {
        id: 5,
        name: "ROUTER DOM",
      },
    ],

    livePreview: "https://mikexado.github.io/React-Pizza/#/",
    code: "https://github.com/MikeXado/React-Pizza",
  },
  {
    id: "drone",
    img: drone,
    title: "Drone",
    desc: "This is a four pages website that can be used as a advertisement for drones , here the user can find detailed information about drones , including the places where they can be purchased",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
    ],
    livePreview: "https://mikexado.github.io/Drone/",
    code: "https://github.com/MikeXado/Drone",
  },
  {
    id: "relvise",
    img: Relvise,
    title: "Relvise",
    desc: "This is responsive landing page , that promote finance and consultancy services for companies.",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "SCSS",
      },
    ],
    livePreview: "https://mikexado.github.io/Relvise/",
    code: "https://github.com/MikeXado/Relvise",
  },
  {
    id: "huddle",
    img: Huddle,
    title: "Huddle",
    desc: "This is sample responsive landing page , that shows a great combination of images and color . Which can later be used as a promotion of some services offered by a certain company",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
    ],
    livePreview:
      "https://mikexado.github.io/landing-page-with-curved-sections/",
    code: "https://github.com/MikeXado/landing-page-with-curved-sections",
  },
  {
    id: "weather",
    img: weather,
    title: "Weather",
    desc: "This is my first project using the react framework. Here I found out how the map method works, how useState and useEffect work and how can I integrate a map using react",
    tech: [
      {
        id: 1,
        name: "JSX",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
    ],
    livePreview: "https://mikexado.github.io/weather-app-react/",
    code: "https://github.com/MikeXado/weather-app-react",
  },
  {
    id: "todoapp",
    img: todoAppPng,
    title: "Todo App",
    desc: "To make a 'Todo App' exist a lot of ways , here i decide to create it with react using redux . The purpose of this project was to put into practice the previously acquired knowledge related to redux.",
    tech: [
      {
        id: 1,
        name: "JSX",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
      {
        id: 4,
        name: "REDUX",
      },
    ],
    livePreview: "https://mikexado.github.io/Todo-App/",
    code: "https://github.com/MikeXado/Todo-App",
  },
  {
    id: "keeper",
    img: keeper,
    title: "Keeper App",
    desc: "This is a notes application, it comes as an addition to the tasks application only that instead of redux I used useState and hook",
    tech: [
      {
        id: 1,
        name: "JSX",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
    ],
    livePreview: "https://mikexado.github.io/Keeper-App/",
    code: "https://github.com/MikeXado/Keeper-App",
  },
  {
    id: "countries",
    img: restCountries,
    title: "Rest Countries",
    desc: "This is a countries information app . The purpose of this is to obtain knowledge of working with api's and how to filter the data obtained from that API.",
    tech: [
      {
        id: 1,
        name: "JSX",
      },
      {
        id: 2,
        name: "SCSS",
      },
      {
        id: 3,
        name: "REACT",
      },
      {
        id: 4,
        name: "ROUTER DOM",
      },
    ],
    livePreview: "https://mikexado.github.io/rest-countries/#/",
    code: "https://github.com/MikeXado/rest-countries",
  },
];

export const faq = [
  {
    id: 1,
    title: "What technologies are used?",
    desc: "First of all HTML and CSS ,here for better and fast code instead of CSS i use SCSS but my gulp assembly convert this automaticaly in min CSS . If the project requires certain features, i use JS  . Wordpress as CMS and git for version control. Now I also use REACT for better and optimized websites building",
  },
  {
    id: 2,
    title: "What languages he speaks?",
    desc: "Native language = Romanian . Also known = Russian 85 % , English 70%",
  },
  {
    id: 3,
    title: "If I want to put my website on a CMS, he can do it ?",
    desc: "Of course ,I have pretty good knowledge of CMS .So i use WordPress. You will receive a full integration of your website with fields (for this i use ACF plugin ) ,in addition to all this I can introduce it on a hosting",
  },
  {
    id: 4,
    title: "If I want my site to be built with Boostrap can i contact him?",
    desc: "Of course you can, I will gladly do it for you.",
  },
  {
    id: 5,
    title: "We are match if you...",
    desc: "1. Look for an experienced Front-End Developer with boards skill set\n2. aim to create a website for your business\n3. have a shop or a restaurant and you want an e-commerce website\n4. You already have a website transformed from template to code and you don't know what to do next with it\n5. You want a website from scratch\n6. You have great thoughts and you want to share them with others ",
  },
];

export const bio = [
  {
    id: 1,
    text: "My name is Mihai Gurin and i am a freelance front-end developer based in Chisinau , Moldova .",
  },
  {
    id: 2,
    text: "My name is Mihai Gurin and i am a freelance front-end developer based in Chisinau , Moldova . Starting off as a HTML developer many years ago , the digital world won me over early on .",
  },
  {
    id: 3,
    text: "My name is Mihai Gurin and i am a freelance front-end developer based in Chisinau , Moldova . Starting off as a HTML developer many years ago , the digital world won me over early on . It all started with creating small websites for friends and then professionally for small companies in Chisinau.",
  },
  {
    id: 4,
    text: "My name is Mihai Gurin and i am a freelance front-end developer based in Chisinau , Moldova . Starting off as a HTML developer many years ago , the digital world won me over early on . It all started with creating small websites for friends and then professionally for small companies in Chisinau. By combining very strong motivation and technological knowledge , i have opportunity to offer high quality services and an extreme speed of project realization .",
  },
];

export const social = [
  {
    id: "facebook",
    href: "https://www.facebook.com/mihai.gurin.923/",
    img: facebook,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/missshanya21/",
    img: instagram,
  },
  {
    id: "github",
    href: "https://github.com/MikeXado",
    img: github,
  },
];
