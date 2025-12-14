import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Users, Settings, Leaf, Clock, Shield, Cpu, 
  Lock, AlertTriangle, UserCheck, Activity, FileText, Download,
  Radio, Bell, Gauge, Flame, Camera, FireExtinguisher,
  Car, DoorOpen, MapPin, Route, Zap, Heart, Target, Droplet
} from "lucide-react";

// Image imports
import industrialTanksSunset from "@/assets/industrial-tanks-sunset.jpg";
import controlRoom from "@/assets/control-room.jpg";
import safetySystems from "@/assets/safety-systems.jpg";
import tankerTrucks from "@/assets/tanker-trucks.jpg";
import industrialSkyline from "@/assets/industrial-skyline.jpg";

// Lazy loading image component with blur effect
const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  parallaxOffset = 0,
  zoomOnScroll = false 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  parallaxOffset?: number;
  zoomOnScroll?: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, zoomOnScroll ? 1.1 : 1, 1]);

  return (
    <motion.div ref={ref} className={`overflow-hidden ${className}`} style={{ y }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ scale }}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
        }`}
      />
    </motion.div>
  );
};

// Typewriter effect component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

// Cinematic image section after hero
const CinematicImageSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);

  return (
    <section ref={ref} className="relative h-[60vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <img 
          src={industrialTanksSunset} 
          alt="Oil storage tanks at sunset" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/40 via-transparent to-petroleum-green/60" />
      </motion.div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-royal-gold/40 rounded-full"
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

      {/* Light sweep animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
    </section>
  );
};

// FMS Tab component with control room image
const FMSSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tabs = [
    {
      key: 'lossPrevention',
      icon: Lock,
      color: 'from-red-500 to-orange-500',
      items: [
        { key: 'leakDetection', icon: AlertTriangle },
        { key: 'accessAlerts', icon: Shield },
        { key: 'userTracking', icon: UserCheck },
      ]
    },
    {
      key: 'dataAccuracy',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { key: 'sensorAccuracy', icon: Gauge },
        { key: 'detailedReports', icon: FileText },
        { key: 'dataExports', icon: Download },
      ]
    },
    {
      key: 'realTimeMonitoring',
      icon: Radio,
      color: 'from-green-500 to-emerald-500',
      items: [
        { key: 'liveFuelLevels', icon: Activity },
        { key: 'remoteMonitoring', icon: Radio },
        { key: 'autoAlerts', icon: Bell },
      ]
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-petroleum-green/5 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/10 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('fms.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('fms.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('fms.subtitle')}
          </p>
        </motion.div>

        {/* Split layout with image */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${language === 'ar' ? 'lg:grid-flow-dense' : ''}`}>
          {/* Control room image */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`relative rounded-2xl overflow-hidden shadow-2xl ${language === 'ar' ? 'lg:col-start-2' : ''}`}
          >
            <LazyImage 
              src={controlRoom} 
              alt="Control room" 
              className="h-[400px]"
              parallaxOffset={20}
            />
            {/* Light sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/50 to-transparent" />
          </motion.div>

          {/* Tabs and content */}
          <div>
            {/* Tab navigation */}
            <div className={`flex flex-wrap gap-3 mb-8 ${language === 'ar' ? 'justify-end' : ''}`}>
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-petroleum-green text-white shadow-lg shadow-petroleum-green/30'
                        : 'bg-white text-petroleum-green border border-petroleum-green/20 hover:border-petroleum-green/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{t(`fms.${tab.key}.title`)}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {tabs[activeTab].items.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ x: language === 'ar' ? -5 : 5, scale: 1.02 }}
                    className="relative group p-5 rounded-xl bg-white border border-petroleum-green/10 hover:border-royal-gold/30 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${tabs[activeTab].color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <ItemIcon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-petroleum-green">
                        {t(`fms.${tabs[activeTab].key}.${item.key}`)}
                      </h3>
                      
                      {/* Pulse for monitoring */}
                      {activeTab === 2 && (
                        <motion.div
                          className={`w-3 h-3 bg-green-500 rounded-full ${language === 'ar' ? 'mr-auto' : 'ml-auto'}`}
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Safety Systems Wave Animation with image strip
const SafetySystemsSection = ({ t }: { t: (key: string) => string }) => {
  const systems = [
    { key: 'firefighting', icon: Flame, color: 'from-orange-500 to-red-500' },
    { key: 'surveillance', icon: Camera, color: 'from-blue-500 to-indigo-500' },
    { key: 'extinguishers', icon: FireExtinguisher, color: 'from-red-500 to-pink-500' },
  ];

  return (
    <section className="py-24 bg-petroleum-green relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={safetySystems} 
          alt="Safety systems" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-petroleum-green/80" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-royal-gold/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/20 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('safetySystems.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('safetySystems.title')}
          </h2>
        </motion.div>

        {/* Image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-16 h-48"
        >
          <LazyImage 
            src={safetySystems} 
            alt="Safety infrastructure" 
            className="h-full"
            parallaxOffset={15}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-petroleum-green via-transparent to-petroleum-green" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${system.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(`safetySystems.${system.key}.title`)}
                </h3>
                <p className="text-white/70">
                  {t(`safetySystems.${system.key}.desc`)}
                </p>

                {/* Wave animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${system.color}`}
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Vehicle & Facility Control Flow with images
const VehicleControlSection = ({ t, language }: { t: (key: string) => string; language: string }) => {
  const steps = [
    { key: 'secureAccess', icon: Car },
    { key: 'monitoredEntry', icon: DoorOpen },
    { key: 'waitingZones', icon: MapPin },
    { key: 'trafficFlow', icon: Route },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-petroleum-green/5 relative overflow-hidden">
      {/* Background image with low opacity */}
      <div className="absolute inset-0">
        <img 
          src={tankerTrucks} 
          alt="Tanker trucks" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-petroleum-green/10 text-petroleum-green rounded-full text-sm font-medium mb-4">
            {t('vehicleControl.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('vehicleControl.title')}
          </h2>
        </motion.div>

        {/* Featured image with directional lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-16 h-64 md:h-80"
        >
          <LazyImage 
            src={tankerTrucks} 
            alt="Fleet of tanker trucks" 
            className="h-full"
            parallaxOffset={25}
            zoomOnScroll
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
          
          {/* Animated directional lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 0,50% Q 25%,30% 50%,50% T 100%,50%"
              stroke="rgba(193, 154, 58, 0.5)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
          
          {/* Moving dot */}
          <motion.div
            className="absolute w-4 h-4 bg-royal-gold rounded-full shadow-lg"
            style={{ top: "45%", left: "0%" }}
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: language === 'ar' ? 'right' : 'left' }}
            />
          </div>

          <div className={`grid md:grid-cols-4 gap-8 ${language === 'ar' ? 'md:grid-flow-dense' : ''}`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                  style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-petroleum-green/10 relative z-10 hover:shadow-xl transition-shadow">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-royal-gold rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    
                    <motion.div
                      className="w-16 h-16 bg-petroleum-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-petroleum-green" />
                    </motion.div>
                    
                    <h3 className="text-lg font-semibold text-petroleum-green text-center mb-2">
                      {t(`vehicleControl.${step.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-center text-sm">
                      {t(`vehicleControl.${step.key}.desc`)}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      className={`hidden md:block absolute top-1/2 ${language === 'ar' ? '-left-4' : '-right-4'} z-20`}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className={`w-6 h-6 border-t-2 border-r-2 border-royal-gold ${language === 'ar' ? '-rotate-[135deg]' : 'rotate-45'}`} />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Core Pillars Grid
const CorePillarsSection = ({ t }: { t: (key: string) => string }) => {
  const pillars = [
    { key: 'technology', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { key: 'safety', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { key: 'customer', icon: Heart, color: 'from-pink-500 to-rose-500' },
    { key: 'expertise', icon: Droplet, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-royal-gold/10 text-royal-gold rounded-full text-sm font-medium mb-4">
            {t('pillars.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
            {t('pillars.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-petroleum-green/5 to-white rounded-2xl p-8 border border-petroleum-green/10 hover:border-royal-gold/30 transition-all duration-300 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-petroleum-green text-center mb-3">
                    {t(`pillars.${pillar.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {t(`pillars.${pillar.key}.desc`)}
                  </p>
                </div>

                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${pillar.color} rounded-2xl opacity-0 group-hover:opacity-20 -z-10 blur-xl`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Closing section with background image
const ClosingSection = ({ t }: { t: (key: string) => string }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background image with very low opacity */}
      <div className="absolute inset-0">
        <img 
          src={industrialSkyline} 
          alt="Industrial skyline" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Masked text reveal */}
          <motion.p
            className="text-2xl md:text-3xl text-petroleum-green/80 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {t('whyPetra.closing.text')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="inline-block"
          >
            <div className="relative">
              <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green bg-clip-text text-transparent">
                {t('whyPetra.closing.signature')}
              </span>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-royal-gold/30 blur-3xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function WhyPetra() {
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const strengths = [
    { key: 'professionalTeam', icon: Users },
    { key: 'customizedServices', icon: Settings },
    { key: 'environmentalStandards', icon: Leaf },
    { key: 'extensiveExperience', icon: Clock },
    { key: 'safetyInfrastructure', icon: Shield },
    { key: 'fmsSystem', icon: Cpu },
  ];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navigation />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-petroleum-green via-petroleum-green/95 to-petroleum-green/90 overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(193,154,58,0.15)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(193,154,58,0.1)_0%,transparent_50%)]" />
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-royal-gold/30 rounded-full"
              style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {t('whyPetra.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            <TypewriterText text={t('whyPetra.hero.subtitle')} delay={800} />
          </motion.p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: language === 'ar' ? 'right' : 'left' }}
            className="h-1 w-48 bg-gradient-to-r from-royal-gold via-royal-gold/80 to-transparent mx-auto"
          />
        </div>
      </motion.section>

      {/* Cinematic Image Section */}
      <CinematicImageSection />

      {/* Key Strengths Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Light texture background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwRTRFNDciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bS02IDI0aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjZoMnY0eiIvPjwvZz48L2c+PC9zdmc+')]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-petroleum-green/10 text-petroleum-green rounded-full text-sm font-medium mb-4">
              {t('whyPetra.strengths.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-4">
              {t('whyPetra.strengths.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px -15px rgba(14, 78, 71, 0.2)",
                    scale: 1.03
                  }}
                  className="group relative bg-white rounded-2xl p-6 border border-petroleum-green/10 hover:border-royal-gold/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Blurred industrial texture on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <img src={industrialTanksSunset} alt="" className="w-full h-full object-cover blur-sm" />
                  </div>

                  <motion.div
                    className="relative w-14 h-14 bg-petroleum-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-gold/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-7 h-7 text-petroleum-green group-hover:text-royal-gold transition-colors" />
                    </motion.div>
                  </motion.div>

                  <h3 className="relative text-lg font-semibold text-petroleum-green mb-2">
                    {t(`whyPetra.strengths.${strength.key}.title`)}
                  </h3>
                  <p className="relative text-muted-foreground text-sm">
                    {t(`whyPetra.strengths.${strength.key}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FMS Section */}
      <FMSSection t={t} language={language} />

      {/* Safety Systems */}
      <SafetySystemsSection t={t} />

      {/* Vehicle Control */}
      <VehicleControlSection t={t} language={language} />

      {/* Closing Statement */}
      <ClosingSection t={t} />

      {/* Core Pillars */}
      <CorePillarsSection t={t} />

      <Footer />
    </div>
  );
}
