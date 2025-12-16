import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Building2,
  Shield,
  Sparkles,
  Leaf,
  Activity,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type PanelLevel = "main" | "about" | "governance";

interface PanelItem {
  key: string;
  icon: any;
  path?: string;
  next?: PanelLevel;
}

export const AboutPanel = ({ isOpen, onClose }: AboutPanelProps) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [level, setLevel] = useState<PanelLevel>("main");

  const isRTL = language === "ar";
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  const goTo = (path: string) => {
    navigate(path);
    onClose();
  };

  const mainItems: PanelItem[] = [
    {
      key: "panel.about",
      icon: Building2,
      next: "about",
    },
    {
      key: "panel.whyPetra",
      icon: Sparkles,
      path: "/why-petra",
    },
    {
      key: "panel.governance",
      icon: Shield,
      next: "governance",
    },
    {
      key: "panel.sustainability",
      icon: Leaf,
      path: "/sustainability",
    },
  ];

  const aboutItems: PanelItem[] = [
    {
      key: "panel.about",
      icon: Building2,
      path: "/about",
    },
    {
      key: "panel.services",
      icon: Sparkles,
      path: "/services",
    },
    {
      key: "panel.safety",
      icon: Shield,
      path: "/safety",
    },
    {
      key: "panel.activities",
      icon: Activity,
      path: "/activities",
    },
  ];

  const governanceItems: PanelItem[] = [
    {
      key: "panel.governance",
      icon: Shield,
      path: "/governance",
    },
    {
      key: "panel.ethics",
      icon: Shield,
      path: "/ethics-governance",
    },
    {
      key: "panel.values",
      icon: Leaf,
      path: "/our-values",
    },
  ];

  const getItems = () => {
    switch (level) {
      case "about":
        return aboutItems;
      case "governance":
        return governanceItems;
      default:
        return mainItems;
    }
  };

  const getTitle = () => {
    switch (level) {
      case "about":
        return t("panel.about");
      case "governance":
        return t("panel.governance");
      default:
        return t("panel.title");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={() => {
              setLevel("main");
              onClose();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: isRTL ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? "100%" : "-100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className={`fixed top-0 ${
              isRTL ? "right-0" : "left-0"
            } z-[70] h-full w-full max-w-md bg-gradient-to-b from-petroleum-green via-petroleum-green/95 to-petroleum-green/90 shadow-2xl`}
          >
            {/* Close */}
            <button
              onClick={() => {
                setLevel("main");
                onClose();
              }}
              className={`absolute top-6 ${
                isRTL ? "left-6" : "right-6"
              } p-3 rounded-full bg-white/10 hover:bg-white/20 text-white`}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="h-full flex flex-col pt-20 px-8 pb-8 overflow-y-auto">
              {/* Header */}
              <div className="mb-10">
                {level !== "main" && (
                  <button
                    onClick={() => setLevel("main")}
                    className="mb-4 flex items-center gap-2 text-white/70 hover:text-royal-gold"
                  >
                    <BackIcon className="w-5 h-5" />
                    <span>{t("panel.back")}</span>
                  </button>
                )}

                <h2 className="text-3xl font-bold text-white mb-2">
                  {getTitle()}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-royal-gold to-royal-gold/50 rounded-full" />
              </div>

              {/* Items */}
              <div className="space-y-3">
                {getItems().map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => {
                        if (item.next) setLevel(item.next);
                        if (item.path) goTo(item.path);
                      }}
                      className={`w-full flex items-center gap-4 p-5 rounded-xl bg-white/5 hover:bg-white/15 transition-all`}
                    >
                      <div className="p-3 rounded-lg bg-white/10">
                        <Icon className="w-5 h-5 text-royal-gold" />
                      </div>

                      <span className="flex-1 text-lg text-white text-left">
                        {t(item.key)}
                      </span>

                      {item.next && (
                        <ChevronRight
                          className={`w-5 h-5 text-white/40 ${
                            isRTL ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-white/10 text-center text-royal-gold tracking-widest text-sm">
                PETRA
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
