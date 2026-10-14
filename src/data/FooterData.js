import logo from "@/assets/images/logo-light.png";
import footerLogo from "@/assets/images/footer-logo.png";
import logo4 from "@/assets/images/logo-4.png";
import logo6 from "@/assets/images/logo-6.png";
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import footerBgTwo from "@/assets/images/backgrounds/footer-bg-2-1.jpg";
import footerBgThree from "@/assets/images/backgrounds/footer-bg-3-1.jpg";
import footerBgFour from "@/assets/images/backgrounds/footer-bg-4-1.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import shapeTwo from "@/assets/images/shapes/footer-2-shape.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";
import post1 from "@/assets/images/blog/lp-1-1.jpg";
import post2 from "@/assets/images/blog/lp-1-2.jpg";
import post6 from "@/assets/images/blog/lp-1-6.jpg";
import post7 from "@/assets/images/blog/lp-1-7.jpg";

import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const widgetSocial = [
  { id: 1, icon: faFacebookF, href: "https://facebook.com", title: "Facebook" },
  {
    id: 2,
    icon: faPinterestP,
    href: "https://pinterest.com",
    title: "Pinterest",
  },
  { id: 3, icon: faTwitter, href: "https://twitter.com", title: "Twitter" },
  {
    id: 4,
    icon: faInstagram,
    href: "https://instagram.com",
    title: "Instagram",
  },
];

const posts = {
  title: "Recent Posts",
  posts: [
    {
      id: 1,
      image: post1,
      meta: "23 jun 2023",
      title: "We round solution york Blog",
      href: "blog-details",
      icon: "icofont-calendar"
    },
    {
      id: 2,
      image: post2,
      meta: "23 jun 2023",
      title: "We Should be Descriptive",
      href: "blog-details",
      icon: "icofont-calendar"
    },
  ],
};
const postsSix = {
  title: "Recent Posts",
  posts: [
    {
      id: 1,
      image: post6,
      meta: "20 Nov 2023",
      title: "This Specific Issue Network Security",
      href: "blog-details",
      icon: "icofont-calendar"
    },
    {
      id: 2,
      image: post7,
      meta: "23 jun 2023",
      title: "Looking For a Solution Related",
      href: "blog-details",
      icon: "icofont-calendar"
    },
  ],
};

const footerData = {
  footerLogo,
  logo,
  logo4,
  logo6,
  footerBg,
  footerBgTwo,
  footerBgThree,
  footerBgFour,
  shape,
  shapeTwo,
  footerAbout,
  posts,
  postsSix,
  aboutTwoText: "Code Enter is a forward-thinking technology company specializing in tailored software development, agentic AI, and digital transformation.",
  widgetText:
    "Empowering businesses worldwide with customized software, next-generation AI workflows, and innovative digital strategies.",
  widgetInfo: {
    time: "Mon - Sat: 9.00 am. - 7.00 pm.",
    timeIcon: "icofont-clock-time",
    location: "M-88 Sadiq trade center Gulberg Lahore",
    locationIcon: "icofont-location-pin",
    tel: "+92 317 1114440",
    telIcon: "icofont-phone",
    subHref: "tel",
    email: "info@codenter.com",
    emailIcon: "icofont-envelope",
  },
  widgetSocial,
  services: [
    { id: 1, href: "#services", title: "Agentic AI & LLMs" },
    { id: 2, href: "#services", title: "Custom Software" },
    { id: 3, href: "#services", title: "Web & Mobile Apps" },
    { id: 4, href: "#services", title: "SEO & Digital Growth" },
    { id: 5, href: "#services", title: "Cloud Integration" },
  ],
  quickLinks: [
    { id: 1, href: "#home", title: "Home" },
    { id: 2, href: "#services", title: "Services" },
    { id: 3, href: "#about", title: "About Us" },
    { id: 4, href: "#team", title: "Expert Team" },
    { id: 5, href: "#contact", title: "Contact" },
  ],
  bottomLinks: [
    { id: 1, href: "#home", title: "Home" },
    { id: 2, href: "#services", title: "Services" },
    { id: 3, href: "#about", title: "About Us" },
    { id: 4, href: "#contact", title: "Contact" },
  ],
};

export default footerData;
