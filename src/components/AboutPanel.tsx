import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Building2, Sparkles, Shield, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const panelLinks = [
  { key: 'panel.about', path: '/about', icon: Building2 },
  { key: 'panel.whyPetra', path: '/why-petra', icon: Sparkles },
  { key: 'panel.governance', path: '/governance', icon: Shield },
  { key: 'panel.sustainability', path: '/sustainability', icon: Leaf },
];

export const AboutPanel = ({ isOpen, onClose }: AboutPanelProps) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Slide-in panel */}
          <motion.div
            initial={{ x: language === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: language === 'ar' ? '-100%' : '100%' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className={`fixed top-0 ${language === 'ar' ? 'left-0' : 'right-0'} z-[70] h-full w-full max-w-md bg-gradient-to-b from-petroleum-green via-petroleum-green/95 to-petroleum-green/90 shadow-2xl overflow-hidden`}
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors`}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Panel content */}
            <div className="h-full flex flex-col pt-20 px-8 pb-8 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-2">
                  {t('panel.title')}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-royal-gold to-royal-gold/50 rounded-full" />
              </motion.div>

              {/* Navigation links */}
              <nav className="flex-1 space-y-3">
                {panelLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  
                  return (
                    <motion.button
                      key={link.key}
                      onClick={() => handleNavigation(link.path)}
                      initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className={`w-full group relative flex items-center gap-4 p-5 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20 shadow-lg shadow-royal-gold/20' 
                          : 'bg-white/5 hover:bg-white/15'
                      }`}
                    >
                      {/* Active indicator glow */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={`absolute ${language === 'ar' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-1 h-8 bg-royal-gold rounded-full shadow-lg shadow-royal-gold/50`}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Icon */}
                      <div className={`p-3 rounded-lg ${isActive ? 'bg-royal-gold/20' : 'bg-white/10 group-hover:bg-royal-gold/10'} transition-colors`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-royal-gold' : 'text-white/80 group-hover:text-royal-gold'} transition-colors`} />
                      </div>

                      {/* Text */}
                      <span className={`flex-1 text-lg font-medium ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'} ${language === 'ar' ? 'text-right' : 'text-left'} transition-colors`}>
                        {t(link.key)}
                      </span>

                      {/* Arrow */}
                      <ChevronRight className={`w-5 h-5 text-white/40 group-hover:text-royal-gold ${language === 'ar' ? 'rotate-180' : ''} group-hover:translate-x-1 transition-all`} />

                      {/* Hover glow underline */}
                      <motion.div
                        className={`absolute bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} h-0.5 bg-gradient-to-r from-royal-gold via-royal-gold/50 to-transparent`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Footer decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-royal-gold/50" />
                  <span className="text-royal-gold">PETRA</span>
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-royal-gold/50" />
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 -right-20 w-40 h-40 bg-royal-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-royal-gold/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
