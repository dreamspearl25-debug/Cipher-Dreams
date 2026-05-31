export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  category: 'sedan' | 'suv' | 'hatchback';
  image: string;
  colors: { name: string; hex: string; previewUrl: string }[];
  specs: {
    range: string; // e.g. "570 km WLTP"
    acceleration: string; // e.g. "3.8s 0-100 km/h"
    power: string; // e.g. "390 kW (530 hp)"
    batteryCapacity: string; // e.g. "82.5 kWh"
    driveType: string; // e.g. "AWD" or "RWD"
  };
  startingPrice: string; // e.g. "â‚¬44,900"
  description: string;
}

export interface NewsStory {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export interface TechFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
}
