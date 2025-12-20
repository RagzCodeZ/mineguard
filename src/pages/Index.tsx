import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProductSection } from "@/components/ProductSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CadiaSection } from "@/components/CadiaSection";
import { AudienceSection } from "@/components/AudienceSection";
import { ROISection } from "@/components/ROISection";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { DemoBookingPanel } from "@/components/DemoBookingPanel";
import { useDemo } from "@/contexts/DemoContext";

const Index = () => {
  const { isOpen, closeDemo } = useDemo();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ProductSection />
        <CaseStudySection />
        <CadiaSection />
        <AudienceSection />
        <ROISection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
      <DemoBookingPanel isOpen={isOpen} onClose={closeDemo} />
    </div>
  );
};

export default Index;
