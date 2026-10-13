import Layout from "@/components/Layout/Layout";
import MainSliderOne from "@/components/MainSliderOne/MainSliderOne";
import FeatureOne from "@/components/FeatureOne/FeatureOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import AboutOne from "@/components/AboutOne/AboutOne";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import TeamOne from "@/components/TeamOne/TeamOne";
import OurSolution from "@/components/OurSolution/OurSolution";
import FeatureTwo from "@/components/FeatureTwo/FeatureTwo";
import PojectOne from "@/components/ProjectOne/ProjectOne";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import SlideText from "@/components/SlideText/SlideText";
import ContactOne from "@/components/ContactOne/ContactOne";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import HeaderSingle from "@/components/Header/HeaderSingle";
import HeaderSingleCloned from "@/components/Header/HeaderSingleCloned";

export const metadata = {
  title: "Code Enter - IT Solution & Business",
  description:
    "Code Enter is a modern IT Solution, Corporate & Business Website.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const page = () => {
  return (
    <Layout pageTitle='home' onePage={true}>
      <TopBar />
      <HeaderSingle onePage={true} />
      <HeaderSingleCloned onePage={true} />
      <MainSliderOne />
      <FeatureOne />
      <CtaOne />
      <ServiceOne />
      <AboutOne />
      <FunFactOne />
      <CtaTwo />
      <TeamOne />
      <OurSolution />
      <FeatureTwo />
      {/* <PojectOne /> -- Future update: Uncomment to display Projects section */}
      <ClientCarousel />
      <SlideText />
      <ContactOne />
      <Footer />
    </Layout>
  );
};

export default page;
