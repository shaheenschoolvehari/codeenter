import main_logo from "@/assets/images/logo-dark.png";
import logo_light from "@/assets/images/logo-light.png";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const sidebarOneText =
  "Code Enter is dedicated to empowering businesses with innovative IT and AI solutions tailored to your unique needs.";

const singleNavItems = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'About', href: 'about' },
  { name: 'Team', href: 'team' },
  { name: 'Contact', href: 'contact' },
];

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/#home",
  },
  {
    id: 2,
    name: "Services",
    href: "/#services",
  },
  {
    id: 3,
    name: "About",
    href: "/#about",
  },
  {
    id: 4,
    name: "Team",
    href: "/#team",
  },
  {
    id: 5,
    name: "Contact",
    href: "/#contact",
  },
];

const social = [
  { icon: faFacebookF, link: "https://facebook.com" },
  { icon: faPinterestP, link: "https://pinterest.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faInstagram, link: "https://instagram.com" },
];

const topbarTwoCarousel = [
  {
    id: 1,
    text: "Welcome to Code Enter - Digital Innovators",
  },
  {
    id: 2,
    text: "Welcome to Code Enter - Digital Innovators",
  },
];

const headerData = {
  topbarTwoCarousel,
  icons: [
    {
      id: 1,
      icon: faEnvelope,
      content: "info@codenter.com",
      subHref: "mailto",
    },
    {
      id: 2,
      icon: faMapMarkerAlt,
      content: "M-88 Sadiq trade center Gulberg Lahore",
      href: "https://maps.google.com/?q=Sadiq+Trade+Center+Gulberg+Lahore",
    },
    {
      id: 3,
      icon: faPhoneAlt,
      content: "+92 317 1114440",
      subHref: "tel",
    },
  ],
  navItems,
  social,
  main_logo,
  logo_light,
  sidebarOneText,
  singleNavItems,
};

export default headerData;
