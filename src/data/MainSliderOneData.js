import shape from '@/assets/images/shapes/slider-1-shape-1.png';
import bannerAiSolutions from '@/assets/images/backgrounds/bannar-3.jpeg';
import bannerItSolutions from '@/assets/images/backgrounds/hero-slider-bg.jpg';
import bannerSoftwareDev from '@/assets/images/backgrounds/bannar-1.jpeg';
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const mainSliderOneData = [
    {
        id: 1,
        shape,
        bg: bannerAiSolutions,
        showContent: true,
        hasOverlay: true,
        subTitle: "Welcome to Code Enter",
        title: "Empowering Growth with<br> Next-Gen AI Soluti<span>o</span>ns",
        text: "From Agentic AI & multi-agent workflows to custom LLMs, <br>we build intelligent systems tailored to your business.",
        social: [],
    },
    {
        id: 2,
        shape,
        bg: bannerItSolutions,
        showContent: true,
        hasOverlay: true,
        subTitle: "Code Enter — Digital Innovators",
        title: "Transforming Ideas Into<br> Intelligent Soluti<span>o</span>ns",
        text: "Helping businesses grow smarter, faster, and more efficiently <br>with cutting-edge technology and tailored IT services.",
        social: [],
    },
    {
        id: 3,
        shape,
        bg: bannerSoftwareDev,
        showContent: true,
        hasOverlay: true,
        subTitle: "Custom Software Engineering",
        title: "Scalable, Secure &amp;<br> Future-Ready S<span>o</span>ftware",
        text: "Fully customized web, mobile, and enterprise platforms <br>engineered to solve your unique business challenges.",
        social: [],
    }
];

export default mainSliderOneData;