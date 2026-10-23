import Layout from "@/components/Layout/Layout";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Footer from "@/components/Footer/Footer";
import softwareBg from "@/assets/images/backgrounds/page-header-bg-software.jpg";

export const metadata = {
  title: "Custom Software Development - Code Enter",
  description:
    "Tailored, scalable web, mobile, and cloud software engineering built to solve complex business challenges and drive operational efficiency.",
};

const CustomSoftwareDevelopmentPage = () => {
  return (
    <Layout pageTitle="Custom Software Development">
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader
        title="Custom Software Development"
        subTitle="Custom Software Development"
        bgImage={softwareBg}
      />
      <ServiceDetails currentId="/custom-software-development" />
      <Footer />
    </Layout>
  );
};

export default CustomSoftwareDevelopmentPage;
