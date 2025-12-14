import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Database, Truck, Fuel, Lightbulb, Wrench, 
  Headphones, ArrowRight, CheckCircle2, Zap,
  BarChart3, Shield, Globe, Clock, Users
} from "lucide-react";

// Image imports
import servicesHero from "@/assets/services-hero.jpg";
import industrialTanksSunset from "@/assets/industrial-tanks-sunset.jpg";
import fuelStationSolar from "@/assets/fuel-station-solar.jpg";
import engineerInspection from "@/assets/engineer-inspection.jpg";
import gpsTracking from "@/assets/gps-tracking.jpg";
import tankerTrucks from "@/assets/tanker-trucks.jpg";

// Lazy loading image component
const LazyImage = ({ 
  src, 
  alt, 
  className = "",
  parallaxOffset = 0 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  parallaxOffset?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);

  return (
    <motion.div ref={ref} className={`overflow-hidden ${className}`} style={{ y }}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
        }`}
      />
    </motion.div>
  );
};

// Floating Particles
const FloatingParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-royal-gold/30 rounded-full"
        style={{ 
          left: `${Math.random() * 100}%`, 
          top: `${Math.random() * 100}%` 
        }}
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Hero Section
const HeroSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img 
          src={servicesHero} 
          alt="Petroleum services infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/70 via-petroleum-green/50 to-petroleum-green/80" />
      </motion.div>

      <FloatingParticles />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
      />

      <motion.div 
        className="relative z-10 container mx-auto px-4 h-full flex items-center"
        style={{ opacity }}
      >
        <div className={`max-w-4xl ${language === 'ar' ? 'text-right mr-auto' : 'text-left ml-0'}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-royal-gold/20 text-royal-gold rounded-full text-sm font-medium mb-6"
          >
            {t('services.page.label')}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t('services.page.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            {t('services.page.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={`h-1 bg-gradient-to-r from-royal-gold to-royal-gold/30 w-32 ${language === 'ar' ? 'origin-right mr-0 ml-auto' : 'origin-left'}`}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Main Services Section
const MainServicesSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const services = [
    {
      key: 'storage',
      icon: Database,
      image: industrialTanksSunset,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'supplyChain',
      icon: Truck,
      image: gpsTracking,
      color: 'from-green-500 to-emerald-500',
    },
    {
      key: 'fuelStation',
      icon: Fuel,
      image: fuelStationSolar,
      color: 'from-orange-500 to-amber-500',
    },
    {
      key: 'consulting',
      icon: Lightbulb,
      image: engineerInspection,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-ash-gray/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-petroleum-green/10 text-petroleum-green rounded-full text-sm font-medium mb-4">
            {t('services.page.main.label')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('services.page.main.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('services.page.main.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-2xl overflow-hidden shadow-2xl h-[350px] ${
                    isReversed ? 'lg:col-start-2' : ''
                  }`}
                >
                  <LazyImage 
                    src={service.image} 
                    alt={t(`services.page.${service.key}.title`)}
                    className="h-full"
                    parallaxOffset={15}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                  
                  {/* Service icon overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-petroleum-green" />
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  />
                </motion.div>

                {/* Content */}
                <div className={`${isReversed ? 'lg:col-start-1' : ''} ${language === 'ar' ? 'text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-medium mb-4`}
                  >
                    <Icon className="w-4 h-4" />
                    {t(`services.page.${service.key}.label`)}
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-petroleum-green mb-4">
                    {t(`services.page.${service.key}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t(`services.page.${service.key}.desc`)}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[1, 2, 3].map((num) => (
                      <motion.li
                        key={num}
                        initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: num * 0.1 }}
                        className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                      >
                        <CheckCircle2 className="w-5 h-5 text-royal-gold flex-shrink-0" />
                        <span className="text-foreground text-sm">
                          {t(`services.page.${service.key}.point${num}`)}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: language === 'ar' ? -5 : 5 }}
                    className={`inline-flex items-center gap-2 text-petroleum-green font-semibold hover:text-royal-gold transition-colors ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                  >
                    {t('services.page.learnMore')}
                    <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Additional Services
const AdditionalServicesSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const additionalServices = [
    { key: 'fleetManagement', icon: Truck },
    { key: 'roadSupport', icon: Wrench },
    { key: 'longDistance', icon: Globe },
  ];

  return (
    <section className="py-24 bg-petroleum-green relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img src={tankerTrucks} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/20 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('services.page.additional.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.page.additional.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/0 to-royal-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-16 h-16 bg-royal-gold/20 rounded-2xl flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-royal-gold" />
                </motion.div>
                
                <h3 className={`text-xl font-semibold text-white mb-3 ${language === 'ar' ? 'text-right' : ''}`}>
                  {t(`services.page.additional.${service.key}.title`)}
                </h3>
                <p className={`text-white/70 ${language === 'ar' ? 'text-right' : ''}`}>
                  {t(`services.page.additional.${service.key}.desc`)}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-gold to-royal-gold/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us
const WhyChooseUsSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const features = [
    { key: 'expertise', icon: BarChart3 },
    { key: 'reliability', icon: Shield },
    { key: 'support', icon: Headphones },
    { key: 'speed', icon: Clock },
    { key: 'team', icon: Users },
    { key: 'innovation', icon: Zap },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ash-gray/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-petroleum-green/10 text-petroleum-green rounded-full text-sm font-medium mb-4">
            {t('services.page.whyUs.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-4">
            {t('services.page.whyUs.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-white rounded-2xl border border-border hover:border-petroleum-green/30 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-petroleum-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-petroleum-green/20 transition-colors"
                >
                  <Icon className="w-7 h-7 text-petroleum-green" />
                </motion.div>
                
                <h3 className={`text-lg font-semibold text-petroleum-green mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                  {t(`services.page.whyUs.${feature.key}.title`)}
                </h3>
                <p className={`text-muted-foreground text-sm ${language === 'ar' ? 'text-right' : ''}`}>
                  {t(`services.page.whyUs.${feature.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = ({ t, language }: { t: (key: string) => string; language: string }) => (
  <section className="py-24 bg-gradient-to-r from-petroleum-green to-petroleum-green/90">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t('services.page.cta.title')}
        </h2>
        <p className="text-white/80 text-lg mb-8">
          {t('services.page.cta.text')}
        </p>
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-royal-gold text-petroleum-green font-semibold rounded-xl hover:bg-royal-gold/90 transition-colors shadow-lg"
        >
          {t('services.page.cta.button')}
        </motion.a>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const { t, language, dir } = useLanguage();

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      <HeroSection t={t} language={language} />
      <MainServicesSection t={t} language={language} />
      <AdditionalServicesSection t={t} language={language} />
      <WhyChooseUsSection t={t} language={language} />
      <CTASection t={t} language={language} />
      <Footer />
    </div>
  );
};

export default Services;
