import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  details?: string | null;
  delay?: number;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  details,
  delay = 0,
}: ContactCardProps) {
  const { dir } = useLanguage();
  const isRTL = dir === "rtl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative"
    >
      <div
        className={`
          relative bg-white rounded-2xl p-8
          border border-gray-100
          shadow-sm hover:shadow-xl
          transition-all duration-500
          hover:border-royal-gold/30
          overflow-hidden
          ${isRTL ? "text-right" : "text-left"}
        `}
      >
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-petroleum-green via-royal-gold to-petroleum-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div
          className={`
            inline-flex items-center justify-center
            w-14 h-14 rounded-xl
            bg-gradient-to-br from-petroleum-green to-petroleum-green/80
            group-hover:from-royal-gold group-hover:to-royal-gold/80
            transition-all duration-500
            shadow-lg
            ${isRTL ? "ml-auto" : ""}
          `}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-lg font-semibold text-foreground">
          {title}
        </h3>

        {/* Value (numbers stay LTR) */}
        <p
          dir="ltr"
          className="mt-2 text-petroleum-green font-medium text-lg text-left"
        >
          {value}
        </p>

        {/* Details (same color & direction) */}
        {details && (
          <p
            dir="ltr"
            className="mt-1 text-petroleum-green font-medium text-lg text-left"
          >
            {details}
          </p>
        )}

        {/* Decorative corner */}
        <div
          className={`
            absolute bottom-0 ${isRTL ? "left-0" : "right-0"}
            w-20 h-20
            bg-gradient-to-br from-royal-gold/5 to-transparent
            rounded-tl-full
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          `}
        />
      </div>
    </motion.div>
  );
}
