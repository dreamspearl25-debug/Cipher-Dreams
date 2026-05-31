import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUp, Mail, ShieldAlert, Heart, Landmark } from 'lucide-react';

interface FooterProps {
  onVehicleClick: (id: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onVehicleClick, onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinksByGroup = [
    {
      title: 'Our Vehicles',
      links: [
        { name: 'BYD SEAL (Sports Sedan)', id: 'seal' },
        { name: 'BYD ATTO 3 (Compact SUV)', id: 'atto3' },
        { name: 'BYD DOLPHIN (Hatchback)', id: 'dolphin' },
        { name: 'BYD HAN EV (Luxury Executive)', id: 'han' },
        { name: 'BYD TANG EV (7-Seater Family)', id: 'tang' }
      ]
    },
    {
      title: 'Technology & Eco',
      links: [
        { name: 'Blade Battery Security', sectionId: 'technology' },
        { name: 'e-Platform 3.0 Powertrain', sectionId: 'technology' },
        { name: 'Cell-to-Body (CTB)', sectionId: 'technology' },
        { name: 'DiSus Active Chassis', sectionId: 'technology' },
        { name: 'Solar Energy & Monorails', sectionId: 'green-future' }
      ]
    },
    {
      title: 'Owner Ecosystem',
      links: [
        { name: 'Virtual Vehicle Configurator', sectionId: 'configurator' },
        { name: 'Locate Nearest Dealer', href: '#' },
        { name: 'Home Chargers Installation', href: '#' },
        { name: '8-Year Powertrain Warranty', href: '#' },
        { name: 'Request Owner Support', href: '#' }
      ]
    },
    {
      title: 'About BYD Brand',
      links: [
        { name: 'Build Your Dreams Heritage', sectionId: 'green-future' },
        { name: 'Global Energy Mission', sectionId: 'green-future' },
        { name: 'Investor Relations Info', href: '#' },
        { name: 'Sustainable Careers Hub', href: '#' },
        { name: 'Corporate Newsroom', sectionId: 'news' }
      ]
    }
  ];

  const handleLinkClick = (link: any) => {
    if (link.id) {
      onVehicleClick(link.id);
    } else if (link.sectionId) {
      onNavigateToSection(link.sectionId);
    }
  };

  return (
    <footer id="footer" className="bg-slate-950 text-white border-t border-white/5 pt-16 pb-8 relative z-20">
      
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Segment: Logo + Social Integration */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-12 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 120 28" className="h-6 w-auto text-white fill-current">
                <path d="M5,4 H16 C20.5,4 23.5,6.2 23.5,10 C23.5,12.2 22,14 19.5,14.8 C22.5,15.5 24.5,17.5 24.5,21.2 C24.5,25 21,27 16,27 H5 V4 Z M10.5,8.8 V13.5 H15 C16.8,13.5 18,12.8 18,11.2 C18,9.5 16.8,8.8 15,8.8 H10.5 Z M10.5,17.8 V22.2 H15.5 C17.5,22.2 18.8,21.5 18.8,20 C18.8,18.5 17.5,17.8 15.5,17.8 H10.5 Z" />
                <path d="M48,4 L39,17 L30,4 H24 L36,21 V27 H42 V21 L54,4 H48 Z" />
                <path d="M57,4 H68 C75,4 80,8.5 80,15.5 C80,22.5 75,27 68,27 H57 V4 Z M62.5,8.6 V22.4 H68 C71.5,22.4 74,20 74,15.5 C74,11 71.5,8.6 68,8.6 H62.5 Z" />
              </svg>
            </div>
            <p className="text-xs text-gray-400 font-light max-w-sm leading-relaxed">
              BYD (Build Your Dreams) is a multinational high-tech company operating across electronics, new energy, and rail transit ecosystems.
            </p>
          </div>

          {/* Social Network Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Connect with dreams:</span>
            <div className="flex items-center space-x-3">
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-cyan-500 hover:text-black hover:border-transparent text-gray-300 transition-all shadow-md" aria-label="BYD Facebook page">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-cyan-500 hover:text-black hover:border-transparent text-gray-300 transition-all shadow-md" aria-label="BYD Instagram page">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-cyan-500 hover:text-black hover:border-transparent text-gray-300 transition-all shadow-md" aria-label="BYD Twitter profile">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-cyan-500 hover:text-black hover:border-transparent text-gray-300 transition-all shadow-md" aria-label="BYD YouTube channel">
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-cyan-500 hover:text-black hover:border-transparent text-gray-300 transition-all shadow-md" aria-label="BYD LinkedIn post">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Segment: Extensive grouped site maps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {footerLinksByGroup.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-extrabold uppercase text-cyan-400 tracking-wider font-display">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-white transition-colors font-light block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-xs text-gray-400 hover:text-white text-left transition-colors font-light block focus:outline-none"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Segment: Corporate Disclaimers + Back to Top */}
        <div className="border-t border-white/5 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-light">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span>© {currentYear} BYD Global Enterprise. All rights reserved.</span>
            <div className="flex items-center space-x-3 mt-1 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Information Policy</a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Cookie Dashboard Settings</a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Legal Terms & Notices</a>
            </div>
          </div>

          {/* Core scrolltop helper */}
          <button
            onClick={handleScrollTop}
            className="group px-4 py-2 border border-white/10 rounded-full hover:border-white text-gray-400 hover:text-white text-xs font-semibold flex items-center space-x-1 transition-all focus:outline-none shrink-0"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
