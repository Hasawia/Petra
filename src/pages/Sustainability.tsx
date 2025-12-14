import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Leaf, Users, Building2, ChevronDown, Shield, Zap, AlertTriangle, 
  Wind, Droplets, Factory, HardHat, Heart, GraduationCap, 
  ShieldCheck, Activity, FileText, UserCheck, Sparkles
} from "lucide-react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import environmentCard from "@/assets/environment-card.jpg";
import socialCard from "@/assets/social-card.jpg";
import governanceCard from "@/assets/governance-card.jpg";
import safetyTraining from "@/assets/safety-training.jpg";

// Lazy loading image component with blur-to-sharp effect
const LazyImage = ({ 
  src, 
  alt, 
  className = "",
  overlay = false 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  overlay?: boolean;
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
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      )}
    </div>
  );
};

// Accordion component for policies
const PolicyAccordion = ({ 
  title, 
  content, 
  icon: Icon, 
  isOpen, 
  onClick,
  image,
  index,
  isArabic 
}: { 
  title: string; 
  content: string; 
  icon: any;
  isOpen: boolean;
  onClick: () => void;
  image?: string;
  index: number;
  isArabic: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg"
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-4 p-6 ${isArabic ? 'flex-row-reverse' : ''} hover:bg-muted/50 transition-all duration-300`}
      >
        <motion.div 
          className="p-3 rounded-xl bg-gradient-to-br from-petroleum-green to-petroleum-green/80 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <span className={`flex-1 text-xl font-bold text-foreground ${isArabic ? 'text-right' : 'text-left'}`}>
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="p-2 rounded-full bg-muted/50"
        >
          <ChevronDown className="w-5 h-5 text-foreground/60" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`px-6 pb-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
              {image && (
                <div className="mb-4 rounded-xl overflow-hidden h-48">
                  <LazyImage src={image} alt={title} className="h-full" />
                </div>
              )}
              <p className="text-foreground/70 leading-relaxed text-lg">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Floating particles component
const FloatingParticles = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-royal-gold/40 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.2, 0.6, 0.2],
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

const Sustainability = () => {
  const { language, dir } = useLanguage();
  const isArabic = language === 'ar';
  const [openEnvironment, setOpenEnvironment] = useState<number | null>(null);
  const [openSocial, setOpenSocial] = useState<number | null>(null);
  const [openGovernance, setOpenGovernance] = useState<number | null>(null);

  const mainTitle = isArabic 
    ? 'الاستدامة — نقل مسؤول من أجل مستقبل مستدام'
    : 'Sustainability — Responsible Transport for a Sustainable Future';

  const introText = isArabic
    ? `في إمداد مباشر، نعتبر الصحة والسلامة والأمن والبيئة والجودة (HSSEQ) مبادئ أساسية.
هذه ليست مجرد سياسات — إنها تمثل نوايانا والتزاماتنا لضمان سلامة جميع الأفراد المشاركين في النقل، وتقديم خدمات عالية الجودة للعملاء، وتقليل الأثر البيئي في صميم عملياتنا.
نحن ملتزمون بالتحسين المستمر لعمليات النقل لجعلها أكثر أمانًا وكفاءة، بهدف منع الحوادث والإصابات والأمراض المهنية، مع الحفاظ على حوكمة قوية وحماية البيئة.`
    : `At Imdad Direct, we consider Health, Safety, Security, Environment, and Quality (HSSEQ) to be essential principles.
These are not just policies—they represent our intentions and commitments to ensure the safety of all individuals involved in transportation, provide high-quality services to customers, and minimize environmental impact at the core of our operations.
We are committed to continuously improving transport operations to make them safer and more efficient, aiming to prevent accidents, injuries, and occupational illnesses, while maintaining strong governance and environmental protection.`;

  const strategicObjectives = [
    {
      icon: Leaf,
      title: isArabic ? 'البيئة' : 'Environment',
      desc: isArabic 
        ? 'ننقل الطاقة التي يحتاجها العالم بطرق تحمي البيئة وتحافظ عليها.'
        : 'We transport the energy the world needs in ways that protect and preserve the environment.',
      image: environmentCard,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Users,
      title: isArabic ? 'المجتمع' : 'Social',
      desc: isArabic 
        ? 'نضع الناس والمجتمعات في قلب عملنا وعملياتنا اليومية.'
        : 'We place people and communities at the heart of our work and daily operations.',
      image: socialCard,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Building2,
      title: isArabic ? 'الحوكمة' : 'Governance',
      desc: isArabic 
        ? 'نعزز النزاهة ونلتزم بالمهنية العالية والشفافية والمساءلة.'
        : 'We promote integrity and commit to high professionalism, transparency, and accountability.',
      image: governanceCard,
      gradient: 'from-purple-500 to-violet-600',
    },
  ];

  const environmentalPolicies = [
    {
      icon: Shield,
      title: isArabic ? 'الامتثال البيئي' : 'Environmental Compliance',
      content: isArabic 
        ? 'نلتزم بجميع القوانين واللوائح البيئية المحلية والدولية. نجري عمليات تدقيق بيئية منتظمة ونحافظ على التصاريح والتراخيص اللازمة لضمان امتثال عملياتنا الكامل.'
        : 'We comply with all local and international environmental laws and regulations. We conduct regular environmental audits and maintain necessary permits and licenses to ensure our operations are fully compliant.',
    },
    {
      icon: Zap,
      title: isArabic ? 'كفاءة الطاقة' : 'Energy Efficiency',
      content: isArabic 
        ? 'نستثمر في تقنيات النقل الموفرة للوقود وحلول الطاقة البديلة. تم تصميم مركباتنا ومعداتنا لتقليل استهلاك الوقود مع الحفاظ على الكفاءة التشغيلية القصوى.'
        : 'We invest in fuel-efficient transport technologies and alternative energy solutions. Our vehicles and equipment are designed to minimize fuel consumption while maintaining maximum operational efficiency.',
    },
    {
      icon: AlertTriangle,
      title: isArabic ? 'الاستجابة للطوارئ' : 'Emergency Response',
      content: isArabic 
        ? 'لدينا خطط استجابة شاملة للطوارئ البيئية، بما في ذلك فرق متخصصة ومعدات لاحتواء ومعالجة أي حوادث بيئية بسرعة وفعالية.'
        : 'We have comprehensive emergency response plans for environmental incidents, including specialized teams and equipment to quickly and effectively contain and remediate any environmental events.',
    },
    {
      icon: Wind,
      title: isArabic ? 'خفض الانبعاثات' : 'Emissions Reduction',
      content: isArabic 
        ? 'نعمل على تقليل انبعاثات الكربون من خلال تحديث الأسطول، وتحسين المسارات، واستخدام أنواع الوقود النظيفة. نراقب ونبلغ عن بصمتنا الكربونية بانتظام.'
        : 'We work to reduce carbon emissions through fleet modernization, route optimization, and clean fuel adoption. We monitor and report our carbon footprint regularly.',
    },
    {
      icon: Droplets,
      title: isArabic ? 'منع التسرب' : 'Spill Prevention',
      content: isArabic 
        ? 'نطبق بروتوكولات صارمة لمنع التسرب في جميع عمليات التحميل والتفريغ والنقل. جميع مرافقنا مجهزة بأنظمة احتواء متقدمة.'
        : 'We implement strict spill prevention protocols in all loading, unloading, and transport operations. All our facilities are equipped with advanced containment systems.',
    },
    {
      icon: Factory,
      title: isArabic ? 'مكافحة التلوث' : 'Pollution Control',
      content: isArabic 
        ? 'نستخدم أفضل التقنيات المتاحة للسيطرة على التلوث وتقليل النفايات. نعتمد نهج الاقتصاد الدائري لإعادة التدوير وإعادة الاستخدام حيثما أمكن.'
        : 'We use best available technologies to control pollution and minimize waste. We adopt circular economy approaches for recycling and reuse wherever possible.',
    },
  ];

  const socialPolicies = [
    {
      icon: ShieldCheck,
      title: isArabic ? 'الامتثال للسلامة' : 'Safety Compliance',
      content: isArabic 
        ? 'نلتزم بأعلى معايير السلامة الدولية ونتجاوزها. تخضع عملياتنا لمراجعات سلامة منتظمة ونحافظ على شهادات ISO و OHSAS.'
        : 'We adhere to and exceed the highest international safety standards. Our operations undergo regular safety audits and we maintain ISO and OHSAS certifications.',
    },
    {
      icon: HardHat,
      title: isArabic ? 'بيئة عمل آمنة' : 'Safe Work Environment',
      content: isArabic 
        ? 'نوفر بيئة عمل آمنة وصحية لجميع موظفينا ومقاولينا. نجري تقييمات مخاطر منتظمة ونطبق تدابير وقائية فعالة.'
        : 'We provide a safe and healthy work environment for all our employees and contractors. We conduct regular risk assessments and implement effective preventive measures.',
    },
    {
      icon: Shield,
      title: isArabic ? 'معدات الحماية الشخصية' : 'Personal Protective Equipment',
      content: isArabic 
        ? 'نوفر معدات حماية شخصية عالية الجودة لجميع العاملين ونضمن استخدامها الصحيح من خلال التدريب والمراقبة المستمرة.'
        : 'We provide high-quality personal protective equipment to all workers and ensure proper use through continuous training and monitoring.',
    },
    {
      icon: GraduationCap,
      title: isArabic ? 'التدريب المستمر' : 'Continuous Training',
      content: isArabic 
        ? 'نستثمر في برامج تدريب شاملة للموظفين تغطي السلامة والمهارات التقنية والوعي البيئي. يتلقى كل موظف ساعات تدريب سنوية إلزامية.'
        : 'We invest in comprehensive employee training programs covering safety, technical skills, and environmental awareness. Every employee receives mandatory annual training hours.',
    },
    {
      icon: Heart,
      title: isArabic ? 'منع الحوادث' : 'Accident Prevention',
      content: isArabic 
        ? 'نتبع نهجًا استباقيًا لمنع الحوادث من خلال تحليل المخاطر وتقارير الحوادث الوشيكة وبرامج الملاحظات السلوكية.'
        : 'We follow a proactive approach to accident prevention through hazard analysis, near-miss reporting, and behavioral observation programs.',
    },
    {
      icon: Activity,
      title: isArabic ? 'المراقبة الأمنية' : 'Security Monitoring',
      content: isArabic 
        ? 'نستخدم أنظمة مراقبة متقدمة على مدار الساعة لضمان أمن عملياتنا وموظفينا. نطبق بروتوكولات أمنية صارمة في جميع المرافق.'
        : 'We use advanced 24/7 monitoring systems to ensure the security of our operations and personnel. We implement strict security protocols at all facilities.',
    },
  ];

  const governancePolicies = [
    {
      icon: Sparkles,
      title: isArabic ? 'ثقافة HSSEQ' : 'HSSEQ Culture',
      content: isArabic 
        ? 'نعزز ثقافة الصحة والسلامة والأمن والبيئة والجودة في جميع مستويات المنظمة. كل موظف مسؤول عن السلامة والجودة البيئية.'
        : 'We foster a culture of Health, Safety, Security, Environment, and Quality at all levels of the organization. Every employee is responsible for safety and environmental quality.',
    },
    {
      icon: Activity,
      title: isArabic ? 'مراقبة الأداء' : 'Performance Monitoring',
      content: isArabic 
        ? 'نراقب ونقيس أداءنا في مجالات HSSEQ باستخدام مؤشرات أداء رئيسية محددة. نستخدم البيانات لدفع التحسين المستمر.'
        : 'We monitor and measure our HSSEQ performance using defined key performance indicators. We use data to drive continuous improvement.',
    },
    {
      icon: FileText,
      title: isArabic ? 'الإبلاغ عن الحوادث' : 'Incident Reporting',
      content: isArabic 
        ? 'لدينا نظام إبلاغ شفاف وسهل الاستخدام للحوادث والحوادث الوشيكة. نحقق في جميع الحوادث ونشارك الدروس المستفادة عبر المنظمة.'
        : 'We have a transparent and user-friendly reporting system for incidents and near-misses. We investigate all incidents and share lessons learned across the organization.',
    },
    {
      icon: UserCheck,
      title: isArabic ? 'إشراك الموظفين' : 'Employee Engagement',
      content: isArabic 
        ? 'نشرك موظفينا بنشاط في برامج HSSEQ من خلال لجان السلامة وبرامج الاقتراحات والتقدير. صوت كل موظف مهم في ثقافة السلامة لدينا.'
        : 'We actively engage our employees in HSSEQ programs through safety committees, suggestion programs, and recognition. Every employee\'s voice matters in our safety culture.',
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <LazyImage 
            src={sustainabilityHero} 
            alt="Sustainability" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-petroleum-green/80 via-petroleum-green/60 to-petroleum-green/90" />
        </motion.div>

        {/* Floating particles */}
        <FloatingParticles />

        {/* Floating gradient shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-white/90 text-sm font-medium">
                {isArabic ? 'مبادرات الاستدامة' : 'Sustainability Initiatives'}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              {mainTitle}
            </h1>
            
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-royal-gold to-green-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white/80 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <motion.div
          className="absolute inset-0 opacity-5"
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
            <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-border/50">
              {/* Decorative elements */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-green-400 to-royal-gold rounded-full" />
              
              <p className={`text-lg md:text-xl leading-relaxed text-foreground/80 whitespace-pre-line ${isArabic ? 'text-right' : 'text-left'}`}>
                {introText}
              </p>
            </div>

            {/* Animated divider */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-petroleum-green/10 text-petroleum-green rounded-full text-sm font-medium mb-4">
              {isArabic ? 'رؤيتنا' : 'Our Vision'}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              {isArabic ? 'أهدافنا الاستراتيجية' : 'Our Strategic Objectives'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strategicObjectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Card glow */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${obj.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  />
                  
                  <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="h-full"
                      >
                        <LazyImage src={obj.image} alt={obj.title} className="h-full" overlay />
                      </motion.div>
                      <div className={`absolute top-4 ${isArabic ? 'right-4' : 'left-4'}`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${obj.gradient} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{obj.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{obj.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Environmental Policies Section */}
      <section className="py-24 bg-gradient-to-b from-green-50/50 to-background dark:from-green-950/20 dark:to-background relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-4 mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {isArabic ? 'السياسات البيئية' : 'Environmental Policies'}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {environmentalPolicies.map((policy, index) => (
              <PolicyAccordion
                key={index}
                title={policy.title}
                content={policy.content}
                icon={policy.icon}
                isOpen={openEnvironment === index}
                onClick={() => setOpenEnvironment(openEnvironment === index ? null : index)}
                index={index}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Policies Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-5">
          <LazyImage src={safetyTraining} alt="Safety" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-4 mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {isArabic ? 'السياسات الاجتماعية' : 'Social Policies'}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {socialPolicies.map((policy, index) => (
              <PolicyAccordion
                key={index}
                title={policy.title}
                content={policy.content}
                icon={policy.icon}
                isOpen={openSocial === index}
                onClick={() => setOpenSocial(openSocial === index ? null : index)}
                image={index === 0 ? safetyTraining : undefined}
                index={index}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Governance Policies Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/50 to-background dark:from-purple-950/20 dark:to-background relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex items-center gap-4 mb-12 ${isArabic ? 'flex-row-reverse' : ''}`}
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {isArabic ? 'سياسات الحوكمة' : 'Governance Policies'}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {governancePolicies.map((policy, index) => (
              <PolicyAccordion
                key={index}
                title={policy.title}
                content={policy.content}
                icon={policy.icon}
                isOpen={openGovernance === index}
                onClick={() => setOpenGovernance(openGovernance === index ? null : index)}
                image={index === 0 ? governanceCard : undefined}
                index={index}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 relative overflow-hidden">
        {/* Background with low opacity */}
        <div className="absolute inset-0 opacity-10">
          <LazyImage src={sustainabilityHero} alt="Background" className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Masked text reveal animation */}
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-8">
                {isArabic 
                  ? 'نحن ملتزمون ببناء مستقبل أكثر استدامة من خلال عمليات نقل مسؤولة تضع البيئة والمجتمع في المقام الأول...'
                  : 'We are committed to building a more sustainable future through responsible transport operations that put environment and community first...'}
              </p>
            </motion.div>

            {/* Glowing signature */}
            <motion.div
              className="relative inline-block mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-green-500/20 via-royal-gold/20 to-green-500/20 rounded-full blur-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <p className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green">
                PETRA
              </p>
              <p className="mt-3 text-lg text-foreground/60">
                {isArabic ? 'شريكك الموثوق نحو مستقبل مستدام' : 'Your Trusted Partner for a Sustainable Future'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;