import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Info, Sparkles, Battery, Zap, ChevronRight, Gauge, Check, ShoppingBag, Landmark } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleShowcaseProps {
  onConfigureVehicle: (vehicleId: string) => void;
  selectedVehicleId: string | null;
}

export const vehiclesData: Vehicle[] = [
  {
    id: 'seal',
    name: 'BYD SEAL',
    tagline: 'High-Performance Electric Sports Sedan',
    category: 'sedan',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=60',
    colors: [
      { name: 'Arctic Blue', hex: '#63B3ED', previewUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=60' },
      { name: 'Atlantis Grey', hex: '#4A5568', previewUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60' },
      { name: 'Cosmos Black', hex: '#1A202C', previewUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60' },
      { name: 'Aurora White', hex: '#EDF2F7', previewUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60' }
    ],
    specs: {
      range: '570 km WLTP',
      acceleration: '3.8s 0-100 km/h',
      power: '390 kW (530 hp)',
      batteryCapacity: '82.5 kWh',
      driveType: 'AWD (All-Wheel Drive)'
    },
    startingPrice: '€44,900',
    description: 'A revolutionary sports sedan boasting CTB (Cell-to-Body) and iTAC (Intelligent Torque Adaption Control). Striking styling meets high rigidity and exceptional passenger safety.'
  },
  {
    id: 'atto3',
    name: 'BYD ATTO 3',
    tagline: 'Dynamic & Visionary Compact EV SUV',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60',
    colors: [
      { name: 'Surf Blue', hex: '#2B6CB0', previewUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60' },
      { name: 'Ski White', hex: '#F7FAFC', previewUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60' },
      { name: 'Forest Green', hex: '#2F855A', previewUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60' },
      { name: 'Boulder Grey', hex: '#718096', previewUrl: 'https://images.unsplash.com/photo-1606577924006-27d39b132ee6?w=800&auto=format&fit=crop&q=60' }
    ],
    specs: {
      range: '420 km WLTP',
      acceleration: '7.3s 0-100 km/h',
      power: '150 kW (204 hp)',
      batteryCapacity: '60.4 kWh',
      driveType: 'FWD (Front-Wheel Drive)'
    },
    startingPrice: '€37,990',
    description: 'Designed as an expressively playful SUV. Features the Dragon Face 3.0 aesthetic language coupled with an integrated fitness-themed cabin.'
  },
  {
    id: 'dolphin',
    name: 'BYD DOLPHIN',
    tagline: 'Agile & Efficient Urban Hatchback',
    category: 'hatchback',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60',
    colors: [
      { name: 'Urban Grey', hex: '#4A5568', previewUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60' },
      { name: 'Coral Pink', hex: '#F687B3', previewUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop&q=60' },
      { name: 'Atlantis Blue', hex: '#2B6CB0', previewUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60' },
      { name: 'Cream White', hex: '#FEFCBF', previewUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=60' }
    ],
    specs: {
      range: '427 km WLTP',
      acceleration: '7.0s 0-100 km/h',
      power: '150 kW (204 hp)',
      batteryCapacity: '60.4 kWh',
      driveType: 'FWD'
    },
    startingPrice: '€29,990',
    description: 'An approachable yet stylish urban hatch utilizing e-Platform 3.0. Easy dynamic driving, highly practical interior spacing, and intelligent safety.'
  },
  {
    id: 'han',
    name: 'BYD HAN EV',
    tagline: 'Executive Luxury High-Tech Sedan',
    category: 'sedan',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60',
    colors: [
      { name: 'Emperor Red', hex: '#9B2C2C', previewUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60' },
      { name: 'Time Grey', hex: '#4A5568', previewUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60' },
      { name: 'Snow White', hex: '#EDF2F7', previewUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60' }
    ],
    specs: {
      range: '521 km WLTP',
      acceleration: '3.9s 0-100 km/h',
      power: '380 kW (517 hp)',
      batteryCapacity: '85.4 kWh',
      driveType: 'AWD'
    },
    startingPrice: '€69,900',
    description: 'BYD’s flagship sedan embodying class, elegance, and extreme performance. Outfitted with premium Nappa leather, custom wood, and DiPilot driver assistance.'
  },
  {
    id: 'tang',
    name: 'BYD TANG EV',
    tagline: 'Flagship 7-Seater Luxury SUV',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60',
    colors: [
      { name: 'Mountain Grey', hex: '#2D3748', previewUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60' },
      { name: 'Polar White', hex: '#F7FAFC', previewUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60' }
    ],
    specs: {
      range: '530 km WLTP',
      acceleration: '4.6s 0-100 km/h',
      power: '380 kW (517 hp)',
      batteryCapacity: '108.8 kWh',
      driveType: 'AWD'
    },
    startingPrice: '€71,900',
    description: 'Spacious high-end family SUV with smart seven-seat design. Integrates premium performance power with cutting-edge infotainment and intelligent comfort.'
  }
];

export default function VehicleShowcase({ onConfigureVehicle, selectedVehicleId }: VehicleShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'sedan' | 'suv' | 'hatchback'>('all');
  const [selectedVehicleDetails, setSelectedVehicleDetails] = useState<Vehicle | null>(null);
  
  // Track mapped preview image by index for colors
  const [carPreviews, setCarPreviews] = useState<Record<string, string>>({});

  const filteredVehicles = vehiclesData.filter(v => 
    activeTab === 'all' ? true : v.category === activeTab
  );

  const handleColorSelect = (vId: string, imgUrl: string) => {
    setCarPreviews(prev => ({
      ...prev,
      [vId]: imgUrl
    }));
  };

  return (
    <section id="vehicles" className="py-24 bg-slate-900 text-white relative">
      {/* Background graphic elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Electric Era</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white">
            BYD Vehicle Ecosystem
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Experience outstanding range, advanced security, and pure aerodynamic styling across our intelligent EV lineup.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12" id="vehicle-tabs">
          {(['all', 'sedan', 'suv', 'hatchback'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                activeTab === tab
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25 border-transparent'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab === 'all' ? 'All Vehicles' : `${tab}s`}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((car) => {
              const currentImg = carPreviews[car.id] || car.image;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={car.id}
                  className="bg-slate-950 border border-white/5 rounded-2xl overflow-hidden group hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
                  id={`car-card-${car.id}`}
                >
                  {/* Photo Section with Dynamic Paint Colors */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-900 group/img">
                    <img
                      src={currentImg}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mapping overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/25 opacity-80" />

                    {/* Quick Badge starting price */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/75 backdrop-blur-md border border-white/15">
                      <p className="text-[10px] text-gray-400 uppercase font-medium">Starts From</p>
                      <p className="text-xs font-bold text-white font-display">{car.startingPrice}</p>
                    </div>

                    {/* Interactive Paint switcher dots */}
                    <div className="absolute bottom-4 right-4 flex items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full space-x-2 border border-white/10">
                      {car.colors.map((col, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleColorSelect(car.id, col.previewUrl)}
                          className={`w-4.5 h-4.5 rounded-full border-2 transition-transform hover:scale-125 focus:outline-none ${
                            currentImg === col.previewUrl ? 'border-cyan-400 scale-110' : 'border-transparent'
                          }`}
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">{car.category}</span>
                        <div className="flex items-center space-x-1 text-emerald-400 text-xs font-semibold">
                          <Zap className="w-3 h-3" />
                          <span>100% Electric</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {car.tagline}
                      </p>
                    </div>

                    {/* Spec Summary Row */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-white/5 my-2">
                      <div className="flex items-center space-x-2">
                        <Battery className="w-4 h-4 text-cyan-400" />
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase">Range (WLTP)</p>
                          <p className="text-xs font-bold text-gray-200">{car.specs.range.split(' ')[0]} km</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Gauge className="w-4 h-4 text-emerald-400" />
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase">0-100 km/h</p>
                          <p className="text-xs font-bold text-gray-200">{car.specs.acceleration.split(' ')[0]}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => setSelectedVehicleDetails(car)}
                        className="px-4 py-2 border border-white/10 text-xs font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-all flex items-center justify-center space-x-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Quick Specs</span>
                      </button>
                      <button
                        onClick={() => onConfigureVehicle(car.id)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
                          selectedVehicleId === car.id
                            ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                            : 'bg-white text-black hover:bg-cyan-400 hover:text-black shadow'
                        }`}
                      >
                        {selectedVehicleId === car.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Selected</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Build Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Immersive Vehicle Details Modal Popup */}
      <AnimatePresence>
        {selectedVehicleDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-950 border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full text-white shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVehicleDetails(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-black/80 rounded-full text-gray-400 hover:text-white transition-all border border-white/10"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Side: Photo */}
                <div className="md:col-span-6 relative h-64 md:h-auto min-h-[300px] bg-slate-900">
                  <img
                    src={selectedVehicleDetails.image}
                    alt={selectedVehicleDetails.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded">
                      {selectedVehicleDetails.category}
                    </span>
                    <h3 className="text-3xl font-extrabold font-display leading-tight">{selectedVehicleDetails.name}</h3>
                    <p className="text-xs text-gray-300 font-light max-w-xs">{selectedVehicleDetails.tagline}</p>
                  </div>
                </div>

                {/* Right Side: Deep Specs */}
                <div className="md:col-span-6 p-6 md:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Vehicle overview</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{selectedVehicleDetails.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Technical Specifications</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">Range (WLTP)</span>
                        <p className="text-base font-bold text-white font-display">{selectedVehicleDetails.specs.range}</p>
                      </div>
                      <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">0-100 km/h</span>
                        <p className="text-base font-bold text-white font-display">{selectedVehicleDetails.specs.acceleration}</p>
                      </div>
                      <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">Maximum Power</span>
                        <p className="text-base font-bold text-white font-display">{selectedVehicleDetails.specs.power}</p>
                      </div>
                      <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">Battery Capacity</span>
                        <p className="text-base font-bold text-white font-display">{selectedVehicleDetails.specs.batteryCapacity}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-semibold">Drivetrain configuration</span>
                      <span className="font-extrabold text-cyan-300">{selectedVehicleDetails.specs.driveType}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <span className="text-[10px] uppercase text-gray-500">Starting Price Range</span>
                      <p className="text-xl font-black text-white font-display">{selectedVehicleDetails.startingPrice}</p>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedVehicleDetails(null)}
                        className="px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 hover:bg-white/5 transition-all"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          onConfigureVehicle(selectedVehicleDetails.id);
                          setSelectedVehicleDetails(null);
                        }}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-black hover:bg-cyan-400 hover:text-black transition-all shadow-md"
                      >
                        Model Builder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
