import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLangLink } from "@/hooks/useLangLink";
import logo from "@/assets/PETRA-Logo.png";
import { AboutPanel } from "@/components/AboutPanel";

export const Footer = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);
  const langLink = useLangLink();
  const quickLinks = [
    { key: "footer.links.home", href: langLink("/") },
    { key: "footer.links.services", href: "#services" }, // scroll داخلي
    { key: "footer.links.about", href: "#about" }, // scroll داخلي
    { key: "footer.links.contact", href: langLink("/contact") },
  ];

  const services = [
    { key: "service.dropdown.storage", href: "#services" },
    { key: "service.dropdown.logistics", href: "#services" },
    { key: "service.dropdown.station", href: "#services" },
    { key: "service.dropdown.consulting", href: "#services" },
  ];

  // دالة التمرير لقسم الخدمات
  const handleScrollToServices = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("services");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "services" } });
    }
  };

  return (
    <>
      <footer className="bg-petroleum-green text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <a href="/" className="flex items-center space-x-2 mb-4">
                <img
                  src={logo}
                  alt="Petra Logo"
                  className="h-10 w-auto transition-all duration-300"
                />
                <div className="text-2xl font-bold text-white">PETRA</div>
              </a>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {t("footer.description")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  if (link.key === "footer.links.about") {
                    return (
                      <li key={index}>
                        <button
                          onClick={() => setIsAboutPanelOpen(true)}
                          className="text-white/70 hover:text-royal-gold transition-colors text-sm"
                        >
                          {t(link.key)}
                        </button>
                      </li>
                    );
                  } else if (link.key === "footer.links.services") {
                    return (
                      <li key={index}>
                        <button
                          onClick={handleScrollToServices}
                          className="text-white/70 hover:text-royal-gold transition-colors text-sm"
                        >
                          {t(link.key)}
                        </button>
                      </li>
                    );
                  }
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-royal-gold transition-colors text-sm"
                      >
                        {t(link.key)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t("footer.services")}
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={handleScrollToServices}
                      className="text-white/70 hover:text-royal-gold transition-colors text-sm"
                    >
                      {t(service.key)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>
                  <div
                    className={`flex items-center ${
                      language === "ar"
                        ? "flex-row-reverse justify-center md:justify-end gap-2"
                        : "gap-2"
                    }`}
                  >
                    <MapPin className="text-emdad-gold" size={20} />
                    <span>Syria, Damascus</span>
                  </div>
                </li>
                <li>
                  <div
                    className={`flex items-center ${
                      language === "ar"
                        ? "flex-row-reverse justify-center md:justify-end gap-3"
                        : "gap-3"
                    }`}
                  >
                    <Phone className="text-emdad-gold" size={20} />
                    <span className="text-gray-300" dir="ltr">
                      +963 934 039 444
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className={`flex items-center ${
                      language === "ar"
                        ? "flex-row-reverse justify-center md:justify-end gap-3"
                        : "gap-3"
                    }`}
                  >
                    <Mail className="text-emdad-gold" size={20} />
                    <span className="text-gray-300" dir="ltr">
                      info@petra-co.com.sy
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
            <p>
              © {new Date().getFullYear()} Petra Oil Services.{" "}
              {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>

      {/* About Panel */}
      <AboutPanel
        isOpen={isAboutPanelOpen}
        onClose={() => setIsAboutPanelOpen(false)}
        placement={language === "ar" ? "right" : "left"}
      />
    </>
  );
};
