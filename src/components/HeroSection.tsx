import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLangLink } from "@/hooks/useLangLink";
import heroMain from "@/assets/hero-main.jpg";
import heroEngineers from "@/assets/hero-engineers.jpg";
import heroSafety from "@/assets/hero-safety.jpg";
import heroNetwork from "@/assets/hero-network.jpg";

interface Slide {
  id: number;
  image: string;
  titleKey: string;
  subtitleKey: string;
  ctaKey: string;
  ctaTarget: string;
  ctaType: "section" | "page";
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroMain,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    ctaKey: "hero.slide1.cta",
    ctaTarget: "/contact",
    ctaType: "page",
  },
  {
    id: 2,
    image: heroEngineers,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    ctaKey: "hero.slide2.cta",
    ctaTarget: "/why-petra",
    ctaType: "page",
  },
  {
    id: 3,
    image: heroSafety,
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle",
    ctaKey: "hero.slide3.cta",
    ctaTarget: "/safety",
    ctaType: "page",
  },
  {
    id: 4,
    image: heroNetwork,
    titleKey: "hero.slide4.title",
    subtitleKey: "hero.slide4.subtitle",
    ctaKey: "hero.slide4.cta",
    ctaTarget: "services",
    ctaType: "section",
  },
];

export const HeroSection = () => {
  const { t } = useLanguage();
  const langLink = useLangLink();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused) return;

      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 100 / (slideInterval / 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handleCTA = (slide: Slide) => {
    if (slide.ctaType === "section") {
      const section = document.getElementById(slide.ctaTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${slide.ctaTarget}`;
      }
    } else {
      // استخدم langLink للصفحات
      window.location.href = langLink(slide.ctaTarget);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-petroleum-green/90 via-petroleum-green/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-3xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {t(slides[currentSlide].titleKey)}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  {t(slides[currentSlide].subtitleKey)}
                </p>

                <Button
                  size="lg"
                  className="bg-royal-gold hover:bg-royal-gold/90 text-petroleum-green font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => handleCTA(slides[currentSlide])}
                >
                  {t(slides[currentSlide].ctaKey)}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <div className="container mx-auto px-4 pb-8">
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-royal-gold"
                  animate={{
                    width:
                      index === currentSlide
                        ? `${progress}%`
                        : index < currentSlide
                        ? "100%"
                        : "0%",
                  }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dots */}
      <div className="absolute bottom-8 left-0 right-0 md:hidden">
        <div className="flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-royal-gold w-8"
                  : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
