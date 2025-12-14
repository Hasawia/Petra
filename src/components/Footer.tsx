import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { key: "footer.links.home", href: "#home" },
    { key: "footer.links.services", href: "#services" },
    { key: "footer.links.about", href: "#about" },
    { key: "footer.links.contact", href: "#contact" }
  ];

  const services = [
    { key: "service.dropdown.storage", href: "#services" },
    { key: "service.dropdown.logistics", href: "#services" },
    { key: "service.dropdown.station", href: "#services" },
    { key: "service.dropdown.consulting", href: "#services" }
  ];

  return (
    <footer className="bg-petroleum-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              PETRA<span className="text-royal-gold">.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-royal-gold flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-royal-gold flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-royal-gold flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-royal-gold flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-white/70 hover:text-royal-gold transition-colors text-sm">
                    {t(service.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>Amman, Jordan</li>
              <li>+962 6 XXX XXXX</li>
              <li>info@petra-oil.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Petra Oil Services. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
