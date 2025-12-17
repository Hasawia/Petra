import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Shield, AlertTriangle, Truck, UserCheck, 
  Radio, FileCheck, Award, Target, CheckCircle2,
  Flame, Camera, Settings, ClipboardCheck, BookOpen,
  HardHat, Eye, MapPin, Bell, Gauge, Lock
} from "lucide-react";
import { useLangLink } from "@/hooks/useLangLink";

// Image imports
import safetyHero from "@/assets/safety-hero.jpg";
import emergencyTraining from "@/assets/emergency-training.jpg";
import engineerInspection from "@/assets/engineer-inspection.jpg";
import gpsTracking from "@/assets/gps-tracking.jpg";
import safetySystems from "@/assets/safety-systems.jpg";

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
          src={safetyHero} 
          alt="Safety operations" 
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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-20 h-20 bg-royal-gold/20 rounded-full flex items-center justify-center mb-6 ${language === 'ar' ? 'mr-0 ml-auto' : ''}`}
          >
            <Shield className="w-10 h-10 text-royal-gold" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t('safety.page.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            {t('safety.page.hero.subtitle')}
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

// Intro Section
const IntroSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-ash-gray/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-petroleum-green/10 text-petroleum-green rounded-full text-sm font-medium mb-6">
            {t('safety.page.intro.label')}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-6">
            {t('safety.page.intro.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t('safety.page.intro.text1')}
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('safety.page.intro.text2')}
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-royal-gold to-transparent w-48 mx-auto mt-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Daily Procedures Section
const DailyProceduresSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const procedures = [
    { key: 'vehicleInspection', icon: Truck },
    { key: 'driverAssessment', icon: UserCheck },
    { key: 'emergencyPlans', icon: AlertTriangle },
    { key: 'monitoringSystems', icon: Radio },
  ];

  return (
    <section className="py-24 bg-petroleum-green relative overflow-hidden">
      <FloatingParticles />
      
      <div className="absolute inset-0 opacity-10">
        <img src={safetySystems} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/20 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('safety.page.procedures.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('safety.page.procedures.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Procedures list */}
          <div className="space-y-4">
            {procedures.map((proc, index) => {
              const Icon = proc.icon;
              return (
                <motion.div
                  key={proc.key}
                  initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: language === 'ar' ? -5 : 5, scale: 1.02 }}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
                >
                  <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-14 h-14 bg-royal-gold/20 rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-7 h-7 text-royal-gold" />
                    </motion.div>
                    
                    <div className={`flex-1 ${language === 'ar' ? 'text-right' : ''}`}>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {t(`safety.page.procedures.${proc.key}.title`)}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {t(`safety.page.procedures.${proc.key}.desc`)}
                      </p>
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <LazyImage 
              src={engineerInspection} 
              alt="Safety inspection"
              className="h-[400px]"
              parallaxOffset={15}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/50 to-transparent" />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Training Programs Section
const TrainingSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const programs = [
    { key: 'emergencyResponse', icon: Flame },
    { key: 'hazardousMaterials', icon: AlertTriangle },
    { key: 'accidentPrevention', icon: Shield },
    { key: 'safetyEquipment', icon: HardHat },
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
            {t('safety.page.training.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-4">
            {t('safety.page.training.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <LazyImage 
              src={emergencyTraining} 
              alt="Emergency training"
              className="h-[450px]"
              parallaxOffset={20}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/40 to-transparent" />
          </motion.div>

          {/* Training cards */}
          <div className="grid sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 bg-white rounded-2xl border border-border hover:border-petroleum-green/30 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-12 h-12 bg-petroleum-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-petroleum-green/20 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-petroleum-green" />
                  </motion.div>
                  
                  <h3 className={`text-lg font-semibold text-petroleum-green mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                    {t(`safety.page.training.${program.key}.title`)}
                  </h3>
                  <p className={`text-muted-foreground text-sm ${language === 'ar' ? 'text-right' : ''}`}>
                    {t(`safety.page.training.${program.key}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Standards Compliance Section
const StandardsSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const standards = [
    { key: 'syrianRegulations', icon: FileCheck },
    { key: 'regionalStandards', icon: MapPin },
    { key: 'adrGuidelines', icon: Award },
    { key: 'internalAudits', icon: ClipboardCheck },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/10 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('safety.page.standards.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-4">
            {t('safety.page.standards.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('safety.page.standards.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <motion.div
                key={standard.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group text-center p-8 bg-gradient-to-b from-petroleum-green/5 to-transparent rounded-2xl border border-petroleum-green/10 hover:border-royal-gold/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto bg-petroleum-green rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-petroleum-green/30"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-petroleum-green mb-2">
                  {t(`safety.page.standards.${standard.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`safety.page.standards.${standard.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Monitoring Systems Section
const MonitoringSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const systems = [
    { key: 'gpsTracking', icon: MapPin },
    { key: 'realTimeAlerts', icon: Bell },
    { key: 'fuelMonitoring', icon: Gauge },
    { key: 'accessControl', icon: Lock },
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
            {t('safety.page.monitoring.label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('safety.page.monitoring.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <LazyImage 
              src={gpsTracking} 
              alt="GPS monitoring systems"
              className="h-[400px]"
              parallaxOffset={15}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/50 to-transparent" />
            
            {/* Pulse indicators */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4">
              <motion.div
                className="absolute inset-0 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 bg-green-500 rounded-full" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-4 h-4">
              <motion.div
                className="absolute inset-0 bg-royal-gold rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <div className="absolute inset-0 bg-royal-gold rounded-full" />
            </div>
          </motion.div>

          {/* Systems grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {systems.map((system, index) => {
              const Icon = system.icon;
              return (
                <motion.div
                  key={system.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
                >
                  <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 bg-royal-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-royal-gold" />
                    </div>
                    <div className={`${language === 'ar' ? 'text-right' : ''}`}>
                      <h4 className="text-white font-medium text-sm">
                        {t(`safety.page.monitoring.${system.key}.title`)}
                      </h4>
                      <p className="text-white/60 text-xs mt-0.5">
                        {t(`safety.page.monitoring.${system.key}.desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
export const CTASection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const { dir } = useLanguage();
  const langLink = useLangLink();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-ash-gray/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-petroleum-green/10 rounded-full flex items-center justify-center mb-6"
          >
            <Shield className="w-10 h-10 text-petroleum-green" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-petroleum-green mb-6">
            {t('safety.page.cta.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {t('safety.page.cta.text')}
          </p>
          
          <motion.a
            href={langLink("/contact")} // استخدم langLink للزر
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-petroleum-green text-white font-semibold rounded-xl hover:bg-petroleum-green/90 transition-colors shadow-lg shadow-petroleum-green/30"
          >
            {t('safety.page.cta.button')}
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-royal-gold font-medium"
          >
            {t('safety.page.cta.signature')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const Safety = () => {
  const { t, language, dir } = useLanguage();

  return (
    <div className="min-h-screen" dir={dir}>
      <Navigation />
      <HeroSection t={t} language={language} />
      <IntroSection t={t} language={language} />
      <DailyProceduresSection t={t} language={language} />
      <TrainingSection t={t} language={language} />
      <StandardsSection t={t} language={language} />
      <MonitoringSection t={t} language={language} />
      <CTASection t={t} language={language} />
      <Footer />
    </div>
  );
};

export default Safety;
