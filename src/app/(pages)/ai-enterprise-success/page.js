import Layout from "@/components/Layout/Layout";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Footer from "@/components/Footer/Footer";
import aiBg from "@/assets/images/backgrounds/page-header-bg-ai.jpg";

export const metadata = {
  title: "AI Engineered for Enterprise Success - Code Enter",
  description:
    "Custom enterprise AI architectures, autonomous agent workflows, and domain-specific LLMs built to accelerate productivity and market success.",
};

const AiEnterpriseSuccessPage = () => {
  return (
    <Layout pageTitle="AI Engineered for Enterprise Success">
      <HeaderInner />
      <HeaderInnerCloned />
      <PageHeader
        title="AI Engineered for Enterprise Success"
        subTitle="AI Engineered for Enterprise Success"
        bgImage={aiBg}
      />
      <ServiceDetails currentId="/ai-enterprise-success" />
      <Footer />
    </Layout>
  );
};

export default AiEnterpriseSuccessPage;
