import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X, Cookie, ChevronRight, Sliders } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Show banner shortly after loading
  useEffect(() => {
    const consent = localStorage.getItem('byd_clone_cookie_consent_accepted');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (type: 'all' | 'essential') => {
    localStorage.setItem('byd_clone_cookie_consent_accepted', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
          id="cookie-consent-container"
        >
          <div className="max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Context */}
            <div className="flex items-start space-x-4 max-w-3xl">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-display">Personalise your BYD Digital Experience</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  We use cookies and equivalent telemetry frameworks to optimize user journeys, measure dynamic page traffic, deliver customized promotional car suggestions, and safely coordinate dealership test requests. You can change your preferences at any time.
                </p>
              </div>
            </div>

            {/* Selection Buttons */}
            <div className="flex flex-wrap gap-2 shrink-0 w-full md:w-auto justify-end">
              <button
                onClick={() => handleAction('essential')}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                Essential Only
              </button>
              <button
                onClick={() => handleAction('all')}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-black hover:bg-cyan-400 hover:text-black transition-all w-full sm:w-auto shadow-md"
              >
                Accept All Cookies
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 text-gray-500 hover:text-white transition-colors"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
