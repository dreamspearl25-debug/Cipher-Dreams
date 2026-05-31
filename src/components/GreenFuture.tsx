import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf, Trees, Globe, Droplet, ArrowRight, Sparkles } from 'lucide-react';

export default function GreenFuture() {
  const [co2Saved, setCo2Saved] = useState(56230480); // Base value
  const [evSold, setEvSold] = useState(7230400);

  // Slowly increment stats to simulate real-time tracking dashboard
  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Saved((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setEvSold((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const ecos = [
    {
      title: 'Solar & Energy Storage',
      desc: 'Developing high-density residential energy storage batteries and grid-scale converters to capture, store, and utilize solar power efficiently.',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'SkyRail & Grid Transit',
      desc: 'Pioneering medium-capacity elevated straddle monorails to optimize traffic congestion and commute patterns in dense global megacities.',
      img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="green-future" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Core Campaign message */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 animate-bounce" />
              <span>Ecological Initiative</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Cool the Earth by 1°C
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              We believe zero emission is a necessity, not an option. BYD is dedicated to delivering a holistic clean-energy closed loop: from solar extraction, advanced storage distribution, to high-performance zero-carbon highway transportation.
            </p>

            {/* Simulated Live Counter grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-emerald-500 opacity-20"><Globe className="w-8 h-8" /></div>
                <p className="text-[10px] uppercase font-bold text-gray-400">CO2 Emissions Saved</p>
                <div className="space-y-0.5">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black font-display text-emerald-400">
                    {co2Saved.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-gray-500">Metric tons offset globally</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-cyan-500 opacity-20"><Leaf className="w-8 h-8" /></div>
                <p className="text-[10px] uppercase font-bold text-gray-400">Total NEVs Registered</p>
                <div className="space-y-0.5">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black font-display text-cyan-400">
                    {evSold.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-gray-500">New Energy cars on road</p>
                </div>
              </div>
            </div>

            {/* Ecological Equivalent */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center space-x-3 text-xs text-emerald-300">
              <Trees className="w-5 h-5 shrink-0" />
              <span>This contribution is equivalent to planting approximately <strong>{(co2Saved * 45).toLocaleString()} trees</strong> worldwide.</span>
            </div>
          </div>

          {/* RIGHT: High quality auxiliary ecosystems card grid */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Sustainable Infrastructure</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ecos.map((eco, idx) => (
                <div key={idx} className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                  <div className="aspect-video relative overflow-hidden bg-slate-950">
                    <img
                      src={eco.img}
                      alt={eco.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>
                  <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors font-display">{eco.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">{eco.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
