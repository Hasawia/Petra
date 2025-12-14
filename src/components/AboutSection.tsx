import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Target, Heart, Leaf, Award } from "lucide-react";

const values = [
  { key: "about.values.safety", icon: Shield },
  { key: "about.values.reliability", icon: Target },
  { key: "about.values.integrity", icon: Heart },
  { key: "about.values.sustainability", icon: Leaf },
  { key: "about.values.excellence", icon: Award }
];

export const AboutSection = () => {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 bg-petroleum-green text-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-royal-gold mb-8" />
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-royal-gold font-bold text-lg mb-2">
                  {t('about.vision.title')}
                </h3>
                <p className="text-white/80">
                  {t('about.vision.text')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-royal-gold font-bold text-lg mb-2">
                  {t('about.mission.title')}
                </h3>
                <p className="text-white/80">
                  {t('about.mission.text')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">
              {t('about.values.title')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-royal-gold/20 flex items-center justify-center mb-3">
                    <value.icon className="w-6 h-6 text-royal-gold" />
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    {t(value.key)}
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
