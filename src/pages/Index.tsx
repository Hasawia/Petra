import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QuickLinksSection } from "@/components/QuickLinksSection";
import { DetailedServicesSection } from "@/components/DetailedServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { SafetySection } from "@/components/SafetySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Index = () => {
  const location = useLocation();

  useEffect(() => {
  if (location.state?.scrollTo === "services") {
    setTimeout(() => {
      const section = document.getElementById("services");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  if (location.state?.scrollTo === "faq") {
    setTimeout(() => {
      const section = document.getElementById("faq");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, [location]);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <QuickLinksSection />
        <DetailedServicesSection />
        <AboutSection />
        <SafetySection />
        <FAQSection />
        <CTASection />
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
};

export default Index;
