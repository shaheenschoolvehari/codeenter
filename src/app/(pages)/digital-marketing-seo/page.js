import Layout from "@/components/Layout/Layout";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Footer from "@/components/Footer/Footer";
import marketingBg from "@/assets/images/backgrounds/page-header-bg-marketing.jpg";

export const metadata = {
  title: "Digital Marketing & Technical SEO Services - Code Enter",
  description:
    "Data-driven marketing campaigns, technical SEO audits, search visibility optimization, and performance strategies to maximize inbound ROI.",
};

const DigitalMarketingSeoPage = () => {
  return (
    <Layout pageTitle="Digital Marketing & Technical SEO Services">
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader
        title="Digital Marketing & Technical SEO Services"
        subTitle="Digital Marketing & Technical SEO Services"
        bgImage={marketingBg}
      />
      <ServiceDetails currentId="/digital-marketing-seo" />
      <Footer />
    </Layout>
  );
};

export default DigitalMarketingSeoPage;
