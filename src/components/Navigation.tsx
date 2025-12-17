import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { AboutPanel } from "@/components/AboutPanel";
import logo from "@/assets/PETRA-Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLangLink } from "@/hooks/useLangLink";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const langLink = useLangLink();
  const navigate = useNavigate();
  const location = useLocation();

  /* ===== Scroll Behaviour ===== */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ===== Scroll To FAQ ===== */
  const handleScrollToFAQ = () => {
    const homePath = langLink("/");

    if (location.pathname === homePath) {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(homePath, { state: { scrollTo: "faq" } });
    }
  };

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
            <Link to={langLink("/")} className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Petra Logo"
                className="h-10 w-auto transition-all duration-300"
              />
              <div
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-petroleum-green" : "text-white"
                }`}
              >
                PETRA
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center ${
              language === "ar" ? "space-x-reverse space-x-8" : "space-x-8"
            }`}
          >
            <Link to={langLink("/")}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.home")}
           </Link>

            {/* Services */}
            <Link to={langLink("/contact")}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.contact")}
            </Link>

            {/* About */}
            <button
              onClick={() => setIsAboutPanelOpen(true)}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.about")}
            </button>

            {/* FAQ */}
            <button
              onClick={handleScrollToFAQ}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.faq")}
            </button>

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
              <Link to={langLink("/")}
                className="block text-petroleum-green hover:text-royal-gold"
              >
                {t("nav.home")}
             </Link>

               <Link to={langLink("/contact")}
              className={`text-sm font-medium transition-colors hover:text-royal-gold ${
                isScrolled ? "text-petroleum-green" : "text-white"
              }`}
            >
              {t("nav.contact")}
              </Link>

              <button
                onClick={() => {
                  setIsAboutPanelOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block text-petroleum-green hover:text-royal-gold w-full text-left"
              >
                {t("nav.about")}
              </button>

              <button
                onClick={handleScrollToFAQ}
                className="block text-petroleum-green hover:text-royal-gold w-full text-left"
              >
                {t("nav.faq")}
              </button>

              <Button
                onClick={() => setLanguage(language === "en" ? "ar" : "en")}
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
        placement={language === "ar" ? "right" : "left"}
      />
    </motion.nav>
  );
};
