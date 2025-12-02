import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import PromiseSection from "@/components/home/PromiseSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <PromiseSection />
      <StatsSection />
      <ServicesPreview />
    </Layout>
  );
};

export default Index;
