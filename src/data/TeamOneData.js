import image1 from '@/assets/images/team/team-1-1.jpg';
import image2 from '@/assets/images/team/team-1-2.jpg';
import image3 from '@/assets/images/team/team-1-3.jpg';
import image4 from '@/assets/images/team/team-1-4.jpg';
import image5 from '@/assets/images/team/team-1-5.jpg';
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const teamOneData = {
    tagLine: "Our Expert Team",
    title: "Meet the Innovators Behind Code Enter",
    title2: "Meet Our Leadership & Engineering Team",
    // 5 Team Member Cards (Add more cards here anytime in future)
    carouselData: [
        // Member 1
        {
            id: 1,
            image: image1,
            title: "Team Member 1",
            href: "#team",
            designation: "Founder & CEO",
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ]
        },
        // Member 2
        {
            id: 2,
            image: image2,
            title: "Team Member 2",
            href: "#team",
            designation: "Lead AI & ML Architect",
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ]
        },
        // Member 3
        {
            id: 3,
            image: image3,
            title: "Team Member 3",
            href: "#team",
            designation: "Head of Software Engineering",
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ]
        },
        // Member 4
        {
            id: 4,
            image: image4,
            title: "Team Member 4",
            href: "#team",
            designation: "Principal Cloud Architect",
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ]
        },
        // Member 5
        {
            id: 5,
            image: image5,
            title: "Team Member 5",
            href: "#team",
            designation: "Senior Full-Stack Developer",
            socials: [
                { id: 1, icon: faFacebookF, link: "https://facebook.com", name: "Facebook" },
                { id: 2, icon: faPinterestP, link: "https://pinterest.com", name: "Pinterest" },
                { id: 3, icon: faTwitter, link: "https://twitter.com", name: "Twitter" },
                { id: 4, icon: faInstagram, link: "https://instagram.com", name: "Instagram" },
            ]
        }
    ]
};

export default teamOneData;