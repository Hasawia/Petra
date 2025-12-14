import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Warehouse, Truck, Fuel, Wrench, 
  Target, Lightbulb, Shield, TrendingUp, Award,
  Phone, ArrowRight, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

// Timeline data
const timelineData = [
  { year: "2019", key: "timeline.2019" },
  { year: "2020-2021", key: "timeline.2020" },
  { year: "2022-2023", key: "timeline.2022" },
  { year: "2024", key: "timeline.2024" },
  { year: "2025", key: "timeline.2025" }
];

// Services data
const servicesData = [
  { key: "scope.storage", icon: Warehouse },
  { key: "scope.logistics", icon: Truck },
  { key: "scope.station", icon: Fuel },
  { key: "scope.consulting", icon: Wrench }
];

// Values data with enhanced icons
import { Zap, Cog, Users, Rocket } from "lucide-react";

const valuesData = [
  { key: "values.comprehensive", icon: Target, gradient: "from-blue-500 to-cyan-400" },
  { key: "values.technology", icon: Cog, gradient: "from-purple-500 to-pink-400" },
  { key: "values.safety", icon: Shield, gradient: "from-green-500 to-emerald-400" },
  { key: "values.improvement", icon: TrendingUp, gradient: "from-orange-500 to-amber-400" },
  { key: "values.innovation", icon: Rocket, gradient: "from-royal-gold to-yellow-400" }
];

const About = () => {
  const { t, dir, language } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navigation />
      
      {/* Hero Section - Aramco Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Petra Oil Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/90 via-petroleum-green/70 to-petroleum-green/90" />
        </div>

        {/* Animated particles/energy flow */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-royal-gold/40 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 10
              }}
              animate={{ 
                y: -10,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Animated energy flow line */}
        <motion.div 
          className="absolute bottom-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-royal-gold to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
              {t('about.hero.subtitle')}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                className="bg-royal-gold hover:bg-royal-gold/90 text-petroleum-green font-semibold px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                {t('about.hero.cta1')}
                <Phone className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection('services')}
              >
                {t('about.hero.cta2')}
                <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-royal-gold" />
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-background" id="about-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt={t('about.section.title')}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petroleum-green/50 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-royal-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-royal-gold/30 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-royal-gold font-semibold text-sm uppercase tracking-wider">
                {t('about.section.label')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                {t('about.section.title')}
              </h2>
              <div className="w-20 h-1 bg-royal-gold mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('about.section.paragraph1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('about.section.paragraph2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-royal-gold font-semibold text-sm uppercase tracking-wider">
              {t('timeline.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              {t('timeline.title')}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-royal-gold/30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
                      <span className="text-royal-gold font-bold text-2xl">{item.year}</span>
                      <p className="text-muted-foreground mt-3 leading-relaxed">
                        {t(item.key)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-royal-gold rounded-full ring-4 ring-royal-gold/20" />
                  </div>
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-petroleum-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-16 h-16 bg-royal-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-royal-gold" />
              </div>
              <h3 className="text-2xl font-bold text-royal-gold mb-4">
                {t('vision.title')}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {t('vision.text')}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-16 h-16 bg-royal-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-royal-gold" />
              </div>
              <h3 className="text-2xl font-bold text-royal-gold mb-4">
                {t('mission.title')}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {t('mission.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope of Work / Services Section */}
      <section className="py-24 bg-background" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-royal-gold font-semibold text-sm uppercase tracking-wider">
              {t('scope.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
              {t('scope.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border hover:border-royal-gold/30"
              >
                <div className="w-14 h-14 bg-petroleum-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-royal-gold/20 transition-colors">
                  <service.icon className="w-7 h-7 text-petroleum-green group-hover:text-royal-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`${service.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Modern Glassmorphism Design */}
      <section className="py-24 bg-gradient-to-br from-petroleum-green via-petroleum-green/95 to-petroleum-green relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-royal-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-royal-gold font-semibold text-sm uppercase tracking-wider bg-royal-gold/10 px-4 py-2 rounded-full mb-4"
            >
              {t('values.label')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              {t('values.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Values Grid - Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {valuesData.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-royal-gold/40 transition-all duration-500 h-full overflow-hidden">
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon container */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} p-0.5 mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full bg-petroleum-green/80 backdrop-blur rounded-2xl flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Text content */}
                  <p className="text-white/90 text-lg leading-relaxed font-medium">
                    {t(value.key)}
                  </p>
                  
                  {/* Bottom decorative element */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <value.icon className="w-24 h-24 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative separator */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-petroleum-green to-petroleum-green/90" id="contact">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              {t('about.cta.description')}
            </p>
            <Button 
              size="lg" 
              className="bg-royal-gold hover:bg-royal-gold/90 text-petroleum-green font-semibold px-10 py-6 text-lg"
            >
              {t('about.cta.button')}
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
