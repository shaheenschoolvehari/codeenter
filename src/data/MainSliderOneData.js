import shape from '@/assets/images/shapes/slider-1-shape-1.png';
import bannerAiSolutions from '@/assets/images/backgrounds/bannar-3.jpeg';
import bannerItSolutions from '@/assets/images/backgrounds/hero-slider-bg.jpg';
import bannerSoftwareDev from '@/assets/images/backgrounds/bannar-1.jpeg';
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const mainSliderOneData = [
    {
        id: 1,
        shape: null,
        bg: bannerAiSolutions,
        showContent: false,
        hasOverlay: false,
        subTitle: "",
        title: "",
        text: "",
        social: [],
    },
    {
        id: 2,
        shape,
        bg: bannerItSolutions,
        showContent: true,
        hasOverlay: true,
        subTitle: "Wellcome To It-Solution !",
        title: "Get Our Business<br> This It Soluti<span>o</span>n",
        text: "Business a soluion and emirate in the Arab known <br>for luxury city for Company.",
        social: [
            { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
            { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
            { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
            { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
        ],
    },
    {
        id: 3,
        shape: null,
        bg: bannerSoftwareDev,
        showContent: false,
        hasOverlay: false,
        subTitle: "",
        title: "",
        text: "",
        social: [],
    }
];

export default mainSliderOneData;