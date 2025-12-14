import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Users, Scale, Target, Award, ChevronDown } from "lucide-react";
import valuesHero from "@/assets/values-hero.jpg";
import safetyTraining from "@/assets/safety-training.jpg";
import socialCard from "@/assets/social-card.jpg";

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

interface ValueCardProps {
  icon: any;
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  isArabic: boolean;
  image?: string;
}

const ValueCard = ({ icon: Icon, title, description, isExpanded, onToggle, index, isArabic, image }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Soft glowing border on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"
      />
      
      {/* 3D depth effect */}
      <motion.div
        className="absolute inset-0 bg-petroleum-green/20 rounded-2xl"
        style={{ transform: 'translateZ(-10px) translateY(8px)', filter: 'blur(8px)' }}
      />
      
      <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg">
        {/* Card Image */}
        {image && (
          <div className="relative h-40 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <LazyImage src={image} alt={title} className="h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </motion.div>
          </div>
        )}

        {/* Header */}
        <button
          onClick={onToggle}
          className={`w-full p-6 flex items-center gap-5 ${isArabic ? 'flex-row-reverse' : ''} hover:bg-muted/30 transition-colors`}
        >
          {/* Floating animated icon */}
          <motion.div
            className="relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-petroleum-green to-petroleum-green/80 flex items-center justify-center shadow-lg">
              <Icon className="w-7 h-7 text-white" />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-14 h-14 rounded-xl bg-petroleum-green/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <h3 className={`flex-1 text-xl font-bold text-foreground ${isArabic ? 'text-right' : 'text-left'}`}>
            {title}
          </h3>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full bg-muted/50"
          >
            <ChevronDown className="w-5 h-5 text-foreground/50" />
          </motion.div>
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`px-6 pb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const OurValues = () => {
  const { language, dir } = useLanguage();
  const isArabic = language === 'ar';
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const introText = isArabic ? [
    'كل ما تقوم به إمداد مباشر يسترشد بقيمها المؤسسية الأساسية: السلامة والمواطنة والنزاهة والمسؤولية والتميز.',
    'من خلال تطبيق هذه القيم والالتزام بممارسات الأعمال السليمة، تحقق إمداد مباشر باستمرار مستويات عالية من الأداء والكفاءة، مما يخلق قيمة أكبر للشركة وعملائها وشركائها والمجتمعات التي تخدمها.'
  ] : [
    'Everything Imdad does is guided by its core corporate values: Safety, Citizenship, Integrity, Responsibility, and Excellence.',
    'By applying these values and adhering to sound business practices, Imdad consistently achieves high levels of performance and efficiency, creating greater value for the company, its customers, partners, and the communities it serves.'
  ];

  const values = [
    {
      icon: Shield,
      titleKey: isArabic ? 'السلامة' : 'Safety',
      descKey: isArabic 
        ? 'السلامة هي قيمتنا الأولى والأهم. نحن ملتزمون بحماية موظفينا وعملائنا والمجتمعات التي نعمل فيها من خلال تطبيق أعلى معايير السلامة في جميع عملياتنا. نؤمن بأن كل حادث يمكن تجنبه، ونعمل بجد لخلق بيئة عمل خالية من الإصابات.'
        : 'Safety is our first and most important value. We are committed to protecting our employees, customers, and the communities we serve by applying the highest safety standards in all our operations. We believe every accident is preventable, and we work hard to create an injury-free work environment.',
      image: safetyTraining,
    },
    {
      icon: Users,
      titleKey: isArabic ? 'المواطنة' : 'Citizenship',
      descKey: isArabic 
        ? 'نحن مواطنون مسؤولون في كل مجتمع نعمل فيه. نسعى لتحقيق تأثير إيجابي من خلال دعم المبادرات المحلية، وتوفير فرص العمل، والمساهمة في التنمية الاقتصادية والاجتماعية. نحترم الثقافات والتقاليد المحلية ونعمل على بناء علاقات طويلة الأمد مع مجتمعاتنا.'
        : 'We are responsible citizens in every community we operate in. We strive to make a positive impact by supporting local initiatives, providing employment opportunities, and contributing to economic and social development. We respect local cultures and traditions and work to build long-term relationships with our communities.',
      image: socialCard,
    },
    {
      icon: Scale,
      titleKey: isArabic ? 'النزاهة' : 'Integrity',
      descKey: isArabic 
        ? 'النزاهة هي أساس كل ما نقوم به. نتصرف بأمانة وشفافية في جميع تعاملاتنا، ونلتزم بأعلى المعايير الأخلاقية. نفي بوعودنا ونتحمل مسؤولية أفعالنا. نبني الثقة من خلال الاتساق بين أقوالنا وأفعالنا.'
        : 'Integrity is the foundation of everything we do. We act with honesty and transparency in all our dealings, and we adhere to the highest ethical standards. We keep our promises and take responsibility for our actions. We build trust through consistency between our words and actions.',
    },
    {
      icon: Target,
      titleKey: isArabic ? 'المسؤولية' : 'Responsibility',
      descKey: isArabic 
        ? 'نتحمل المسؤولية الكاملة عن أعمالنا وقراراتنا وتأثيرها على البيئة والمجتمع. نسعى لتحقيق الاستدامة في جميع عملياتنا ونلتزم بحماية البيئة للأجيال القادمة. نؤمن بأن النجاح الحقيقي يقاس بمدى مساهمتنا في خير الجميع.'
        : 'We take full responsibility for our work, decisions, and their impact on the environment and society. We strive for sustainability in all our operations and are committed to protecting the environment for future generations. We believe true success is measured by our contribution to the greater good.',
    },
    {
      icon: Award,
      titleKey: isArabic ? 'التميز' : 'Excellence',
      descKey: isArabic 
        ? 'نسعى للتميز في كل ما نقوم به. نتحدى أنفسنا باستمرار لتحسين أدائنا وتقديم أفضل الخدمات لعملائنا. نستثمر في تطوير موظفينا وتبني أحدث التقنيات لضمان تقديم أعلى مستويات الجودة والكفاءة.'
        : 'We strive for excellence in everything we do. We continuously challenge ourselves to improve our performance and deliver the best services to our customers. We invest in developing our employees and adopting the latest technologies to ensure the highest levels of quality and efficiency.',
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage src={valuesHero} alt="Our Values" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/85 via-petroleum-green/70 to-petroleum-green/90" />
        </div>
        
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
              {isArabic ? 'ما نؤمن به' : 'What We Believe'}
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {isArabic ? 'قيمنا' : 'Our Values'}
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-royal-gold to-royal-gold/50 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {introText.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`text-lg md:text-xl text-foreground/80 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {text}
              </motion.p>
            ))}

            {/* Minimal animated underline */}
            <motion.div
              className="flex justify-center pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-px w-32 bg-gradient-to-r from-transparent via-royal-gold to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Cards Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.titleKey}
                description={value.descKey}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                index={index}
                isArabic={isArabic}
                image={value.image}
              />
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-petroleum-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
      </section>

      {/* Closing Statement */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-petroleum-green/20 via-royal-gold/20 to-petroleum-green/20 rounded-full blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <p className="relative text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green">
                PETRA
              </p>
            </div>
            <p className="mt-4 text-xl text-foreground/60">
              {isArabic ? 'قيم تبني المستقبل' : 'Values That Build the Future'}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurValues;