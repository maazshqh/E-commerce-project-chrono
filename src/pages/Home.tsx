import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Heart, ShoppingCart, Shield, Truck, Headphones, CheckCircle2, ChevronRight, Zap, Bike, Dumbbell, Activity, Droplet, Bell, Moon, Battery, HeartPulse, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, getFeaturedProducts } from '@/data/products';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import PageTransition from '@/components/PageTransition';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

import heroImage from '@/assets/hero.png';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import gallery1 from '@/assets/gallery1.jpg';
import gallery2 from '@/assets/gallery2.jpg';
import gallery3 from '@/assets/gallery3.jpg';
import gallery4 from '@/assets/gallery4.jpg';
import gallery5 from '@/assets/gallery5.jpg';
import gallery6 from '@/assets/gallery6.jpg';
import gallery7 from '@/assets/gallery7.jpg';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const flagshipRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);
  const collectionRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isFlagshipInView = useInView(flagshipRef, { once: true, margin: "-100px" });
  const isLifestyleInView = useInView(lifestyleRef, { once: true, margin: "-100px" });
  const isCollectionInView = useInView(collectionRef, { once: true, margin: "-100px" });
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isNewsletterInView = useInView(newsletterRef, { once: true, margin: "-100px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.95]);
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.08]);

  const featuredProducts = getFeaturedProducts().slice(0, 4);
  
  const testimonials = [
    { name: 'Sarah Chen', role: 'Product Designer', rating: 5, text: 'The precision and attention to detail is unmatched. It\'s like wearing art on your wrist.' },
    { name: 'James Wilson', role: 'Entrepreneur', rating: 5, text: 'Exceptional quality and design. This watch complements my lifestyle perfectly.' },
    { name: 'Emma Rodriguez', role: 'Athlete', rating: 5, text: 'The health monitoring features are incredibly accurate and intuitive to use.' }
  ];

  const galleryImages = [
    { id: 1, src: gallery1, title: 'Precision Engineering', desc: 'Every detail matters' },
    { id: 2, src: gallery2, title: 'Luxury Materials', desc: 'Premium craftsmanship' },
    { id: 3, src: gallery3, title: 'Smart Technology', desc: 'Intelligence on your wrist' },
    { id: 4, src: gallery4, title: 'Timeless Design', desc: 'Modern elegance' },
    { id: 5, src: gallery5, title: 'Premium Finish', desc: 'Crafted to perfection' },
    { id: 6, src: gallery6, title: 'Advanced Features', desc: 'Innovation at its finest' },
    { id: 7, src: gallery7, title: 'Ultimate Style', desc: 'Where form meets function' },
  ];

  const techSpecs = [
    { label: 'Display', value: 'AMOLED Retina', icon: '📱' },
    { label: 'Battery', value: '14 Days', icon: '🔋' },
    { label: 'Sensors', value: 'Heart Rate, SpO2, GPS', icon: '💓' },
    { label: 'Water', value: '50M Resistant', icon: '💧' },
    { label: 'Connectivity', value: 'Bluetooth 5.3', icon: '📡' },
    { label: 'Storage', value: '32GB Internal', icon: '💾' },
  ];

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '120+', label: 'Countries Shipped' },
  ];

  return (
    <Layout>
      <PageTransition>
        {/* 1. HERO SECTION - WATCH PRO STYLE */}
        <section 
          ref={heroRef}
          className="relative min-h-screen overflow-hidden bg-background flex items-center pt-20 pb-10"
        >
          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-32 left-[15%] w-12 h-12 border-2 border-foreground/20 rounded-lg rotate-12 hidden xl:block"
          />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-40 right-[12%] w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full hidden xl:block"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-32 left-[20%] w-8 h-8 bg-foreground/5 rounded-full hidden xl:block"
          />

          <div className="relative z-10 w-full">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                
                {/* Left side - Barcode & Product Info with floating specs */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block space-y-8"
                >
                  {/* Barcode placeholder */}
                  <div className="bg-foreground/10 p-3 rounded-lg">
                    <div className="w-16 h-16 flex flex-col gap-0.5">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex gap-0.5">
                          {[...Array(8)].map((_, j) => (
                            <div key={j} className="w-1.5 h-1.5 bg-foreground/60" />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Small product details */}
                  <div className="space-y-1.5 text-xs">
                    <p className="text-muted-foreground uppercase tracking-wider">SMART WATCH</p>
                    <p className="text-foreground font-semibold">PRECISION TIME</p>
                    <p className="text-foreground font-semibold">MEETS TECHNOLOGY</p>
                    <p className="text-foreground font-semibold">BY CHRONO</p>
                  </div>
                  
                  {/* Floating Spec Cards */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2.5">
                      <Shield className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Warranty</p>
                        <p className="text-sm font-semibold text-foreground">5 Years</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2.5">
                      <Zap className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Battery</p>
                        <p className="text-sm font-semibold text-foreground">50 Hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2.5">
                      <Star className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Rating</p>
                        <p className="text-sm font-semibold text-foreground">4.9/5.0</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* CTA Button */}
                  <Link to="/products" className="inline-block">
                    <Button className="h-10 px-7 rounded-full bg-foreground text-background hover:bg-foreground/90 text-xs font-semibold flex items-center gap-2 shadow-lg">
                      See Full Catalogue
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Center - Main Content */}
                <div className="flex flex-col items-center justify-center py-10">
                  
                  {/* Large WATCH Text with Orange Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: -90, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 80 }}
                    className="relative flex items-center gap-4 mb-4"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  >
                    <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-foreground leading-none">
                      CHRONO
                    </h1>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer"
                    >
                      <img
                        src={heroImage}
                        alt="Watch Icon"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain opacity-90"
                      />
                    </motion.div>
                  </motion.div>

                  {/* PROF-3 Text overlaying product */}
                  <div className="relative w-full max-w-4xl">
                    <motion.h2
                      initial={{ opacity: 0, x: -100, rotateY: -45 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(249, 115, 22, 0.5)" }}
                      className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-none text-center absolute top-0 left-0 right-0 z-20 cursor-default"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      PROF-3
                    </motion.h2>

                    {/* Floating Info Cards around product */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: [0, 15, 0] }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: 0.8 },
                        scale: { duration: 0.5, delay: 0.8, type: "spring" },
                        x: { duration: 0.5, delay: 0.8 },
                        y: { duration: 3.5, repeat: Infinity, delay: 0.8 }
                      }}
                      whileHover={{ scale: 1.1, y: 0 }}
                      className="absolute top-24 -left-4 sm:left-0 z-30 bg-background/90 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-xl hidden md:block cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Waterproof</p>
                          <p className="text-[10px] text-muted-foreground">5ATM + IP68</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: [0, -12, 0] }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: 1 },
                        scale: { duration: 0.5, delay: 1, type: "spring" },
                        x: { duration: 0.5, delay: 1 },
                        y: { duration: 4, repeat: Infinity, delay: 1.5 }
                      }}
                      whileHover={{ scale: 1.1, y: 0 }}
                      className="absolute top-32 -right-4 sm:right-0 z-30 bg-background/90 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-xl hidden md:block cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">Health Track</p>
                          <p className="text-[10px] text-muted-foreground">ECG + SpO2</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Product Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.9, delay: 0.2 }}
                      className="relative mt-8 pt-12"
                    >
                      <motion.img
                        src={heroImage}
                        alt="Premium Smartwatch"
                        className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Right side - Plus Button & Thumbnail with specs */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-6"
                >
                  {/* Plus button */}
                  <motion.button 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full border-2 border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all shadow-lg"
                  >
                    <span className="text-2xl font-light">+</span>
                  </motion.button>
                  
                  {/* Thumbnail with label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center shadow-xl cursor-pointer"
                    >
                      <img
                        src={heroImage}
                        alt="Watch Pro Series"
                        className="w-20 h-20 object-contain"
                      />
                    </motion.div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium">WATCH PRO SERIES</p>
                  </motion.div>

                  {/* Floating Feature Pills */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: [0, -10, 0] }}
                    transition={{ 
                      opacity: { duration: 0.5, delay: 1.1 },
                      x: { duration: 3.5, repeat: Infinity, delay: 1.1 }
                    }}
                    className="space-y-3 mt-4"
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                      whileHover={{ scale: 1.05, x: -5 }}
                      className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-xs font-medium text-foreground">GPS Active</p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.3 }}
                      whileHover={{ scale: 1.05, x: -5 }}
                      className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer"
                    >
                      <Truck className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
                      <p className="text-xs font-medium text-foreground">Free Ship</p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                      whileHover={{ scale: 1.05, x: -5 }}
                      className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer"
                    >
                      <Shield className="w-3.5 h-3.5 text-foreground" strokeWidth={1.5} />
                      <p className="text-xs font-medium text-foreground">Certified</p>
                    </motion.div>
                  </motion.div>

                  {/* Price Tag */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, y: 30 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1], y: 0 }}
                    transition={{ 
                      opacity: { duration: 0.5, delay: 1.5 },
                      scale: { duration: 2.5, repeat: Infinity, delay: 1.5 },
                      y: { duration: 0.5, delay: 1.5, type: "spring" }
                    }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="mt-6 bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-2xl px-6 py-3 shadow-2xl cursor-pointer"
                  >
                    <p className="text-xs uppercase tracking-wider opacity-80">Starting at</p>
                    <p className="text-2xl font-black">₹12,999</p>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Bottom scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</p>
              <motion.div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2">
                <motion.div
                  animate={{ y: [2, 8, 2] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="w-1 h-2 bg-foreground rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* LUXURY MEETS PRECISION SECTION */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading with CTA */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight">
                  PRECISION ENGINEERED<br />SMARTWATCH
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex flex-col text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Chrono's Elite</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Collection</p>
                </div>
                <Link to="/products">
                  <button className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all group">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* 3-Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card 1: Product Showcase (Orange) */}
              <Link to="/product/1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl overflow-hidden h-[400px] group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/10" />
                  
                  {/* Edit Icon */}
                  <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all z-10">
                    <ArrowRight className="w-5 h-5 text-foreground rotate-45" strokeWidth={1.5} />
                  </button>

                {/* Product Image */}
                <img
                  src={image1}
                  alt="Watch Elite"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Bottom Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs uppercase tracking-wider opacity-90 mb-1">Elite Series</p>
                  <p className="text-sm font-medium">Chrono Pro Max</p>
                  <p className="text-xs opacity-75">Ultimate Performance</p>
                </div>
                </motion.div>
              </Link>

              {/* Card 2: Brand Feature (Light) */}
              <Link to="/about">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative bg-muted/30 border border-border rounded-3xl overflow-hidden h-[400px] flex flex-col justify-between p-8 cursor-pointer hover:border-foreground/20 transition-colors"
                >
                {/* Brand Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Shield className="w-6 h-6 text-background" strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-bold tracking-tight">CHRONO</span>
                </div>

                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  {/* Features List */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">✓ Advanced AI</p>
                    <p className="text-sm font-semibold text-foreground">✓ Premium Build</p>
                    <p className="text-sm font-semibold text-foreground">✓ Smart Features</p>
                  </div>
                </div>

                {/* Bottom Label */}
                <div>
                  <p className="text-2xl font-bold tracking-tight">INNOVATION</p>
                </div>
                </motion.div>
              </Link>

              {/* Card 3: Call to Action (Light) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative bg-muted/30 border border-border rounded-3xl overflow-hidden h-[400px] flex flex-col justify-between p-8"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
                    EXPERIENCE<br />
                    SMART TIME<br />
                    <span className="text-orange-500">WITH CHRONO</span><br />
                    TECHNOLOGY
                  </h3>
                </div>

                {/* CTA Button */}
                <Link to="/products">
                  <button className="group bg-foreground text-background rounded-full px-8 py-4 flex items-center justify-between hover:scale-105 transition-transform w-full">
                    <span className="text-sm font-bold uppercase tracking-wider">Explore Chrono</span>
                    <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. FEATURE HIGHLIGHT BAR */}
        <section ref={featuresRef} className="py-12 border-y border-border/50 bg-background/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Shield, label: 'Lifetime Warranty' },
                { icon: Star, label: '5-Star Reviews' },
                { icon: Truck, label: 'Free Delivery' },
                { icon: Headphones, label: 'Expert Support' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <item.icon className="w-5 h-5 text-foreground flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-muted-foreground hidden sm:inline">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PRODUCTS SHOWCASE SECTION - NEW LAYOUT */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Premium Collection</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mt-4 mb-6">
                Chrono Elite<br />Smartwatches
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked premium smartwatches representing cutting-edge technology and exceptional design.
              </p>
            </motion.div>

            {/* 2-Column Layout with Featured + Products */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Product - Large Card (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1 group"
              >
                <div className="relative bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-3xl overflow-hidden h-full min-h-[500px] border border-border/50 flex flex-col justify-between hover:border-border transition-all group">
                  {/* Top Label */}
                  <div className="relative z-10 p-8">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Featured</span>
                    <h3 className="text-3xl font-black tracking-tight mt-4 mb-2">Chrono<br />Ultra</h3>
                    <p className="text-sm text-muted-foreground">Premium flagship model</p>
                  </div>

                  {/* Center Image - Full Coverage */}
                  <img
                    src={image2}
                    alt="Chrono Ultra"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Bottom Details */}
                  <div className="relative z-10 space-y-4 border-t border-border/30 pt-4 p-8 bg-gradient-to-t from-black/60 to-transparent mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <span className="text-2xl font-bold text-orange-500">₹24,999</span>
                    </div>
                    <Link to="/products">
                      <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Products Grid (Right - 2 columns) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative bg-secondary/30 rounded-2xl overflow-hidden p-6 h-full backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 flex flex-col">
                      {/* Wishlist Button */}
                      <motion.button
                        onClick={() => toggleWishlist(product)}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-foreground hover:text-background transition-all z-10"
                      >
                        <Heart
                          className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`}
                          strokeWidth={1.5}
                        />
                      </motion.button>

                      {/* Product Image */}
                      <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-background/50 relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-orange-500 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Rating & Price */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/30">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-orange-500 text-orange-500" strokeWidth={1.5} />
                          <span className="text-xs font-medium text-foreground">5.0</span>
                        </div>
                        <span className="text-lg font-semibold text-foreground">{product.priceFormatted}</span>
                      </div>

                      {/* Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        onClick={() => addToCart(product, product.colors[0])}
                        className="mt-4 w-full py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all font-medium text-sm flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="text-center mt-16"
            >
              <Link to="/products">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="h-14 px-12 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-lg font-medium"
                  >
                  View All Products <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 4. ANIMATED GALLERY SECTION */}
        <section ref={galleryRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Gallery</span>
              <h2 className="text-5xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
                Design<br />Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the art of precision engineering and timeless aesthetics.
              </p>
            </motion.div>

            {/* Unique Diagonal Asymmetric Layout */}
            <div className="relative">
              {/* Top Row - Diagonal Split */}
              <div className="flex flex-col lg:flex-row gap-6 mb-6">
                {/* Left: Large Diagonal Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="lg:w-[60%] relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden group"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={galleryImages[0].src}
                    alt={galleryImages[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-3">{galleryImages[0].title}</h3>
                    <p className="text-white/90 text-lg">{galleryImages[0].desc}</p>
                  </div>
                </motion.div>

                {/* Right: Stacked Small Images */}
                <div className="lg:w-[40%] flex flex-col gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative h-[250px] lg:h-[315px] rounded-2xl overflow-hidden group"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={galleryImages[1].src}
                      alt={galleryImages[1].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative h-[250px] lg:h-[315px] rounded-2xl overflow-hidden group"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={galleryImages[2].src}
                      alt={galleryImages[2].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </motion.div>
                </div>
              </div>

              {/* Middle Row - Three Column Aligned */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative h-[320px] rounded-2xl overflow-hidden group"
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={galleryImages[3].src}
                    alt={galleryImages[3].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl">Precision</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[320px] rounded-2xl overflow-hidden group"
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={galleryImages[4].src}
                    alt={galleryImages[4].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl">Elegance</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-[320px] rounded-2xl overflow-hidden group"
                >
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={galleryImages[5].src}
                    alt={galleryImages[5].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-xl">Innovation</p>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row - Wide Panoramic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative h-[280px] lg:h-[380px] rounded-3xl overflow-hidden group"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8 }}
                  src={galleryImages[6].src}
                  alt={galleryImages[6].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl lg:text-6xl font-black text-white mb-2">Timeless Collection</h3>
                    <p className="text-white/80 text-lg">Discover Your Perfect Match</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. LIFESTYLE SECTION */}
        <section ref={lifestyleRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Background decorative elements */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl hidden lg:block"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Your Daily Essential</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                Built for Your<br />Active Lifestyle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                From boardroom to mountain peak, morning jogs to elegant evenings—your Chrono adapts seamlessly to every moment.
              </p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              {/* Left: Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {[
                  { icon: Shield, label: 'All-Day Comfort', desc: 'Feather-light design, premium materials' },
                  { icon: Zap, label: 'Extended Battery', desc: '14-day battery life on a single charge' },
                  { icon: Truck, label: 'Weather Proof', desc: 'Water-resistant up to 100m' },
                ].map((feature, idx) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/50 to-background border border-border/50 h-[500px]">
                  <img
                    src={image3}
                    alt="Lifestyle"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. TECH SPECS SECTION */}
        <section ref={techRef} className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.03, 0.05] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-pink-500 rounded-full blur-3xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Advanced Options</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                Elevate Your Workouts
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                Experience the perfect blend of style and functionality. Track your fitness goals, monitor your health, and stay connected—all from your wrist. Built for champions, designed for everyone.
              </p>
            </motion.div>

            <div className="relative min-h-[600px]">
              {/* Center: Single Product Image */}
              <div className="flex justify-center items-center mb-12 lg:mb-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="w-full max-w-sm lg:max-w-lg">
                    <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-secondary/30 to-background border border-border/50">
                      <img 
                        src={image4} 
                        alt="Chrono Watch" 
                        className="w-full h-auto object-contain" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Left Side Features - Enhanced */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block space-y-6 w-72">
                {[
                  { icon: Bike, label: 'Distance Tracking', desc: 'Track every mile with precision', color: 'from-blue-500/10 to-cyan-500/10' },
                  { icon: Dumbbell, label: 'Multi-Sport Modes', desc: 'Over 100+ workout modes', color: 'from-purple-500/10 to-pink-500/10' },
                  { icon: Activity, label: 'Stress Monitoring', desc: 'Real-time stress analysis', color: 'from-green-500/10 to-emerald-500/10' },
                  { icon: Droplet, label: 'Water Resistance', desc: 'Swim-proof up to 50M', color: 'from-cyan-500/10 to-blue-500/10' },
                  { icon: Zap, label: 'Fast Charging', desc: 'Full charge in 45 minutes', color: 'from-yellow-500/10 to-orange-500/10' },
                ].map((feature, idx) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 hover:bg-secondary/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-orange-500 transition-colors">{feature.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Side Features - Enhanced */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block space-y-6 w-72">
                {[
                  { icon: Heart, label: 'Calorie Burn Tracking', desc: 'Accurate calorie counter', color: 'from-pink-500/10 to-rose-500/10' },
                  { icon: HeartPulse, label: 'Blood Pressure Track', desc: 'Monitor heart health 24/7', color: 'from-red-500/10 to-pink-500/10' },
                  { icon: Wind, label: 'Guided Breath Sessions', desc: 'Meditation & relaxation', color: 'from-indigo-500/10 to-purple-500/10' },
                  { icon: Bell, label: 'Smart Notifications', desc: 'Never miss important alerts', color: 'from-amber-500/10 to-yellow-500/10' },
                  { icon: Moon, label: 'Sleep Tracking', desc: 'Detailed sleep analysis', color: 'from-violet-500/10 to-purple-500/10' },
                ].map((feature, idx) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 hover:bg-secondary/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-orange-500 transition-colors">{feature.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile: All Features in Enhanced Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:hidden mt-16">
                {[
                  { icon: Bike, label: 'Distance Tracking', desc: 'Track every mile with precision', color: 'from-blue-500/10 to-cyan-500/10' },
                  { icon: Heart, label: 'Calorie Burn Tracking', desc: 'Accurate calorie counter', color: 'from-pink-500/10 to-rose-500/10' },
                  { icon: Dumbbell, label: 'Multi-Sport Modes', desc: 'Over 100+ workout modes', color: 'from-purple-500/10 to-pink-500/10' },
                  { icon: HeartPulse, label: 'Blood Pressure Track', desc: 'Monitor heart health 24/7', color: 'from-red-500/10 to-pink-500/10' },
                  { icon: Activity, label: 'Stress Monitoring', desc: 'Real-time stress analysis', color: 'from-green-500/10 to-emerald-500/10' },
                  { icon: Wind, label: 'Guided Breath Sessions', desc: 'Meditation & relaxation', color: 'from-indigo-500/10 to-purple-500/10' },
                  { icon: Droplet, label: 'Water Resistance', desc: 'Swim-proof up to 50M', color: 'from-cyan-500/10 to-blue-500/10' },
                  { icon: Bell, label: 'Smart Notifications', desc: 'Never miss important alerts', color: 'from-amber-500/10 to-yellow-500/10' },
                  { icon: Zap, label: 'Fast Charging', desc: 'Full charge in 45 minutes', color: 'from-yellow-500/10 to-orange-500/10' },
                  { icon: Moon, label: 'Sleep Tracking', desc: 'Detailed sleep analysis', color: 'from-violet-500/10 to-purple-500/10' },
                ].map((feature, idx) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group flex items-start gap-3 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:border-orange-500/30 hover:bg-secondary/30 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-orange-500 transition-colors">{feature.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. BENEFITS SECTION */}
        <section ref={benefitsRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] border-2 border-orange-500/10 rounded-full hidden lg:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border-2 border-orange-500/10 rounded-full hidden lg:block"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 lg:mb-20"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Why Chrono</span>
              <h2 className="text-5xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
                Engineering<br />Excellence
              </h2>
            </motion.div>

            {/* Diagonal Split Layout */}
            <div className="relative">
              {/* Diagonal Divider */}
              <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" 
                   style={{ transform: 'translateX(-50%) rotate(-15deg)', transformOrigin: 'center' }} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Column - Large Feature Cards */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-orange-500/10 via-secondary/20 to-background border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all" />
                    <Shield className="w-12 h-12 text-orange-500 mb-6 relative z-10" strokeWidth={1.5} />
                    <h3 className="text-3xl font-bold text-foreground mb-4 relative z-10">Premium Materials</h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      Aerospace-grade titanium construction with scratch-resistant sapphire crystal. Built to last a lifetime.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-secondary/30 to-background border border-border/50 hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-all" />
                    <Zap className="w-12 h-12 text-orange-500 mb-6 relative z-10" strokeWidth={1.5} />
                    <h3 className="text-3xl font-bold text-foreground mb-4 relative z-10">Smart Technology</h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      AI-powered health monitoring with real-time insights. Track heart rate, sleep, stress, and more.
                    </p>
                  </motion.div>
                </div>

                {/* Right Column - Compact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:pt-12">
                  {[
                    { icon: Truck, title: 'Global Delivery', desc: 'Free worldwide shipping', color: 'from-orange-500/10' },
                    { icon: Headphones, title: '24/7 Support', desc: 'Expert assistance', color: 'from-red-500/10' },
                    { icon: Shield, title: 'Lifetime Warranty', desc: 'Complete protection', color: 'from-orange-600/10' },
                    { icon: Star, title: '5-Star Rated', desc: 'Loved by thousands', color: 'from-yellow-500/10' },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="group p-6 rounded-2xl bg-gradient-to-br from-secondary/40 to-background border border-border/50 hover:border-orange-500/30 hover:from-secondary/60 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <benefit.icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-orange-500 transition-colors">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-orange-500/10 via-secondary/20 to-red-500/10 border border-orange-500/20 text-center"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Experience the Difference</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who have elevated their lifestyle with Chrono.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. TESTIMONIALS SECTION */}
        <section ref={testimonialsRef} className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
          {/* Decorative background */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-10 w-96 h-96 border border-border/20 rounded-full hidden lg:block"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Customer Love</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 max-w-3xl">
                Loved by<br />Thousands
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Real stories from our satisfied Chrono users around the world.
              </p>
            </motion.div>

            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/50 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"
            >
              <div className="lg:col-span-2">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-2xl lg:text-3xl font-light italic text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <p className="font-semibold text-lg text-foreground">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="hidden lg:flex flex-col gap-3 mt-8 lg:mt-0">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`p-3 rounded-lg text-left transition-all duration-300 ${
                      currentTestimonial === idx
                        ? 'bg-orange-500/20 border border-orange-500/50'
                        : 'bg-secondary/30 border border-border/30 hover:border-border/50'
                    }`}
                  >
                    <p className="text-xs font-semibold text-foreground line-clamp-2">{testimonials[idx].name}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Additional Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.filter((_, idx) => idx !== currentTestimonial).map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-secondary/40 to-background border border-border/50 hover:border-border/80 hover:from-secondary/50 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. NEWSLETTER SECTION */}
        <section ref={newsletterRef} className="py-24 lg:py-32 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-full blur-3xl"
          />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Stay Updated</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Get exclusive access to new releases, special offers, and insider tips from the Chrono team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 px-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:border-orange-500/50 transition-colors placeholder-muted-foreground font-medium"
                />
                <Button 
                  size="lg" 
                  className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 text-background hover:from-orange-600 hover:to-red-600 transition-all duration-300 rounded-lg font-bold whitespace-nowrap shadow-lg"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 11. CTA BANNER */}
        <section ref={ctaRef} className="py-24 lg:py-32 bg-gradient-to-r from-foreground via-foreground to-foreground/95 text-background relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-background/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-background/15 to-transparent rounded-full blur-3xl"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium text-background/70 uppercase tracking-widest block mb-6">Limited Time Offer</span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                Elevate Your<br />Everyday
              </h2>
              <p className="text-lg text-background/90 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Join thousands of discerning users who have chosen Chrono's precision engineering and timeless design.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="h-14 px-12 bg-background text-foreground hover:bg-background/95 transition-all duration-300 rounded-lg font-bold text-base shadow-2xl"
                  >
                    Shop Chrono Today <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Home;