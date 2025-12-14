import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Truck, Users, MapPin, Gauge, Shield, Target, 
  Fuel, Route, Clock, Award, CheckCircle2, Zap
} from "lucide-react";

// Image imports
import activitiesHero from "@/assets/activities-hero.jpg";
import driversTeam from "@/assets/drivers-team.jpg";
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
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-royal-gold/30 rounded-full"
        style={{ 
          left: `${Math.random() * 100}%`, 
          top: `${Math.random() * 100}%` 
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 3,
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
          src={activitiesHero} 
          alt="Petroleum transport activities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/70 via-petroleum-green/50 to-petroleum-green/80" />
      </motion.div>

      <FloatingParticles />

      {/* Light sweep */}
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
            {t('activities.label')}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t('activities.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            {t('activities.hero.subtitle')}
          </motion.p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={`h-1 bg-gradient-to-r from-royal-gold to-royal-gold/30 w-32 ${language === 'ar' ? 'origin-right mr-0 ml-auto' : 'origin-left'}`}
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-royal-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Stats Counter
const StatsSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const stats = [
    { key: 'operations', value: '5000+', icon: Truck },
    { key: 'kilometers', value: '10M+', icon: Route },
    { key: 'team', value: '200+', icon: Users },
    { key: 'experience', value: '10+', icon: Award },
  ];

  return (
    <section className="py-16 bg-petroleum-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-royal-gold/20 rounded-2xl flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-royal-gold" />
                </motion.div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-white/70 text-sm">{t(`activities.stats.${stat.key}`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Main Content Section
const ContentSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      key: 'expertise',
      icon: Target,
      image: tankerTrucks,
    },
    {
      key: 'fleet',
      icon: Truck,
      image: gpsTracking,
    },
    {
      key: 'team',
      icon: Users,
      image: driversTeam,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-ash-gray/30">
      <div className="container mx-auto px-4">
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-6">
            {t('activities.intro.title')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('activities.intro.text')}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-royal-gold to-transparent w-48 mx-auto mt-8"
          />
        </motion.div>

        {/* Content blocks */}
        <div className="space-y-24">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReversed && language !== 'ar' ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Text */}
                <div className={`${isReversed && language !== 'ar' ? 'lg:col-start-2' : ''} ${language === 'ar' ? 'text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 bg-petroleum-green/10 rounded-2xl flex items-center justify-center mb-6 ${language === 'ar' ? 'mr-0 ml-auto' : ''}`}
                  >
                    <Icon className="w-8 h-8 text-petroleum-green" />
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-petroleum-green mb-4">
                    {t(`activities.section.${section.key}.title`)}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(`activities.section.${section.key}.text`)}
                  </p>

                  <ul className="space-y-3">
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
                        <span className="text-foreground">
                          {t(`activities.section.${section.key}.point${num}`)}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                    isReversed && language !== 'ar' ? 'lg:col-start-1' : ''
                  }`}
                >
                  <LazyImage 
                    src={section.image} 
                    alt={t(`activities.section.${section.key}.title`)}
                    className="h-[400px]"
                    parallaxOffset={20}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/30 to-transparent" />
                  
                  {/* Light sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Capabilities Grid
const CapabilitiesSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const capabilities = [
    { key: 'crudeOil', icon: Fuel },
    { key: 'diesel', icon: Gauge },
    { key: 'gasoline', icon: Zap },
    { key: 'lubricants', icon: Shield },
    { key: 'monitoring', icon: MapPin },
    { key: 'safety', icon: Clock },
  ];

  return (
    <section className="py-24 bg-petroleum-green relative overflow-hidden">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/20 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('activities.capabilities.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('activities.capabilities.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/0 to-royal-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-14 h-14 bg-royal-gold/20 rounded-xl flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 text-royal-gold" />
                  </motion.div>
                  
                  <h3 className={`text-lg font-semibold text-white mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                    {t(`activities.capabilities.${cap.key}.title`)}
                  </h3>
                  <p className={`text-white/70 text-sm ${language === 'ar' ? 'text-right' : ''}`}>
                    {t(`activities.capabilities.${cap.key}.desc`)}
                  </p>
                </div>

                {/* Progress line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-royal-gold to-royal-gold/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  style={{ transformOrigin: language === 'ar' ? 'right' : 'left' }}
                />
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
  <section className="py-24 bg-gradient-to-b from-ash-gray/30 to-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-6">
          {t('activities.cta.title')}
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          {t('activities.cta.text')}
        </p>
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-petroleum-green text-white font-semibold rounded-xl hover:bg-petroleum-green/90 transition-colors shadow-lg shadow-petroleum-green/30"
        >
          {t('activities.cta.button')}
        </motion.a>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-royal-gold font-medium"
        >
          {t('activities.cta.signature')}
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const Activities = () => {
  const { t, language, dir } = useLanguage();

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      <HeroSection t={t} language={language} />
      <StatsSection t={t} language={language} />
      <ContentSection t={t} language={language} />
      <CapabilitiesSection t={t} language={language} />
      <CTASection t={t} language={language} />
      <Footer />
    </div>
  );
};

export default Activities;
