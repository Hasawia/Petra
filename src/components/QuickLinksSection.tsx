import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLangLink } from "@/hooks/useLangLink";
import { HelpCircle, Phone, Shield } from "lucide-react";

const quickLinks = [
  {
    titleKey: "quicklinks.faq.title",
    descKey: "quicklinks.faq.desc",
    ctaKey: "quicklinks.faq.cta",
    icon: HelpCircle,
    href: "#faq"
  },
  {
    titleKey: "quicklinks.contact.title",
    descKey: "quicklinks.contact.desc",
    ctaKey: "quicklinks.contact.cta",
    icon: Phone,
    href: "/contact"
  },
  {
    titleKey: "quicklinks.safety.title",
    descKey: "quicklinks.safety.desc",
    ctaKey: "quicklinks.safety.cta",
    icon: Shield,
    href: "#safety"
  }
];

export const QuickLinksSection = () => {
  const { t } = useLanguage();
  const langLink = useLangLink();

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-petroleum-green/10 flex items-center justify-center mb-4">
                    <link.icon className="w-7 h-7 text-petroleum-green" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {t(link.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {t(link.descKey)}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white"
                    asChild
                  >
                    <a
                      href={
                        link.href.startsWith("#")
                          ? link.href
                          : langLink(link.href)
                      }
                    >
                      {t(link.ctaKey)}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
