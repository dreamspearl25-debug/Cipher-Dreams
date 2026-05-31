import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, RefreshCw, Layers, Sparkles, Sliders, ChevronRight, AlertTriangle, Hammer, CheckCircle } from 'lucide-react';

export default function TechnologySection() {
  const [activeTechTab, setActiveTechTab] = useState<'blade' | 'eplatform' | 'disus'>('blade');
  
  // Interactive safety simulator states
  const [nailTestStep, setNailTestStep] = useState<number>(0);

  const techInfo = {
    blade: {
      title: 'Revolutionary Blade Battery',
      tagline: 'A New Era of Uncompromising Safety & Durability',
      description: 'LFP (Lithium Iron Phosphate) cell modules structured in long blades that act as structural beams. By optimising space by up to 50%, the Blade Battery achieves supreme density while passing the legendary Nail Puncture safety test with zero fires.',
      highlights: [
        { label: 'Thermal Resilience', val: 'Passes 500°C Heat test' },
        { label: 'Physical Rigidity', val: 'Withstands 46-tonne heavyweight crush test' },
        { label: 'Longevity Life', val: 'Over 1.2M kilometers runtime span' }
      ],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop'
    },
    eplatform: {
      title: 'BYD e-Platform 3.0',
      tagline: 'The Ultimate Platform for Intelligent Driving',
      description: 'Designed purely for multi-drive EVs, incorporating the world’s first mass-produced 8-in-1 electric powertrain. Power, drive efficiency, controls, and battery safety are coupled in an integrated structure, delivering RWD sports-handling with ultra-low thermal consumption.',
      highlights: [
        { label: 'Integration level', val: '8-in-1 Highly coupled powertrain' },
        { label: 'Body Rigidity', val: 'Cell-to-Body (CTB) vehicle styling' },
        { label: 'Low-Temp Range', val: 'Enhanced winter mileage up to 20%' }
      ],
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop'
    },
    disus: {
      title: 'BYD DiSus Suspension System',
      tagline: 'Absolute Control in Multi-Terrain Dynamics',
      description: 'The first self-developed intelligent body control system for energy vehicles. Integrates comprehensive dampers, mechanical, hydraulic, and air suspensions to adjust roll, pitch, and yaw on the fly. Maintains complete car balance during cornering, braking, and drifting.',
      highlights: [
        { label: 'Response Speed', val: 'Ultra-fast millisecond adjustment' },
        { label: 'Ride Comfort', val: 'Reduces body roll impact by 40%' },
        { label: 'Extreme safety', val: 'Maintains drive balance even on 3-wheels' }
      ],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop'
    }
  };

  const activeTech = techInfo[activeTechTab];

  // Steps for puncture simulator
  const nailTestSteps = [
    { label: 'Initiate Safety Simulator', desc: 'Prepare mechanical steel pin & high-density energy battery packs under 100% load.', action: 'Start Test' },
    { label: 'Nail Penetration Triggered', desc: 'LFP Blade battery and high-cobalt Ternary Lithium battery both pierced with 5mm steel pin.' },
    { label: 'Ternary Lithium Reaction', desc: 'Ternary battery temperature shoots up past 500°C instantly, leading to thermal explosion and fire!' },
    { label: 'BYD Blade Battery Reaction', desc: 'Blade Battery maintains extreme stability. Temperature peaks safely around 30°C - 60°C. No smoke, no flame, complete structural integrity.' }
  ];

  return (
    <section id="technology" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Engineering Mastery</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight">
              Pioneering Core EV Intelligence
            </h2>
            <p className="text-gray-400 font-light max-w-2xl text-sm md:text-base leading-relaxed">
              BYD is a fully vertical-integrated new energy enterprise developing cell chemistries, power electronics, and body-control systems from scratch.
            </p>
          </div>

          {/* Quick Stats sidebar right */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-black/20 border border-white/5 space-y-1">
              <p className="text-3xl font-extrabold text-cyan-400 font-display">10,000+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Active Patents Registered</p>
            </div>
            <div className="p-5 rounded-2xl bg-black/20 border border-white/5 space-y-1">
              <p className="text-3xl font-extrabold text-emerald-400 font-display">6M+</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Safe EV Kilometres Driven</p>
            </div>
          </div>
        </div>

        {/* Technology Toggling Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT Sidebar: Tech Tabs selectors */}
          <div className="lg:col-span-4 space-y-3 flex flex-col justify-start">
            <button
              onClick={() => { setActiveTechTab('blade'); setNailTestStep(0); }}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none flex items-start space-x-4 ${
                activeTechTab === 'blade'
                  ? 'bg-slate-950 border-cyan-500/30 shadow-xl shadow-cyan-500/5'
                  : 'bg-black/10 border-white/5 hover:bg-black/20 hover:border-white/10'
              }`}
            >
              <Shield className={`w-6 h-6 shrink-0 mt-0.5 ${activeTechTab === 'blade' ? 'text-cyan-400' : 'text-gray-400'}`} />
              <div>
                <h3 className="font-bold text-base text-white font-display">Blade Battery Safety</h3>
                <p className="text-xs text-gray-400 mt-1 font-light">Structural integrity and zero ignition thermal safety benchmarks.</p>
              </div>
            </button>

            <button
              onClick={() => { setActiveTechTab('eplatform'); setNailTestStep(0); }}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none flex items-start space-x-4 ${
                activeTechTab === 'eplatform'
                  ? 'bg-slate-950 border-cyan-500/30 shadow-xl shadow-cyan-500/5'
                  : 'bg-black/10 border-white/5 hover:bg-black/20 hover:border-white/10'
              }`}
            >
              <Zap className={`w-6 h-6 shrink-0 mt-0.5 ${activeTechTab === 'eplatform' ? 'text-cyan-400' : 'text-gray-400'}`} />
              <div>
                <h3 className="font-bold text-base text-white font-display">e-Platform 3.0 Structure</h3>
                <p className="text-xs text-gray-400 mt-1 font-light">Fully integrated 8-in-1 electric drivetrain and space optimization.</p>
              </div>
            </button>

            <button
              onClick={() => { setActiveTechTab('disus'); setNailTestStep(0); }}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none flex items-start space-x-4 ${
                activeTechTab === 'disus'
                  ? 'bg-slate-950 border-cyan-500/30 shadow-xl shadow-cyan-500/5'
                  : 'bg-black/10 border-white/5 hover:bg-black/20 hover:border-white/10'
              }`}
            >
              <Sliders className={`w-6 h-6 shrink-0 mt-0.5 ${activeTechTab === 'disus' ? 'text-cyan-400' : 'text-gray-400'}`} />
              <div>
                <h3 className="font-bold text-base text-white font-display">DiSus Suspension control</h3>
                <p className="text-xs text-gray-400 mt-1 font-light">Millisecond body adjustments ensuring balance across terrain environments.</p>
              </div>
            </button>
          </div>

          {/* RIGHT Block: Content Area & interactive simulators */}
          <div className="lg:col-span-8 bg-slate-950 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTechTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                
                {/* Tech specifications text */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-white font-display">
                    {activeTech.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                    {activeTech.tagline}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                    {activeTech.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {activeTech.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2 text-xs text-gray-200">
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                        <span><strong>{h.label}:</strong> <span className="text-cyan-300">{h.val}</span></span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech graphic or interactive simulator representation */}
                <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] bg-slate-900 border border-white/15 flex flex-col justify-center items-center p-4">
                  {/* If Blade Battery: Load Nail safety Simulator tool */}
                  {activeTechTab === 'blade' ? (
                    <div className="w-full text-center space-y-4">
                      <p className="text-[10px] text-cyan-400 font-extrabold uppercase tracking-wider">BYD Safe-Core laboratory</p>
                      
                      {/* Step-by-step indicator */}
                      <div className="p-4 bg-slate-950 rounded-xl border border-white/5 text-left space-y-2">
                        <p className="text-xs font-semibold text-white">Nail Penetration Test Simulator</p>
                        
                        <div className="flex md:flex-row flex-col justify-between items-start md:items-center space-y-1 font-mono text-[10px]">
                          {nailTestStep === 0 && <span className="text-gray-400">Ready to fire pen test simulation.</span>}
                          {nailTestStep === 1 && <span className="text-yellow-400 animate-pulse">Steel pin plunging... Penetrating casing!</span>}
                          {nailTestStep === 2 && <span className="text-red-500 font-bold">Cobalt Ternary Cell: THERMAL OUTBREAK (540°C 🔥)</span>}
                          {nailTestStep === 3 && <span className="text-emerald-400 font-bold">BYD BLADE Cell: Balanced & Safe (32°C 🟢)</span>}
                        </div>

                        <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                          {nailTestSteps[nailTestStep].desc}
                        </p>
                      </div>

                      {/* Interactive next steps button */}
                      <button
                        onClick={() => setNailTestStep((prev) => (prev + 1) % nailTestSteps.length)}
                        className="px-5 py-2 rounded-full text-xs font-bold bg-white text-black hover:bg-cyan-400 hover:text-black transition-all shadow flex items-center justify-center space-x-2 mx-auto"
                      >
                        <Hammer className="w-3.5 h-3.5" />
                        <span>{nailTestStep === 3 ? 'Reset Simulation' : 'Next Step: ' + nailTestSteps[(nailTestStep+1)%nailTestSteps.length].label}</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={activeTech.image}
                        alt={activeTech.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] border border-white/5 rounded">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span className="font-semibold text-white uppercase tracking-wider">High fidelity rendering</span>
                      </div>
                    </>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
