import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { AboutPanel } from "@/components/AboutPanel";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              PETRA
              <span className="text-royal-gold">.</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center ${
              language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"
            }`}
          >
            <a
              href="/"
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.home")}
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center ${
                  language === "ar" ? "space-x-reverse" : ""
                } space-x-1 text-sm font-medium transition-colors hover:text-royal-gold ${
                  isScrolled ? "text-petroleum-green" : "text-white"
                }`}
              >
                <span>{t("nav.services")}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white shadow-lg border-border z-[100]">
                <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted text-foreground">
                  {t("service.dropdown.storage")}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted text-foreground">
                  {t("service.dropdown.logistics")}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted text-foreground">
                  {t("service.dropdown.station")}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted focus:bg-muted text-foreground">
                  {t("service.dropdown.consulting")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Button */}
            <button
              onClick={() => setIsAboutPanelOpen(true)}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.about")}
            </button>

            <a
              href="#faq"
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.faq")}
            </a>

            {/* Language Toggle */}
            <Button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              size="sm"
              className="bg-petroleum-green hover:bg-petroleum-green/90 text-white transition-all"
            >
              <Globe
                className={`h-4 w-4 text-royal-gold ${
                  language === "ar" ? "ml-2" : "mr-2"
                }`}
              />
              {t("nav.language")}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? "text-petroleum-green" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="/"
                className="block text-petroleum-green hover:text-royal-gold"
              >
                {t("nav.home")}
              </a>
              <div className="space-y-2">
                <div className="text-petroleum-green font-medium">
                  {t("nav.services")}
                </div>
                <a
                  href="#services"
                  className="block pl-4 text-sm text-muted-foreground hover:text-royal-gold"
                >
                  {t("service.dropdown.storage")}
                </a>
                <a
                  href="#services"
                  className="block pl-4 text-sm text-muted-foreground hover:text-royal-gold"
                >
                  {t("service.dropdown.logistics")}
                </a>
                <a
                  href="#services"
                  className="block pl-4 text-sm text-muted-foreground hover:text-royal-gold"
                >
                  {t("service.dropdown.station")}
                </a>
                <a
                  href="#services"
                  className="block pl-4 text-sm text-muted-foreground hover:text-royal-gold"
                >
                  {t("service.dropdown.consulting")}
                </a>
              </div>
              <button
                onClick={() => {
                  setIsAboutPanelOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block text-petroleum-green hover:text-royal-gold w-full text-left"
              >
                {t("nav.about")}
              </button>
              <a
                href="#faq"
                className="block text-petroleum-green hover:text-royal-gold"
              >
                {t("nav.faq")}
              </a>
              <Button
                onClick={() =>
                  setLanguage(language === "en" ? "ar" : "en")
                }
                size="sm"
                className="w-full bg-petroleum-green hover:bg-petroleum-green/90"
              >
                <Globe
                  className={`h-4 w-4 text-royal-gold ${
                    language === "ar" ? "ml-2" : "mr-2"
                  }`}
                />
                {t("nav.language")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Panel */}
      <AboutPanel
        isOpen={isAboutPanelOpen}
        onClose={() => setIsAboutPanelOpen(false)}
        placement={language === "ar" ? "right" : "left"} // اتجاه البانل ديناميكي
      />
    </motion.nav>
  );
};
