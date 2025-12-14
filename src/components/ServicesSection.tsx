import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import storageImg from "@/assets/service-storage.jpg";
import logisticsImg from "@/assets/service-logistics.jpg";
import stationImg from "@/assets/service-station.jpg";
import consultingImg from "@/assets/service-consulting.jpg";

interface Service {
  titleKey: string;
  image: string;
  ctaKey: string;
}

const services: Service[] = [
  {
    titleKey: "services.storage.title",
    image: storageImg,
    ctaKey: "services.storage.cta"
  },
  {
    titleKey: "services.logistics.title",
    image: logisticsImg,
    ctaKey: "services.logistics.cta"
  },
  {
    titleKey: "services.station.title",
    image: stationImg,
    ctaKey: "services.station.cta"
  },
  {
    titleKey: "services.consulting.title",
    image: consultingImg,
    ctaKey: "services.consulting.cta"
  }
];

export const ServicesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted" id="services">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 min-h-[3.5rem]">
                      {t(service.titleKey)}
                    </h3>
                    <Button
                      variant="outline"
                      className="w-full border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white transition-all"
                    >
                      {t(service.ctaKey)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg mb-6">
            {t('services.cta.title')}
          </p>
          <Button
            size="lg"
            className="bg-petroleum-green hover:bg-petroleum-green/90 text-white px-8 py-6 text-lg shadow-lg"
          >
            {t('services.cta.button')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
