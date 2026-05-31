import React, { useState, useEffect } from 'react';
import { Search, Globe, Menu, X, ChevronDown, Award, Sparkles, BatteryCharging, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onVehicleClick: (id: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Navbar({ onVehicleClick, onNavigateToSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    {
      id: 'vehicles',
      name: 'Vehicles',
      dropdown: [
        { name: 'BYD SEAL', tag: 'High-Performance Sedan', id: 'seal', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=60' },
        { name: 'BYD ATTO 3', tag: 'Smart Compact SUV', id: 'atto3', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60' },
        { name: 'BYD DOLPHIN', tag: 'Agile Urban Hatchback', id: 'dolphin', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60' },
        { name: 'BYD HAN', tag: 'Premium Executive Sedan', id: 'han', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60' },
        { name: 'BYD TANG', tag: '7-Seater Luxury SUV', id: 'tang', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60' }
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      dropdown: [
        { name: 'Blade Battery', tag: 'Ultra-safe & Durable', sectionId: 'technology' },
        { name: 'e-Platform 3.0', tag: 'Highly Integrated Powertrain', sectionId: 'technology' },
        { name: 'CTB technology', tag: 'Cell-to-Body Rigidity', sectionId: 'technology' },
        { name: 'DiSus System', tag: 'Intelligent Body Control', sectionId: 'technology' }
      ]
    },
    { id: 'configurator', name: 'Configure BYD', sectionId: 'configurator' },
    { id: 'green-future', name: 'Cool Earth by 1°C', sectionId: 'green-future' },
    { id: 'news', name: 'News & Stories', sectionId: 'news' }
  ];

  const handleNavClick = (item: any) => {
    if (item.sectionId) {
      onNavigateToSection(item.sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const sampleSearchSuggestions = [
    'Blade Battery',
    'BYD SEAL price',
    'Test Drive booking',
    'Atto 3 specs',
    'Dealership locator'
  ];

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand/Logo */}
          <button
            onClick={() => onNavigateToSection('hero')}
            className="flex items-center space-x-2 text-white group focus:outline-none"
            id="nav-logo"
          >
            {/* Elegant futuristic BYD Minimalist SVG Logo representation */}
            <svg
              viewBox="0 0 120 28"
              className="h-6 w-auto text-white fill-current transition-transform duration-300 group-hover:scale-105"
            >
              {/* BYD Lettering with customized futuristic cuts */}
              <path d="M5,4 H16 C20.5,4 23.5,6.2 23.5,10 C23.5,12.2 22,14 19.5,14.8 C22.5,15.5 24.5,17.5 24.5,21.2 C24.5,25 21,27 16,27 H5 V4 Z M10.5,8.8 V13.5 H15 C16.8,13.5 18,12.8 18,11.2 C18,9.5 16.8,8.8 15,8.8 H10.5 Z M10.5,17.8 V22.2 H15.5 C17.5,22.2 18.8,21.5 18.8,20 C18.8,18.5 17.5,17.8 15.5,17.8 H10.5 Z" />
              <path d="M48,4 L39,17 L30,4 H24 L36,21 V27 H42 V21 L54,4 H48 Z" />
              <path d="M57,4 H68 C75,4 80,8.5 80,15.5 C80,22.5 75,27 68,27 H57 V4 Z M62.5,8.6 V22.4 H68 C71.5,22.4 74,20 74,15.5 C74,11 71.5,8.6 68,8.6 H62.5 Z" />
              {/* Tagline tiny "BUILD YOUR DREAMS" */}
              <rect x="85" y="11" width="30" height="0.6" fill="rgba(255,255,255,0.4)" />
              <text x="85" y="22" fontSize="5.5" fontWeight="bold" letterSpacing="0.4" fill="rgba(255,255,255,0.7)">BYD</text>
            </svg>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8" id="nav-desktop-links">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.dropdown ? setActiveDropdown(item.id) : null}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item)}
                  className="flex items-center text-sm font-medium tracking-wide text-white/80 hover:text-white py-2 focus:outline-none transition-colors"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown Menu Desktop */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 p-4"
                    >
                      {item.id === 'vehicles' ? (
                        <div className="grid grid-cols-2 gap-4">
                          {item.dropdown.map((sub, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                onVehicleClick(sub.id!);
                                setActiveDropdown(null);
                              }}
                              className="group/item flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                            >
                              <img
                                src={sub.image}
                                alt={sub.name}
                                className="w-16 h-10 object-cover rounded bg-white/5 transition-transform group-hover/item:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                                  {sub.name}
                                </h4>
                                <p className="text-xs text-white/50">{sub.tag}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((sub, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                handleNavClick(sub);
                                setActiveDropdown(null);
                              }}
                              className="group/item flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                            >
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors">
                                  {sub.name}
                                </h4>
                                <p className="text-xs text-white/50">{sub.tag}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 text-cyan-400 transition-all" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                        <span>Ready to transition to zero emission?</span>
                        <button
                          onClick={() => {
                            onNavigateToSection('configurator');
                            setActiveDropdown(null);
                          }}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                        >
                          Launch Builder <ArrowRight className="ml-1 w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLangModalOpen(true)}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors focus:outline-none hidden md:flex items-center space-x-1 text-xs"
              title="Global Language selector"
              id="btn-lang-selector"
            >
              <Globe className="w-4 h-4" />
              <span>EN / INT</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors focus:outline-none"
              title="Search the site"
              id="btn-nav-search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-colors focus:outline-none lg:hidden"
              id="btn-mobile-hamburger"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slideout Immersive Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col pt-24 px-6 md:px-12 backdrop-blur-xl"
          >
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                <div className="flex items-center space-x-3 w-full">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vehicles, technology, chargers..."
                    className="w-full bg-transparent border-none text-white text-xl md:text-2xl focus:outline-none placeholder-gray-500 font-light"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="p-2 text-gray-400 hover:text-white rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Suggestions */}
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">Suggested searches</p>
                <div className="flex flex-wrap gap-2">
                  {sampleSearchSuggestions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(item)}
                      className="px-4 py-2 rounded-full border border-gray-800 text-sm text-gray-300 hover:border-gray-600 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live search result dynamic feedback mockup */}
              {searchQuery && (
                <div className="mt-8 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <p className="text-xs text-gray-400 mb-2">Simulated search results for "{searchQuery}"</p>
                  <div className="space-y-3">
                    <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-all">
                      <h4 className="text-sm font-semibold text-white">BYD SEAL Luxury Sedan Specs</h4>
                      <p className="text-xs text-gray-400">Range up to 570 km WLTP, 3.8s Acceleration 0-100 km/h with high power CTB drive.</p>
                    </div>
                    <div className="p-3 hover:bg-white/5 rounded-lg cursor-pointer transition-all">
                      <h4 className="text-sm font-semibold text-white">Blade Battery Tech Whitepaper</h4>
                      <p className="text-xs text-gray-400">Revolutionary safety tests including nail penetration and hot furnace test.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Language Selector Modal */}
      <AnimatePresence>
        {isLangModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setIsLangModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full text-white shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLangModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 mb-6">
                <Globe className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold">Select Region & Language</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-cyan-400 tracking-wider mb-3">Europe</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><button className="hover:text-white transition-colors">United Kingdom (English)</button></li>
                    <li><button className="hover:text-white transition-colors">Germany (Deutsch)</button></li>
                    <li><button className="hover:text-white transition-colors">France (Français)</button></li>
                    <li><button className="hover:text-white transition-colors">Italy (Italiano)</button></li>
                    <li><button className="hover:text-white transition-colors">Spain (Español)</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-cyan-400 tracking-wider mb-3">Asia Pacific</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><button className="hover:text-white transition-colors">Global (English)</button></li>
                    <li><button className="hover:text-white transition-colors">China (简体中文)</button></li>
                    <li><button className="hover:text-white transition-colors">Japan (日本語)</button></li>
                    <li><button className="hover:text-white transition-colors">Australia (English)</button></li>
                    <li><button className="hover:text-white transition-colors">Thailand (ไทย)</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-cyan-400 tracking-wider mb-3">Americas</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><button className="hover:text-white transition-colors">United States (English)</button></li>
                    <li><button className="hover:text-white transition-colors">Brazil (Português)</button></li>
                    <li><button className="hover:text-white transition-colors">Mexico (Español)</button></li>
                    <li><button className="hover:text-white transition-colors">Chile (Español)</button></li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setIsLangModalOpen(false)}
                  className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
                >
                  Save Preference
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-30 flex flex-col justify-between pt-24 px-6 pb-8 lg:hidden"
          >
            <nav className="space-y-6 pt-4 flex-grow overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.id} className="border-b border-white/5 pb-4">
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-lg font-semibold text-white/90 focus:outline-none"
                    >
                      {item.name}
                    </button>
                  </div>

                  {item.dropdown && (
                    <div className="grid grid-cols-2 gap-3 mt-3 pl-2">
                      {item.dropdown.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (sub.id) {
                              onVehicleClick(sub.id);
                            } else if (sub.sectionId) {
                              onNavigateToSection(sub.sectionId);
                            }
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-left py-2 px-3 hover:bg-white/5 rounded text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <div className="font-semibold text-white/80">{sub.name}</div>
                          <div className="text-[10px] text-gray-500 line-clamp-1">{sub.tag}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  setIsLangModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-white/80 px-4 py-2 hover:bg-white/5 rounded-xl w-full transition-colors"
              >
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">English / Global Selector</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
