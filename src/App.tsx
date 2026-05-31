import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleShowcase from './components/VehicleShowcase';
import TechnologySection from './components/TechnologySection';
import ConfigureSection from './components/ConfigureSection';
import GreenFuture from './components/GreenFuture';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function App() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);

  const handleVehicleClick = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    // Smooth scroll to configurator section to preview selected vehicle dynamic details
    handleNavigateToSection('configurator');
  };

  const handleNavigateToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const navbarOffset = 80; // height of sticking navbar
      const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black" id="app-root-frame">
      {/* Immersive Top Header */}
      <Navbar onVehicleClick={handleVehicleClick} onNavigateToSection={handleNavigateToSection} />

      {/* Hero Visual Banner Frame */}
      <Hero
        onConfigureClick={() => handleNavigateToSection('configurator')}
        onExploreClick={() => handleNavigateToSection('vehicles')}
      />

      {/* Main Vehicles Catalog Showcase */}
      <VehicleShowcase
        onConfigureVehicle={handleVehicleClick}
        selectedVehicleId={selectedVehicleId}
      />

      {/* Immersive Core Technologies Block */}
      <TechnologySection />

      {/* Full Customizable Virtual Builder Workshop */}
      <ConfigureSection
        selectedVehicleId={selectedVehicleId}
        onSelectVehicle={(id) => setSelectedVehicleId(id)}
      />

      {/* Ecological Missions & Green Future Commitments */}
      <GreenFuture />

      {/* Newspaper corporate & PR feed */}
      <NewsSection />

      {/* Sophisticated site Footer */}
      <Footer onVehicleClick={handleVehicleClick} onNavigateToSection={handleNavigateToSection} />

      {/* GDPR privacy widget */}
      <CookieBanner />
    </div>
  );
}
