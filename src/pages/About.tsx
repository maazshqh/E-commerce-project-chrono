import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Award, Heart, Leaf, Users, Zap, Globe, Shield, Clock, ArrowRight, Sparkles, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const storyImageY = useTransform(storyProgress, [0, 1], ['50px', '-50px']);

  const values = [
    { icon: Heart, title: 'Passion', description: 'Every product we create is born from our love for technology and design.', color: 'from-rose-500 to-pink-600' },
    { icon: Zap, title: 'Innovation', description: 'Pushing boundaries with cutting-edge features and seamless experiences.', color: 'from-amber-500 to-orange-600' },
    { icon: Leaf, title: 'Sustainability', description: 'Committed to eco-friendly materials and responsible manufacturing.', color: 'from-emerald-500 to-teal-600' },
    { icon: Users, title: 'Community', description: 'Building a global family of enthusiasts who share our vision.', color: 'from-blue-500 to-indigo-600' },
  ];

  const milestones = [
    { year: '2018', title: 'Founded', description: 'Chrono was born in a small garage with big dreams', icon: Rocket },
    { year: '2019', title: 'First Product', description: 'Launched our debut smartwatch to critical acclaim', icon: Sparkles },
    { year: '2021', title: '1M Customers', description: 'Reached our first million happy customers worldwide', icon: Users },
    { year: '2024', title: 'Global Expansion', description: 'Now available in 50+ countries with local support', icon: Globe },
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Visionary leader with 15 years in tech' },
    { name: 'Sarah Williams', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Former Apple designer' },
    { name: 'Michael Park', role: 'CTO', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', bio: 'Engineering excellence advocate' },
    { name: 'Emily Rodriguez', role: 'VP of Marketing', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', bio: 'Brand storytelling expert' },
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
                alt="About Chrono"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
            
            {/* Floating orbs */}
            <motion.div
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-[80px]"
            />
          </div>

          <motion.div 
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="relative z-10 max-w-5xl mx-auto px-4 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-full text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                Est. 2018
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-[0.9] text-foreground mb-8"
            >
              Redefining<br />
              Time
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We craft smartwatches that seamlessly blend cutting-edge technology with timeless design, 
              enhancing your life without complicating it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12"
            >
              <Link to="/products">
                <Button size="lg" className="h-16 px-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-foreground/40 rounded-full"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section ref={missionRef} className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Our Mission', description: 'To democratize premium wearable technology, making health and connectivity accessible to everyone.' },
                { icon: Sparkles, title: 'Our Vision', description: 'A world where technology seamlessly integrates into daily life, enhancing human potential.' },
                { icon: Shield, title: 'Our Promise', description: 'Unwavering commitment to quality, innovation, and customer satisfaction in everything we do.' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-10 h-full hover:shadow-glass-lg transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section ref={storyRef} className="py-16 sm:py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
                >
                  The Beginning
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 sm:mb-8 leading-tight"
                >
                  From Vision<br />to Reality
                </motion.h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Chrono was founded in 2018 with a simple mission: create smartwatches that people 
                    actually want to wear. We saw a gap in the market—technology-first products that 
                    forgot about design and comfort.
                  </p>
                  <p>
                    Today, we're proud to be trusted by over 2 million customers worldwide. Our team 
                    of engineers, designers, and dreamers work tirelessly to push the boundaries of 
                    what's possible in wearable technology.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
                  {[
                    { value: '2M+', label: 'Customers' },
                    { value: '50+', label: 'Countries' },
                    { value: '99%', label: 'Satisfaction' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={isStoryInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center p-4 rounded-xl bg-background/50 backdrop-blur-sm"
                    >
                      <p className="text-2xl sm:text-3xl font-black text-foreground">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl opacity-50" />
                <motion.div style={{ y: storyImageY }} className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Chrono Team"
                    className="relative w-full rounded-3xl shadow-2xl"
                  />
                  
                  {/* Floating stat card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 shadow-premium"
                  >
                    <p className="text-3xl font-bold text-foreground">6+</p>
                    <p className="text-sm text-muted-foreground">Years of Innovation</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Journey</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">Our Milestones</h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center mb-20 last:mb-0 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-card rounded-3xl border border-border p-8 hover:shadow-glass-lg transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-4 mb-4" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <milestone.icon className="w-6 h-6 text-accent" />
                        </div>
                        <span className="text-4xl font-bold text-accent">{milestone.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Center dot */}
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-accent rounded-full border-4 border-background shadow-glow"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-32 bg-foreground text-background relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-sm font-medium text-background/60 uppercase tracking-wider">What We Stand For</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4">Our Core Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40, rotateY: -15 }}
                  animate={isValuesInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="relative p-8 rounded-3xl bg-background/5 border border-background/10 backdrop-blur-sm h-full hover:bg-background/10 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-background/70 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">The People</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The brilliant minds behind every innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative mb-6 rounded-3xl overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-0 left-0 right-0 p-6"
                    >
                      <p className="text-background text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, value: '2M+', label: 'Happy Customers' },
                { icon: Globe, value: '50+', label: 'Countries' },
                { icon: Award, value: '25+', label: 'Awards Won' },
                { icon: Clock, value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    <stat.icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Join the Chrono Family
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Experience the perfect blend of technology and craftsmanship. 
                Discover why millions trust Chrono for their everyday adventures.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/products">
                  <Button size="lg" className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default About;
