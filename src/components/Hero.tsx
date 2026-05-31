import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onConfigureClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onConfigureClick, onExploreClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPlaying = true; // Constantly play the cinematic auto-slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 'atto3',
      title: 'BYD ATTO 3',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'han',
      title: 'HAN EV',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'seal',
      title: 'BYD SEAL',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1920&auto=format&fit=crop',
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Background Image with subtle parallax scaling */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            {/* Soft high-end vignette cover for superior overlay legibility */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 h-full w-full" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Premium Slide Content Header */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            {/* Headline Title */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-normal tracking-wide text-white font-display select-none">
              {slides[currentSlide].title}
            </h1>

            {/* A single, stunning custom outlined CTA Button matching official BYD design */}
            <button
              onClick={onExploreClick}
              className="px-12 py-3.5 border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 rounded-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] focus:outline-none cursor-pointer"
            >
              Explore More
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Extreme Low-Profile Swipe Left & Right Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 hidden md:block focus:outline-none cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8 stroke-[1px]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-white/30 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 hidden md:block focus:outline-none cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-8 h-8 stroke-[1px]" />
      </button>

      {/* Sleek Line Progress Indicators bottom-centered */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="relative h-[3px] rounded-full cursor-pointer overflow-hidden bg-white/20 w-16 transition-all duration-300 hover:bg-white/40"
            aria-label={`Go to slide ${idx + 1}`}
          >
            {currentSlide === idx && (
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6.5, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-white"
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
