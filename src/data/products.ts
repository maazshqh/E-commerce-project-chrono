export interface Product {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  category: 'Classic' | 'Sport' | 'Premium';
  description: string;
  features: string[];
  specifications: {
    display: string;
    battery: string;
    waterResistance: string;
    connectivity: string;
    sensors: string;
    weight: string;
  };
  images: string[];
  colors: string[];
}

export const products: Product[] = [
  // Premium Category (5 products)
  {
    id: 'omegatrackx1',
    name: 'OmegaTrack X1',
    price: 12999,
    priceFormatted: '₹12,999',
    category: 'Premium',
    description: 'The pinnacle of smartwatch technology. OmegaTrack X1 combines aerospace-grade titanium with cutting-edge health monitoring for the discerning professional.',
    features: [
      'Advanced ECG monitoring',
      'Blood oxygen tracking',
      'Sleep analysis with REM detection',
      'Always-on AMOLED display',
      '14-day battery life',
      'Sapphire crystal glass'
    ],
    specifications: {
      display: '1.43" AMOLED, 466x466px',
      battery: '14 days typical use',
      waterResistance: '5ATM + IP68',
      connectivity: 'Bluetooth 5.2, WiFi, NFC',
      sensors: 'Heart rate, SpO2, ECG, Temperature',
      weight: '42g'
    },
    images: [
      '/src/assets/image1.png',
      '/src/assets/image2.jpg',
      '/src/assets/image3.jpg',
      '/src/assets/image4.jpg'
    ],
    colors: ['Midnight Black', 'Silver Titanium', 'Rose Gold']
  },
  {
    id: 'aerowatchultra',
    name: 'AeroWatch Ultra Max',
    price: 14999,
    priceFormatted: '₹14,999',
    category: 'Premium',
    description: 'Where luxury meets innovation. The Ultra Max features our most advanced display technology and premium materials for those who accept nothing less than extraordinary.',
    features: [
      '2000 nits peak brightness',
      'Ceramic back with sapphire crystal',
      'Dual-frequency GPS',
      'Action button for quick access',
      '36-hour battery with AOD',
      'Crash detection'
    ],
    specifications: {
      display: '1.9" LTPO OLED, 502x410px',
      battery: '36 hours with AOD',
      waterResistance: '10ATM + IP6X',
      connectivity: 'Bluetooth 5.3, WiFi 6, NFC, LTE',
      sensors: 'All + Depth gauge, Temperature',
      weight: '61.3g'
    },
    images: [
      '/src/assets/gallery1.jpg',
      '/src/assets/gallery2.jpg',
      '/src/assets/gallery3.jpg',
      '/src/assets/gallery4.jpg'
    ],
    colors: ['Natural Titanium', 'Black Titanium', 'Alpine White']
  },
  {
    id: 'elitepro',
    name: 'Elite Pro Titanium',
    price: 16999,
    priceFormatted: '₹16,999',
    category: 'Premium',
    description: 'Crafted for excellence. The Elite Pro Titanium represents the ultimate expression of luxury smartwatch technology with exclusive materials and features.',
    features: [
      'Grade 5 Titanium case',
      'Diamond-like carbon coating',
      'Wireless charging dock included',
      'Exclusive watch faces',
      '21-day battery life',
      'Private health concierge'
    ],
    specifications: {
      display: '1.52" Micro-LED, 520x520px',
      battery: '21 days typical use',
      waterResistance: '10ATM + IP68',
      connectivity: 'Bluetooth 5.3, WiFi 6E, NFC, eSIM',
      sensors: 'Full suite + Cortisol monitoring',
      weight: '45g'
    },
    images: [
      '/src/assets/gallery5.jpg',
      '/src/assets/gallery6.jpg',
      '/src/assets/gallery7.jpg',
      '/src/assets/image4.jpg'
    ],
    colors: ['Platinum', 'Obsidian', 'Rose Titanium']
  },
  {
    id: 'luxeedition',
    name: 'Luxe Edition',
    price: 19999,
    priceFormatted: '₹19,999',
    category: 'Premium',
    description: 'The Luxe Edition is our most prestigious timepiece, featuring hand-finished details and the most advanced technology in a stunning package.',
    features: [
      '18K gold accents',
      'Handcrafted leather band',
      'Concierge service included',
      'Limited edition numbering',
      'Lifetime warranty',
      'VIP support line'
    ],
    specifications: {
      display: '1.6" AMOLED, 480x480px',
      battery: '18 days typical use',
      waterResistance: '5ATM',
      connectivity: 'Bluetooth 5.3, WiFi, NFC',
      sensors: 'Premium health suite',
      weight: '52g'
    },
    images: [
      '/src/assets/image3.jpg',
      '/src/assets/image4.jpg',
      '/src/assets/gallery1.jpg',
      '/src/assets/gallery2.jpg'
    ],
    colors: ['Gold & Black', 'Silver & Brown', 'Rose Gold & Ivory']
  },
  {
    id: 'signaturepro',
    name: 'Signature Pro',
    price: 13999,
    priceFormatted: '₹13,999',
    category: 'Premium',
    description: 'Make your mark with Signature Pro. A perfect blend of executive style and smart functionality for the modern professional.',
    features: [
      'Business meeting mode',
      'Calendar integration',
      'Voice assistant pro',
      'Premium metal bands',
      'Presentation controller',
      'Stress management'
    ],
    specifications: {
      display: '1.45" AMOLED, 450x450px',
      battery: '12 days typical use',
      waterResistance: '5ATM + IP68',
      connectivity: 'Bluetooth 5.2, WiFi, NFC',
      sensors: 'Heart rate, SpO2, Stress',
      weight: '44g'
    },
    images: [
      '/src/assets/gallery3.jpg',
      '/src/assets/gallery4.jpg',
      '/src/assets/image1.png',
      '/src/assets/image2.jpg'
    ],
    colors: ['Executive Black', 'Boardroom Silver', 'Midnight Blue']
  },

  // Sport Category (5 products)
  {
    id: 'pulsefitneo',
    name: 'PulseFit Neo Pro',
    price: 9499,
    priceFormatted: '₹9,499',
    category: 'Sport',
    description: 'Engineered for athletes who demand precision. PulseFit Neo Pro tracks every heartbeat, every stride, every achievement.',
    features: [
      'GPS + GLONASS tracking',
      'Real-time heart rate zones',
      '100+ workout modes',
      'VO2 Max estimation',
      'Recovery advisor',
      'Swim-proof design'
    ],
    specifications: {
      display: '1.39" AMOLED, 454x454px',
      battery: '7 days typical use',
      waterResistance: '5ATM',
      connectivity: 'Bluetooth 5.0, GPS, GLONASS',
      sensors: 'Heart rate, Accelerometer, Gyroscope',
      weight: '38g'
    },
    images: [
      '/src/assets/image2.jpg',
      '/src/assets/gallery5.jpg',
      '/src/assets/gallery6.jpg',
      '/src/assets/gallery7.jpg'
    ],
    colors: ['Stealth Black', 'Ocean Blue', 'Neon Green']
  },
  {
    id: 'marathonx',
    name: 'Marathon X Runner',
    price: 10999,
    priceFormatted: '₹10,999',
    category: 'Sport',
    description: 'Built for distance runners. Marathon X delivers ultra-precise GPS tracking and advanced running dynamics for serious athletes.',
    features: [
      'Running power metrics',
      'Cadence analysis',
      'Ground contact time',
      'Route navigation',
      'Virtual pacer',
      'Race predictor'
    ],
    specifications: {
      display: '1.4" MIP, 280x280px',
      battery: '20 hours GPS mode',
      waterResistance: '5ATM',
      connectivity: 'Bluetooth 5.0, ANT+, GPS',
      sensors: 'Running dynamics pod compatible',
      weight: '34g'
    },
    images: [
      '/src/assets/image1.png',
      '/src/assets/image3.jpg',
      '/src/assets/gallery1.jpg',
      '/src/assets/gallery2.jpg'
    ],
    colors: ['Track Red', 'Marathon Black', 'Sprint Yellow']
  },
  {
    id: 'aquasport',
    name: 'Aqua Sport Dive',
    price: 11499,
    priceFormatted: '₹11,499',
    category: 'Sport',
    description: 'Dominate the water with Aqua Sport. Purpose-built for swimmers and divers with advanced aquatic metrics.',
    features: [
      'Swim stroke detection',
      'SWOLF efficiency score',
      'Pool length tracking',
      'Open water mode',
      'Dive log',
      'Water temperature'
    ],
    specifications: {
      display: '1.35" AMOLED, 416x416px',
      battery: '10 days typical use',
      waterResistance: '10ATM (100m)',
      connectivity: 'Bluetooth 5.1, GPS',
      sensors: 'Depth gauge, Water temp, Heart rate',
      weight: '40g'
    },
    images: [
      '/src/assets/gallery3.jpg',
      '/src/assets/gallery4.jpg',
      '/src/assets/image4.jpg',
      '/src/assets/image1.png'
    ],
    colors: ['Deep Sea Blue', 'Coral Orange', 'Aqua Teal']
  },
  {
    id: 'trailblazer',
    name: 'TrailBlazer Pro',
    price: 12499,
    priceFormatted: '₹12,499',
    category: 'Sport',
    description: 'Conquer any terrain with TrailBlazer. Rugged GPS smartwatch built for outdoor adventurers and trail runners.',
    features: [
      'Topographic maps',
      'Altimeter + Barometer',
      'Storm alerts',
      'Trail navigation',
      'Solar charging',
      'Emergency SOS'
    ],
    specifications: {
      display: '1.5" MIP, 360x360px',
      battery: '30 days solar mode',
      waterResistance: '10ATM + MIL-STD-810',
      connectivity: 'Bluetooth, GPS, GLONASS, Galileo',
      sensors: 'ABC sensors, Heart rate, SpO2',
      weight: '58g'
    },
    images: [
      '/src/assets/gallery7.jpg',
      '/src/assets/image2.jpg',
      '/src/assets/image3.jpg',
      '/src/assets/gallery5.jpg'
    ],
    colors: ['Forest Green', 'Mountain Grey', 'Sunset Orange']
  },
  {
    id: 'cyclepro',
    name: 'Cycle Pro Elite',
    price: 9999,
    priceFormatted: '₹9,999',
    category: 'Sport',
    description: 'The ultimate cycling companion. Cycle Pro Elite connects with all your sensors for comprehensive ride data.',
    features: [
      'Power meter compatible',
      'Cycling dynamics',
      'Climb analysis',
      'Heat acclimation',
      'Nutrition alerts',
      'Bike alarm'
    ],
    specifications: {
      display: '1.3" AMOLED, 416x416px',
      battery: '15 hours GPS ride mode',
      waterResistance: '5ATM',
      connectivity: 'Bluetooth, ANT+, GPS, Shimano Di2',
      sensors: 'Heart rate, Cadence, Power',
      weight: '36g'
    },
    images: [
      '/src/assets/image4.jpg',
      '/src/assets/gallery6.jpg',
      '/src/assets/gallery1.jpg',
      '/src/assets/gallery2.jpg'
    ],
    colors: ['Racing Red', 'Tour Yellow', 'Carbon Black']
  },

  // Classic Category (5 products)
  {
    id: 'fitsyncactive',
    name: 'FitSync Active Plus',
    price: 7999,
    priceFormatted: '₹7,999',
    category: 'Classic',
    description: 'Timeless design meets modern technology. The Active Plus is your everyday companion that seamlessly blends style with essential smart features.',
    features: [
      'Classic round design',
      'Interchangeable bands',
      'Smart notifications',
      '24/7 activity tracking',
      '10-day battery life',
      'Find my phone'
    ],
    specifications: {
      display: '1.32" LCD, 360x360px',
      battery: '10 days typical use',
      waterResistance: 'IP68',
      connectivity: 'Bluetooth 5.0',
      sensors: 'Heart rate, Accelerometer',
      weight: '32g'
    },
    images: [
      '/src/assets/image1.png',
      '/src/assets/image2.jpg',
      '/src/assets/gallery7.jpg',
      '/src/assets/gallery3.jpg'
    ],
    colors: ['Classic Black', 'Silver', 'Champagne Gold']
  },
  {
    id: 'elegance',
    name: 'Elegance Series',
    price: 8499,
    priceFormatted: '₹8,499',
    category: 'Classic',
    description: 'Understated elegance for every occasion. The Elegance Series combines traditional watchmaking aesthetics with smart capabilities.',
    features: [
      'Analog watch face',
      'Genuine leather band',
      'Date and time',
      'Step counting',
      'Sleep tracking',
      'Silent alarm'
    ],
    specifications: {
      display: '1.28" LCD, 320x320px',
      battery: '14 days typical use',
      waterResistance: '3ATM',
      connectivity: 'Bluetooth 5.0',
      sensors: 'Heart rate, Accelerometer',
      weight: '35g'
    },
    images: [
      '/src/assets/image3.jpg',
      '/src/assets/image4.jpg',
      '/src/assets/gallery4.jpg',
      '/src/assets/gallery5.jpg'
    ],
    colors: ['Brown Leather', 'Black Leather', 'Tan']
  },
  {
    id: 'minimalist',
    name: 'Minimalist Pro',
    price: 6999,
    priceFormatted: '₹6,999',
    category: 'Classic',
    description: 'Less is more. The Minimalist Pro strips away the unnecessary to focus on what matters most—beautiful simplicity.',
    features: [
      'Clean dial design',
      'Quick-release bands',
      'Essential notifications',
      'Heart rate monitoring',
      '7-day battery',
      'Slim profile'
    ],
    specifications: {
      display: '1.2" OLED, 300x300px',
      battery: '7 days typical use',
      waterResistance: 'IP68',
      connectivity: 'Bluetooth 5.0',
      sensors: 'Heart rate, Steps',
      weight: '28g'
    },
    images: [
      '/src/assets/gallery6.jpg',
      '/src/assets/image1.png',
      '/src/assets/image2.jpg',
      '/src/assets/gallery1.jpg'
    ],
    colors: ['Pure White', 'Slate Grey', 'Blush Pink']
  },
  {
    id: 'heritagemetal',
    name: 'Heritage Metal',
    price: 8999,
    priceFormatted: '₹8,999',
    category: 'Classic',
    description: 'A tribute to classic horology. Heritage Metal features a stunning stainless steel design with modern smart features.',
    features: [
      'Stainless steel case',
      'Metal mesh band',
      'Hybrid movement',
      'Physical watch hands',
      'Smart dial indicators',
      'Battery 1 year'
    ],
    specifications: {
      display: 'Hybrid analog + E-ink',
      battery: '12 months typical use',
      waterResistance: '5ATM',
      connectivity: 'Bluetooth 5.0',
      sensors: 'Steps, Heart rate',
      weight: '55g'
    },
    images: [
      '/src/assets/image3.jpg',
      '/src/assets/gallery2.jpg',
      '/src/assets/gallery3.jpg',
      '/src/assets/gallery4.jpg'
    ],
    colors: ['Polished Steel', 'Brushed Gunmetal', 'Two-Tone Gold']
  },
  {
    id: 'vintagechrono',
    name: 'Vintage Chrono',
    price: 7499,
    priceFormatted: '₹7,499',
    category: 'Classic',
    description: 'Inspired by vintage chronographs, this modern classic brings retro aesthetics to the smart era.',
    features: [
      'Retro dial design',
      'Chronograph subdials',
      'Tachymeter bezel',
      'Rally strap included',
      'Stopwatch function',
      'Alarm'
    ],
    specifications: {
      display: '1.3" LCD, 340x340px',
      battery: '8 days typical use',
      waterResistance: '3ATM',
      connectivity: 'Bluetooth 5.0',
      sensors: 'Steps, Heart rate',
      weight: '42g'
    },
    images: [
      '/src/assets/gallery5.jpg',
      '/src/assets/gallery7.jpg',
      '/src/assets/image4.jpg',
      '/src/assets/image1.png'
    ],
    colors: ['Racing Green', 'Panda White', 'Burgundy']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
