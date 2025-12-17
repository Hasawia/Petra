import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronRight, Shield, Heart, Eye, Scale, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import governanceHero from "@/assets/governance-hero.jpg";
import ethicsHero from "@/assets/ethics-hero.jpg";
import valuesHero from "@/assets/values-hero.jpg";
import { useLangLink } from "@/hooks/useLangLink";

// Lazy loading image component
const LazyImage = ({ 
  src, 
  alt, 
  className = "",
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded ? 'blur-0 opacity-100' : 'blur-lg opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        initial={{ scale: 1.1 }}
        animate={{ scale: loaded ? 1 : 1.1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => (
  <>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-royal-gold/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-20, 20, -20],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </>
);

const Governance = () => {
  const { language, dir } = useLanguage();
  const navigate = useNavigate();
    const langLink = useLangLink();

  const isArabic = language === 'ar';

  const introText = isArabic ? `يحدد إطار الحوكمة الشامل والواسع للشركة هويتنا وكيف ينظر إلينا العالم الخارجي. إنه بمثابة البوصلة التي توجه عمليات الشركة وتضمن التزامنا بأعلى المعايير المهنية والأخلاقية.

يضمن هيكل الحوكمة القوي الشفافية والرقابة الفعالة والمساءلة عبر جميع مستويات عملياتنا - من الخبرات المتنوعة لمجلس إدارتنا وفريق الإدارة العليا إلى إجراءات التقارير الروتينية والمراجعات المستقلة.` : 
  `Our comprehensive governance framework defines who we are and how the world sees us. It serves as the compass that guides company operations and ensures our commitment to the highest professional and ethical standards.

A robust governance structure ensures transparency, effective oversight, and accountability across all levels of our operations - from the diverse expertise of our board of directors and senior management team to routine reporting procedures and independent reviews.`;

  const cards = [
    {
      icon: Shield,
      titleKey: isArabic ? 'الأخلاق والحوكمة' : 'Ethics & Governance',
      descKey: isArabic ? 'تلتزم الشركة بأعلى معايير الأعمال من خلال الالتزام بأعلى المبادئ الشخصية والمهنية.' : 'The company is committed to the highest business standards by adhering to the highest personal and professional principles.',
      buttonKey: isArabic ? 'اقرأ المزيد' : 'Read More',
      path: langLink("/ethics-governance"),
      gradient: 'from-petroleum-green to-petroleum-green/80',
      image: ethicsHero,
    },
    {
      icon: Heart,
      titleKey: isArabic ? 'قيمنا' : 'Our Values',
      descKey: isArabic ? 'سلوك إمداد — كشركة وكموظفين وكمواطنين — هو ما يميزها.' : 'The conduct of Imdad — as a company, as employees, and as citizens — is what sets it apart.',
      buttonKey: isArabic ? 'اقرأ المزيد' : 'Read More',
      path: langLink("/our-values"),
      gradient: 'from-royal-gold to-royal-gold/80',
      image: valuesHero,
    },
  ];

  const governancePillars = [
    {
      icon: Eye,
      title: isArabic ? 'الشفافية' : 'Transparency',
      desc: isArabic ? 'التواصل الواضح والمفتوح مع جميع الأطراف المعنية' : 'Clear and open communication with all stakeholders',
    },
    {
      icon: Scale,
      title: isArabic ? 'المساءلة' : 'Accountability',
      desc: isArabic ? 'تحمل المسؤولية الكاملة عن أعمالنا وقراراتنا' : 'Taking full responsibility for our actions and decisions',
    },
    {
      icon: Users,
      title: isArabic ? 'الرقابة' : 'Oversight',
      desc: isArabic ? 'إشراف فعال على جميع مستويات العمليات' : 'Effective supervision at all operational levels',
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage src={governanceHero} alt="Corporate Governance" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/85 via-petroleum-green/70 to-petroleum-green/90" />
        </div>

        {/* Floating particles */}
        <FloatingParticles />

        {/* Animated texture overlay */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium mb-6 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isArabic ? 'الإطار المؤسسي' : 'Corporate Framework'}
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {isArabic ? 'الحوكمة المؤسسية' : 'Corporate Governance'}
            </h1>
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-royal-gold via-royal-gold/80 to-royal-gold/50 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Governance Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {governancePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <Icon className="w-5 h-5 text-royal-gold" />
                  <span className="text-white font-medium">{pillar.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Cinematic Image Strip */}
      <section className="relative h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <LazyImage src={governanceHero} alt="Governance" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-petroleum-green via-transparent to-petroleum-green" />
        </motion.div>
      </section>

      {/* Intro Text Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Light texture background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--petroleum-green)) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl p-10 md:p-14 shadow-xl border border-border/50">
              {/* Decorative corner accents */}
              <div className={`absolute top-0 ${isArabic ? 'right-0' : 'left-0'} w-20 h-20 border-t-2 border-${isArabic ? 'r' : 'l'}-2 border-royal-gold/30 rounded-tl-2xl`} />
              <div className={`absolute bottom-0 ${isArabic ? 'left-0' : 'right-0'} w-20 h-20 border-b-2 border-${isArabic ? 'l' : 'r'}-2 border-royal-gold/30 rounded-br-2xl`} />
              
              <p className={`text-lg md:text-xl leading-relaxed text-foreground/80 whitespace-pre-line ${isArabic ? 'text-right' : 'text-left'}`}>
                {introText}
              </p>
            </div>

            {/* Animated divider */}
            <div className="flex justify-center mt-12">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="relative py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${card.gradient}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ padding: '2px' }}
                    >
                      <div className="absolute inset-[2px] bg-card rounded-2xl" />
                    </motion.div>
                  </div>

                  <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 h-full flex flex-col">
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="h-full"
                      >
                        <LazyImage src={card.image} alt={card.titleKey} className="h-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      </motion.div>
                      
                      {/* Icon */}
                      <motion.div
                        className={`absolute bottom-4 ${isArabic ? 'right-6' : 'left-6'} w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-4 ${isArabic ? 'text-right' : 'text-left'}`}>
                        {card.titleKey}
                      </h3>
                      <p className={`text-foreground/70 leading-relaxed mb-8 flex-grow ${isArabic ? 'text-right' : 'text-left'}`}>
                        {card.descKey}
                      </p>

                      {/* Button */}
                      <motion.button
                        onClick={() => navigate(card.path)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 ${isArabic ? 'flex-row-reverse self-end' : 'self-start'} px-6 py-3 bg-gradient-to-r ${card.gradient} text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow`}
                      >
                        {card.buttonKey}
                        <ChevronRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Governance;