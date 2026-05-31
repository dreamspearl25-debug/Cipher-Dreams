import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Download, Clipboard, Milestone, HelpCircle, FileText, ChevronRight, Zap, Info, ShieldAlert } from 'lucide-react';
import { vehiclesData } from './VehicleShowcase';
import { Vehicle } from '../types';

interface ConfigureSectionProps {
  selectedVehicleId: string | null;
  onSelectVehicle: (id: string) => void;
}

export default function ConfigureSection({ selectedVehicleId, onSelectVehicle }: ConfigureSectionProps) {
  // If no external ID is selected, default to the SEAL
  const activeCarId = selectedVehicleId || 'seal';
  const currentCar = vehiclesData.find(c => c.id === activeCarId) || vehiclesData[0];

  // Configurator preferences states
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedWheel, setSelectedWheel] = useState<'aero' | 'sport'>('aero');
  const [selectedInterior, setSelectedInterior] = useState<'vegan' | 'nappa'>('vegan');
  const [premiumAudio, setPremiumAudio] = useState(false);
  const [isBuildSaved, setIsBuildSaved] = useState(false);
  const [buildCode, setBuildCode] = useState('');

  // Automatically reset options when the car type changes
  useEffect(() => {
    setSelectedColorIdx(0);
    setSelectedWheel('aero');
    setSelectedInterior('vegan');
    setPremiumAudio(false);
    setIsBuildSaved(false);
  }, [activeCarId]);

  // Calculate customized total price
  const basePriceInt = parseInt(currentCar.startingPrice.replace(/[^0-9]/g, ''));
  const wheelSurcharge = selectedWheel === 'sport' ? 1200 : 0;
  const interiorSurcharge = selectedInterior === 'nappa' ? 2200 : 0;
  const audioSurcharge = premiumAudio ? 1800 : 0;
  const totalPrice = basePriceInt + wheelSurcharge + interiorSurcharge + audioSurcharge;

  // Monthly estimate breakdown mock
  const monthlyPayment = Math.round((totalPrice * 0.7) / 48);

  const handleSaveBuild = () => {
    const randomHex = Math.random().toString(16).substr(2, 6).toUpperCase();
    setBuildCode(`BYD-${currentCar.name.replace(/\s+/g, '').toUpperCase()}-${randomHex}`);
    setIsBuildSaved(true);
  };

  const currentColorObj = currentCar.colors[selectedColorIdx] || currentCar.colors[0];

  return (
    <section id="configurator" className="py-24 bg-slate-950 text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Space</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white">
            Custom Build Your BYD
          </h2>
          <p className="text-gray-400 font-light mt-1 text-sm md:text-base max-w-2xl">
            Select a vehicle chassis, customize paint pigments, pick wheel aero options, and style the luxury interior of your future emissionless ride.
          </p>
        </div>

        {/* Configuration Setup Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Preview canvas area */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Model Rapid Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-white/5 rounded-2xl">
              {vehiclesData.map((car) => (
                <button
                  key={car.id}
                  onClick={() => onSelectVehicle(car.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all focus:outline-none ${
                    activeCarId === car.id
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {car.name}
                </button>
              ))}
            </div>

            {/* Simulated Live Render Screen */}
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[350px] aspect-[16/10] overflow-hidden group">
              
              {/* Radial ambient light based on selected automotive color */}
              <div
                className="absolute w-[300px] h-[300px] rounded-full filter blur-[100px] opacity-25 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: currentColorObj.hex }}
              />

              <img
                src={currentColorObj.previewUrl}
                alt={currentCar.name}
                className="w-full max-w-[500px] object-contain transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Holographic paint indicator */}
              <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] md:text-xs">
                <span className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ backgroundColor: currentColorObj.hex }} />
                <span className="text-gray-300 font-medium">Fluid Paint: <span className="text-white font-semibold">{currentColorObj.name}</span></span>
              </div>

              {/* Specs Badge Indicators overlay */}
              <div className="absolute top-6 right-6 hidden md:flex flex-col space-y-2">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-right text-xs">
                  <p className="text-[9px] text-gray-500 uppercase font-bold">Standard range</p>
                  <p className="font-bold text-cyan-300">{currentCar.specs.range}</p>
                </div>
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-right text-xs">
                  <p className="text-[9px] text-gray-500 uppercase font-bold">Acceleration</p>
                  <p className="font-bold text-emerald-400">{currentCar.specs.acceleration}</p>
                </div>
              </div>
            </div>

            {/* Quick Informational Notice */}
            <div className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5 text-xs text-gray-400">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Prices shown are estimated starting costs excl. regional registration subventions and tax benefits. All BYD vehicles come standard with highly secure <span className="text-white font-semibold">Blade Battery technology</span>, supporting over-the-air smartphone updates and a 8-year powertrain guarantee.
              </p>
            </div>
          </div>

          {/* RIGHT: Customize Controls panel */}
          <div className="lg:col-span-5 bg-slate-900 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-6">
              
              {/* Control A: Paint Colors */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">01 / Choose Exterior Paint</h4>
                  <span className="text-xs text-gray-400">{currentColorObj.name}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {currentCar.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIdx(idx)}
                      className={`relative w-11 h-11 rounded-full border-2 transition-all duration-300 flex items-center justify-center focus:outline-none ${
                        selectedColorIdx === idx
                          ? 'border-cyan-400 scale-110 shadow-lg shadow-cyan-400/25'
                          : 'border-white/10 hover:border-white/30 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColorIdx === idx && (
                        <Check className="w-4 h-4 text-black mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Control B: Wheels Choice */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">02 / Aero Wheels Styling</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedWheel('aero')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedWheel === 'aero'
                        ? 'bg-white/10 border-cyan-400 text-white shadow'
                        : 'border-white/5 hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">18" Multi-Spoke Aero</p>
                    <p className="text-[10px] mt-1 text-gray-400">Included Standard</p>
                  </button>
                  <button
                    onClick={() => setSelectedWheel('sport')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedWheel === 'sport'
                        ? 'bg-white/10 border-cyan-400 text-white shadow'
                        : 'border-white/5 hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">19" Performance turbine</p>
                    <p className="text-[10px] mt-1 text-cyan-400">+ €1,200</p>
                  </button>
                </div>
              </div>

              {/* Control C: Interior Cabin */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">03 / Interior Comfort Lounge</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedInterior('vegan')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedInterior === 'vegan'
                        ? 'bg-white/10 border-cyan-400 text-white shadow'
                        : 'border-white/5 hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">Premium Eco Vegan Leather</p>
                    <p className="text-[10px] mt-1 text-gray-400">Included Standard</p>
                  </button>
                  <button
                    onClick={() => setSelectedInterior('nappa')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedInterior === 'nappa'
                        ? 'bg-white/10 border-cyan-400 text-white shadow'
                        : 'border-white/5 hover:bg-white/5 text-gray-400'
                    }`}
                  >
                    <p className="text-xs font-bold text-white">Perforated Luxury Nappa</p>
                    <p className="text-[10px] mt-1 text-cyan-400">+ €2,200</p>
                  </button>
                </div>
              </div>

              {/* Control D: Advanced Dynaudio Package */}
              <label className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/15 cursor-pointer hover:bg-white/10 transition-colors">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white">Dynaudio® 12-Speaker Sound System</p>
                  <p className="text-[10px] text-gray-400">Includes active decibel noise elimination & immersive subwoofers (+ €1,800)</p>
                </div>
                <input
                  type="checkbox"
                  checked={premiumAudio}
                  onChange={(e) => setPremiumAudio(e.target.checked)}
                  className="w-5 h-5 accent-cyan-400 rounded cursor-pointer border-white/20"
                />
              </label>

            </div>

            {/* Configured Price Pricing Dashboard Summary */}
            <div className="pt-6 border-t border-white/10 space-y-4 bg-slate-950 p-6 rounded-2xl border border-white/5">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-bold">Configured EV Cost</p>
                  <p className="text-3xl font-black text-white font-display">
                    €{totalPrice.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase text-gray-500 font-bold">Estimated Lease</p>
                  <p className="text-sm font-bold text-cyan-400">
                    From €{monthlyPayment}/mo*
                  </p>
                </div>
              </div>

              {/* Saved build notifications popups */}
              <AnimatePresence>
                {isBuildSaved && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs text-emerald-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>Saved! Build Code: <strong>{buildCode}</strong></span>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(buildCode);
                        alert('Build code copied to clipboard!');
                      }}
                      className="p-1 hover:bg-white/10 rounded"
                      title="Copy to clipboard"
                    >
                      <Clipboard className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Interactive configuration CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleSaveBuild}
                  className="px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase rounded-xl transition-all shadow-md flex items-center justify-center space-x-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Get Build Code</span>
                </button>
                <a
                  href={`mailto:advisor@byd-test.com?subject=My Custom BYD ${currentCar.name} Build&body=Vehicle Specs: Colors: ${currentColorObj.name}, Wheels: ${selectedWheel}, Interior: ${selectedInterior}. Ready for order details.`}
                  className="px-4 py-3 bg-white/10 hover:bg-white border border-white/15 hover:text-black text-white text-xs font-bold uppercase rounded-xl transition-all flex items-center justify-center space-x-1"
                >
                  <Milestone className="w-3.5 h-3.5" />
                  <span>Request Quote</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
