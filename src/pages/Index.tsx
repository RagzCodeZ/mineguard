import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProductSection } from "@/components/ProductSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { AudienceSection } from "@/components/AudienceSection";
import { ROISection } from "@/components/ROISection";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ProductSection />
        <CaseStudySection />
        <AudienceSection />
        <ROISection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
