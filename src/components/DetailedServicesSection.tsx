import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Warehouse, Truck, Fuel, Wrench } from "lucide-react";

import storageImg from "@/assets/service-storage.jpg";
import logisticsImg from "@/assets/service-logistics.jpg";
import stationImg from "@/assets/service-station.jpg";
import consultingImg from "@/assets/service-consulting.jpg";

const services = [
  {
    titleKey: "detailed.storage.title",
    descKey: "detailed.storage.desc",
    ctaKey: "detailed.storage.cta",
    icon: Warehouse,
    image: storageImg
  },
  {
    titleKey: "detailed.logistics.title",
    descKey: "detailed.logistics.desc",
    ctaKey: "detailed.logistics.cta",
    icon: Truck,
    image: logisticsImg
  },
  {
    titleKey: "detailed.station.title",
    descKey: "detailed.station.desc",
    ctaKey: "detailed.station.cta",
    icon: Fuel,
    image: stationImg
  },
  {
    titleKey: "detailed.consulting.title",
    descKey: "detailed.consulting.desc",
    ctaKey: "detailed.consulting.cta",
    icon: Wrench,
    image: consultingImg
  }
];

export const DetailedServicesSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 bg-background" id="services" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 bg-card h-full">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Image */}
                    <div className="relative w-full lg:w-2/5 h-48 lg:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-petroleum-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-royal-gold flex items-center justify-center shadow-md">
                        <service.icon className="w-6 h-6 text-petroleum-green" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {t(service.titleKey)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {t(service.descKey)}
                        </p>
                      </div>

                      {/* Decorative CTA (Non-clickable) */}
                      <div className="mt-6 flex items-center gap-3">
                        <div className="w-10 h-[2px] bg-royal-gold transition-all duration-300 group-hover:w-16" />
                        <span className="text-sm text-royal-gold font-medium tracking-wide">
                          {t(service.ctaKey)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
