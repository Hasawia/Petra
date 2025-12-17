import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Smartphone,
  Printer,
  ArrowDown,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactCard from "@/components/Contact/ContactCard";
import BusinessHours from "@/components/Contact/BusinessHours";
import LocationMap from "../components/Contact/LocationMap ";

const ContactUs = () => {
  const { t, dir } = useLanguage();

  const contactInfo = [
    {
      icon: Smartphone,
      title: t("contact.info.mobile"),
      value: t("contact.info.mobileValue"),
      details: null,
      delay: 0.1,
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: t("contact.info.phoneValue1"),
      details: t("contact.info.phoneValue2"),
      delay: 0.2,
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: t("contact.info.emailValue1"),
      details: t("contact.info.emailValue2"),
      delay: 0.3,
    },
    {
      icon: Printer,
      title: t("contact.info.fax"),
      value: t("contact.info.faxValue"),
      details: null,
      delay: 0.4,
    },
    {
      icon: MapPin,
      title: t("contact.info.address"),
      value: t("contact.info.addressValue"),
      details: null,
      delay: 0.5,
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt={t("contact.hero.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-petroleum-green/90 via-petroleum-green/80 to-petroleum-green/90" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Label */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
              <span className="text-royal-gold text-sm font-semibold tracking-[0.3em] uppercase">
                {t("contact.hero.label")}
              </span>
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              {t("contact.hero.title")}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-royal-gold via-royal-gold/70 to-royal-gold mx-auto rounded-full mb-8 shadow-lg shadow-royal-gold/40"
            />

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-2xl md:text-3xl text-white/90 font-light mb-6 tracking-wide"
            >
              {t("contact.hero.subtitle")}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              {t("contact.hero.description")}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm font-light">
              {t("common.scrollDown")}
            </span>
            <svg
              className="w-6 h-6 text-royal-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <ContactCard
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                details={item.details}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <BusinessHours />
        </div>
      </section>

      {/* Map */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <LocationMap />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
