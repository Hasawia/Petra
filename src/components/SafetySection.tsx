import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck, AlertTriangle, Leaf } from "lucide-react";

const highlights = [
  { key: "safety.highlight1", icon: ShieldCheck },
  { key: "safety.highlight2", icon: AlertTriangle },
  { key: "safety.highlight3", icon: Leaf }
];

export const SafetySection = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 bg-muted" id="safety">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 border-4 border-petroleum-green/20 rounded-full" />
              <div className="absolute inset-8 border-4 border-royal-gold/30 rounded-full" />
              <div className="absolute inset-16 border-4 border-petroleum-green/20 rounded-full" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-petroleum-green rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-12 h-12 text-royal-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-petroleum-green">HSE</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {t('safety.hse')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-petroleum-green mb-6">
              {t('safety.title')}
            </h2>
            <div className="w-20 h-1 bg-royal-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t('safety.description')}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-petroleum-green/10 flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-5 h-5 text-petroleum-green" />
                  </div>
                  <span className="text-foreground font-medium">
                    {t(highlight.key)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
