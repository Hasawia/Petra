import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronDown, Shield, FileCheck, Users, BookOpen, Handshake, CheckCircle2, Leaf, Scale, AlertTriangle, Gift, Eye } from "lucide-react";
import ethicsHero from "@/assets/ethics-hero.jpg";
import governanceCard from "@/assets/governance-card.jpg";
import safetyTraining from "@/assets/safety-training.jpg";

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

const TypeRevealText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mx-1"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const AccordionItem = ({ title, content, isOpen, onClick, icon: Icon, image }: { 
  title: string; 
  content: string; 
  isOpen: boolean; 
  onClick: () => void;
  icon: any;
  image?: string;
}) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 p-6 ${isArabic ? 'flex-row-reverse text-right' : 'text-left'} hover:bg-muted/50 transition-colors`}
      >
        <div className="p-2 rounded-lg bg-petroleum-green/10">
          <Icon className="w-5 h-5 text-petroleum-green" />
        </div>
        <span className="flex-1 text-lg font-semibold text-foreground">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-foreground/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`px-6 pb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              {image && (
                <div className="mb-4 rounded-xl overflow-hidden h-40">
                  <LazyImage src={image} alt={title} className="h-full" />
                </div>
              )}
              <div className="text-foreground/70 leading-relaxed">
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const EthicsGovernance = () => {
  const { language, dir } = useLanguage();
  const isArabic = language === 'ar';
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const introText = isArabic 
    ? 'تحقق الشركة أعلى معايير الأعمال من خلال الالتزام بأعلى المبادئ الشخصية والمهنية.'
    : 'The company achieves the highest business standards through commitment to the highest personal and professional principles.';

  const coreExplanation = isArabic ? [
    'مبادئ الأخلاق والامتثال التي تتبناها الشركة متجذرة بعمق في ثقافتها. إنها تشكل الأساس القوي لمجموعة من السياسات والضوابط والمبادئ التوجيهية التي توجه الموظفين في تنفيذ استراتيجية أعمال الشركة.',
    'هذه المبادئ نفسها تشكل العمود الفقري لبرامج الامتثال في الشركة، والتي تعمل كمعيار لقياس الأداء - داخلياً وعبر شركائها بما في ذلك المقاولين والاستشاريين والموردين والشركات التابعة والمشاريع المشتركة، محلياً وعالمياً.'
  ] : [
    'The ethics and compliance principles adopted by the company are deeply rooted in its culture. They form the strong foundation for a set of policies, controls, and guidelines that guide employees in implementing the company\'s business strategy.',
    'These same principles form the backbone of the company\'s compliance programs, which serve as a benchmark for measuring performance - internally and across its partners including contractors, consultants, suppliers, subsidiaries, and joint ventures, locally and globally.'
  ];

  const complianceText = isArabic
    ? 'قسم الامتثال في الشركة مسؤول عن تطوير ودعم ومراقبة برنامج الامتثال، مع تتبع التطورات القانونية والتنظيمية الخارجية ذات الصلة.'
    : 'The company\'s compliance department is responsible for developing, supporting, and monitoring the compliance program, while tracking relevant external legal and regulatory developments.';

  const conflictText = isArabic
    ? 'يتم إطلاع الموظفين بانتظام على سياسة تضارب المصالح وأخلاقيات العمل في الشركة لضمان تطبيقها المتسق. يمكن لموظفي الشركة والأطراف الخارجية إثارة المخاوف أو الأسئلة المتعلقة بالأخلاق من خلال قنوات الإبلاغ والتواصل المعتمدة في الشركة.'
    : 'Employees are regularly informed about the company\'s conflict of interest and business ethics policy to ensure its consistent application. Company employees and external parties can raise concerns or questions related to ethics through the company\'s approved reporting and communication channels.';

  const codeOfConductText = isArabic
    ? 'تحدد مدونة قواعد السلوك التجاري للشركة التوقعات المتعلقة بكيفية تصرف موظفيها وممارستهم لأعمالهم. وهي تغطي موضوعات تشمل السلوك المهني وتضارب المصالح والمساءلة والمحاسبة والالتزام بالقوانين واللوائح، وتعزز القيم الأخلاقية للشركة.'
    : 'The company\'s Code of Business Conduct defines expectations regarding how its employees behave and conduct their business. It covers topics including professional conduct, conflicts of interest, accountability, adherence to laws and regulations, and reinforces the company\'s ethical values.';

  const supplierItems = [
    { icon: Leaf, text: isArabic ? 'قضايا البيئة والصحة والسلامة' : 'Environment, health, and safety issues' },
    { icon: Scale, text: isArabic ? 'ممارسات الأعمال العادلة' : 'Fair business practices' },
    { icon: CheckCircle2, text: isArabic ? 'المصادر الأخلاقية' : 'Ethical sourcing' },
    { icon: AlertTriangle, text: isArabic ? 'تضارب المصالح' : 'Conflicts of interest' },
    { icon: Gift, text: isArabic ? 'الرشوة والعمولات غير المشروعة' : 'Bribery and illegal commissions' },
    { icon: Eye, text: isArabic ? 'الهدايا والاحتيال والمراقبة والامتثال' : 'Gifts, fraud, monitoring, and compliance' },
  ];

  const supplierClosing = isArabic
    ? 'إنها تعزز نظام قيم الشركة وتغرس معاييرها الأخلاقية بين شبكة مورديها وتضمن شراكات طويلة الأمد ومفيدة للطرفين.'
    : 'It strengthens the company\'s value system and instills its ethical standards among its supplier network and ensures long-term, mutually beneficial partnerships.';

  return (
    <div className={`min-h-screen bg-background ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LazyImage src={ethicsHero} alt="Ethics & Governance" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/85 via-petroleum-green/70 to-petroleum-green/90" />
        </div>
        
        {/* Animated glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-gold/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-petroleum-green/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 container mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            {/* Glass container */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
              
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -top-4 left-0 h-1 bg-gradient-to-r from-royal-gold via-royal-gold/50 to-transparent rounded-full"
                />
                
                <h1 className={`text-3xl md:text-5xl font-bold text-white mb-8 ${isArabic ? 'text-right' : 'text-left'}`}>
                  {isArabic ? 'الأخلاق والحوكمة' : 'Ethics & Governance'}
                </h1>
                
                <div className={`text-xl md:text-2xl text-white/90 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
                  <TypeRevealText text={introText} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Image Strip */}
      <section className="relative h-24 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <LazyImage src={governanceCard} alt="Governance" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-petroleum-green via-transparent to-petroleum-green" />
        </motion.div>
      </section>

      {/* Core Explanation Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {coreExplanation.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 ${isArabic ? 'text-right' : 'text-left'}`}
              >
                <p className="text-lg text-foreground/80 leading-relaxed">{text}</p>
              </motion.div>
            ))}
            
            {/* Animated separator */}
            <motion.div
              className="flex justify-center py-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-px h-16 bg-gradient-to-b from-transparent via-royal-gold to-transparent"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Program Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background image with low opacity */}
        <div className="absolute inset-0 opacity-5">
          <LazyImage src={safetyTraining} alt="Compliance" className="w-full h-full" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`flex items-center gap-4 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="p-3 rounded-xl bg-petroleum-green/10">
                <FileCheck className="w-8 h-8 text-petroleum-green" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                {isArabic ? 'برنامج الامتثال' : 'Compliance Program'}
              </h2>
            </div>

            {/* Horizontal process flow */}
            <div className="relative">
              <motion.div
                className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <div className={`grid grid-cols-3 gap-4 relative z-10 ${isArabic ? 'direction-rtl' : ''}`}>
                {[
                  { icon: '📋', label: isArabic ? 'التطوير' : 'Development' },
                  { icon: '🔍', label: isArabic ? 'المراقبة' : 'Monitoring' },
                  { icon: '✅', label: isArabic ? 'الامتثال' : 'Compliance' },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-card border-4 border-royal-gold flex items-center justify-center text-2xl shadow-lg mb-3">
                      {step.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground/70">{step.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className={`mt-12 text-lg text-foreground/80 leading-relaxed bg-card/50 p-6 rounded-xl border border-border/50 ${isArabic ? 'text-right' : 'text-left'}`}
            >
              {complianceText}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Conflict of Interest - Accordion */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`flex items-center gap-4 mb-8 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="p-3 rounded-xl bg-royal-gold/10">
                <Users className="w-8 h-8 text-royal-gold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                {isArabic ? 'سياسات تضارب المصالح وأخلاقيات العمل' : 'Conflict of Interest & Business Ethics Policies'}
              </h2>
            </div>

            <AccordionItem
              title={isArabic ? 'سياسة تضارب المصالح' : 'Conflict of Interest Policy'}
              content={conflictText}
              isOpen={openAccordion === 0}
              onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
              icon={Shield}
              image={governanceCard}
            />
          </motion.div>
        </div>
      </section>

      {/* Code of Business Conduct - Highlighted Card */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="relative p-10 rounded-2xl bg-card border-2 border-petroleum-green/30 overflow-hidden"
              whileHover={{ borderColor: 'hsl(var(--petroleum-green))' }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated glowing border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(var(--royal-gold) / 0.3), transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative z-10">
                <div className={`flex items-center gap-4 mb-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <div className="p-3 rounded-xl bg-petroleum-green/10">
                    <BookOpen className="w-8 h-8 text-petroleum-green" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {isArabic ? 'مدونة قواعد السلوك التجاري' : 'Code of Business Conduct'}
                  </h2>
                </div>

                <p className={`text-lg text-foreground/80 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
                  {codeOfConductText}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Supplier Code of Conduct */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`flex items-center gap-4 mb-10 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <div className="p-3 rounded-xl bg-royal-gold/10">
                <Handshake className="w-8 h-8 text-royal-gold" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                {isArabic ? 'مدونة قواعد السلوك للموردين' : 'Supplier Code of Conduct'}
              </h2>
            </div>

            {/* Animated bullet cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {supplierItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: isArabic ? -5 : 5 }}
                    className={`flex items-center gap-4 p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all ${isArabic ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="p-2 rounded-lg bg-petroleum-green/10">
                      <Icon className="w-5 h-5 text-petroleum-green" />
                    </div>
                    <span className={`text-foreground/80 font-medium ${isArabic ? 'text-right' : 'text-left'}`}>
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Closing text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl bg-gradient-to-br from-royal-gold/10 to-transparent border border-royal-gold/20 ${isArabic ? 'text-right' : 'text-left'}`}
            >
              <p className="text-lg text-foreground/80 leading-relaxed italic">
                {supplierClosing}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EthicsGovernance;