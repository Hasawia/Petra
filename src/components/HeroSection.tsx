import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
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
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroMain,
    titleKey: "hero.slide1.title",
    subtitleKey: "hero.slide1.subtitle",
    ctaKey: "hero.slide1.cta"
  },
  {
    id: 2,
    image: heroEngineers,
    titleKey: "hero.slide2.title",
    subtitleKey: "hero.slide2.subtitle",
    ctaKey: "hero.slide2.cta"
  },
  {
    id: 3,
    image: heroSafety,
    titleKey: "hero.slide3.title",
    subtitleKey: "hero.slide3.subtitle",
    ctaKey: "hero.slide3.cta"
  },
  {
    id: 4,
    image: heroNetwork,
    titleKey: "hero.slide4.title",
    subtitleKey: "hero.slide4.subtitle",
    ctaKey: "hero.slide4.cta"
  }
];

export const HeroSection = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideInterval = 5000; // 5 seconds per slide

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + (100 / (slideInterval / 100));
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Overlay */}
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
                >
                  {t(slides[currentSlide].ctaKey)}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Segmented Progress Bar - Desktop */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <div className="container mx-auto px-4 pb-8">
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className="flex-1 h-1.5 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden cursor-pointer hover:bg-white/40 transition-colors"
              >
                <motion.div
                  className="h-full bg-royal-gold"
                  initial={{ width: "0%" }}
                  animate={{
                    width: index === currentSlide ? `${progress}%` : index < currentSlide ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Navigation - Mobile */}
      <div className="absolute bottom-8 left-0 right-0 md:hidden">
        <div className="flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-royal-gold w-8"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
