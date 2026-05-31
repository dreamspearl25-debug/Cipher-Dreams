import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Mail, ChevronRight, MessageSquare, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { NewsStory } from '../types';

export default function NewsSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const newsData: NewsStory[] = [
    {
      id: 'n1',
      title: 'BYD SEAL Secures Top 3 Global Car of the Year Nominees',
      summary: 'Acknowledged globally for excellence in streamlined Ocean Aesthetics, ultra-robust CTB structural build, and high sports handling.',
      category: 'Excellence & Awards',
      date: 'May 14, 2026',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop',
      readTime: '3 min read'
    },
    {
      id: 'n2',
      title: 'Rollout of the Revolutionary e-Platform 3.0 Evo Globally',
      summary: 'Introducing state-of-the-art 23,000 RPM high-speed electric motors to rewrite high-acceleration parameters on consumer passenger vehicles.',
      category: 'Innovation & Tech',
      date: 'Apr 28, 2026',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop',
      readTime: '4 min read'
    },
    {
      id: 'n3',
      title: 'BYD Partners with UEFA EURO™ as Official E-Mobility Sponsor',
      summary: 'Enabling sustainable tournament mobility loops with 100% emission-free executive transport fleets across all host cities.',
      category: 'Events & Partners',
      date: 'Mar 10, 2026',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop',
      readTime: '2 min read'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="news" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Global Corporate News</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white">
              BYD News & Stories
            </h2>
            <p className="text-gray-400 font-light mt-1 max-w-2xl text-sm md:text-base leading-relaxed">
              Stay fully updated with our newest EV announcements, scientific patents breakthroughs, and global energy campaign milestones.
            </p>
          </div>

          <button className="flex items-center space-x-2 px-6 py-3 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all text-gray-300">
            <span>Explore All Stories</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stories list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article
              key={news.id}
              className="bg-slate-950 border border-white/5 rounded-2xl overflow-hidden group hover:border-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
              id={`news-card-${news.id}`}
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent Category Banner */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10">
                  <span className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase">{news.category}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    <span>{news.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <span>{news.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-display line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer">
                  <span>Read Full Article</span>
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dynamic Newsletter Registration panel */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 to-slate-900 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent pointer-events-none" />
          
          <div className="space-y-2 max-w-xl text-center lg:text-left z-10">
            <h3 className="text-2xl font-black font-display text-white">Join the BYD Circular</h3>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
              Receive special previews of upcoming car launches, local test drive slots, Blade Battery research papers, and exclusive VIP owner invites.
            </p>
          </div>

          <div className="w-full max-w-md z-10">
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 w-full"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow px-5 py-3.5 rounded-xl bg-slate-900 border border-white/10 text-white font-light text-sm focus:outline-none focus:border-cyan-400 placeholder-gray-500 w-full"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-white text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-400 hover:text-black transition-all flex items-center justify-center space-x-1 hover:shadow-lg hover:shadow-cyan-400/10 shrink-0"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Subscribe</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex items-center space-x-3 text-emerald-300 text-sm"
                >
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold">Subscription confirmed!</p>
                    <p className="text-xs text-emerald-400 font-light mt-0.5">Welcome aboard. We’ll notify you when VIP slots open.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
