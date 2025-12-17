import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BusinessHours() {
  const { t, dir } = useLanguage();
  const isRTL = dir === "rtl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div
        className={`
          max-w-2xl mx-auto
          bg-white
          rounded-3xl p-10
          border border-border
          shadow-xl
          overflow-hidden
          ${isRTL ? "text-right" : "text-left"}
        `}
      >
        {/* Decorative corner */}
        <div
          className={`absolute top-0 ${
            isRTL ? "left-0" : "right-0"
          } w-32 h-32 bg-royal-gold/10 rounded-bl-full`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-royal-gold rounded-2xl flex items-center justify-center shadow-lg">
              <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground">
                {t("contact.hours.title")}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-royal-gold to-transparent mt-2 rounded-full" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-muted/30 rounded-2xl border border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {t("contact.hours.label")}
                </p>
                <p className="text-xl font-semibold text-foreground">
                  {t("contact.hours.weekdays")}
                </p>
              </div>

              <div className={isRTL ? "text-left" : "text-right"}>
                <p className="text-sm text-muted-foreground mb-1">
                  {t("contact.hours.timeLabel")}
                </p>
                <p className="text-xl font-semibold text-royal-gold">
                  {t("contact.hours.time")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl border border-border">
              <div className="w-2 h-2 rounded-full bg-royal-gold animate-pulse" />
              <p className="text-sm text-muted-foreground">
                {t("contact.hours.closed")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
