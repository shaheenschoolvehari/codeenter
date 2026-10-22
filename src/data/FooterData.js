import logo from "@/assets/images/logo-light.png";
import footerCubesBg from "@/assets/images/backgrounds/footer-cubes-bg.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";

import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const widgetSocial = [
  { id: 1, icon: faFacebookF, href: "https://facebook.com", title: "Facebook" },
  { id: 2, icon: faPinterestP, href: "https://pinterest.com", title: "Pinterest" },
  { id: 3, icon: faTwitter, href: "https://twitter.com", title: "Twitter" },
  { id: 4, icon: faInstagram, href: "https://instagram.com", title: "Instagram" },
];

const footerData = {
  logo,
  footerCubesBg,
  shape,
  footerAbout,
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
    { id: 1, href: "/custom-software-development", title: "Custom Software Development" },
    { id: 2, href: "/ai-enterprise-success", title: "AI Engineered for Enterprise Success" },
    { id: 3, href: "/digital-marketing-seo", title: "Digital Marketing & Technical SEO Services" },
  ],
  quickLinks: [
    { id: 1, href: "/#home", title: "Home" },
    { id: 2, href: "/#services", title: "Services" },
    { id: 3, href: "/#about", title: "About" },
    { id: 4, href: "/#team", title: "Team" },
    { id: 5, href: "/#contact", title: "Contact" },
  ],
  bottomLinks: [
    { id: 1, href: "/#home", title: "Home" },
    { id: 2, href: "/#services", title: "Services" },
    { id: 3, href: "/#about", title: "About" },
    { id: 4, href: "/#team", title: "Team" },
    { id: 5, href: "/#contact", title: "Contact" },
  ],
};

export default footerData;
