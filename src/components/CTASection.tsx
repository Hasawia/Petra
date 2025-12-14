import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

export const CTASection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-petroleum-green via-petroleum-green to-petroleum-green/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEwzMCA2ME0wIDMwTDYwIDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-royal-gold/20 flex items-center justify-center"
          >
            <Handshake className="w-10 h-10 text-royal-gold" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-10">
            {t('cta.description')}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              className="bg-royal-gold hover:bg-royal-gold/90 text-petroleum-green font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {t('cta.button1')}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-petroleum-green font-semibold px-8 py-6 text-lg transition-all"
            >
              {t('cta.button2')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
