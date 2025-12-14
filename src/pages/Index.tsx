import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QuickLinksSection } from "@/components/QuickLinksSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { SafetySection } from "@/components/SafetySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <QuickLinksSection />
        <DetailedServicesSection />
        <AboutSection />
        <SafetySection />
        <ProjectsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
};

export default Index;
