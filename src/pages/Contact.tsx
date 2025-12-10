import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageTransition>
        <div className="pt-24 pb-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
          {/* Background Effects */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="text-center mb-16 sm:mb-20"
            >
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4"
              >
                Get in Touch
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-6"
              >
                Let's Talk
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Have a question about our products? Our team is here to help you find the perfect timepiece.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
                className="lg:col-span-3"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl border border-border/50 p-6 sm:p-8 lg:p-10 shadow-glass">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl sm:text-3xl font-black text-foreground mb-6 sm:mb-8"
                  >
                    Send us a message
                  </motion.h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                        <Input name="firstName" required placeholder="John" className="h-12 rounded-xl" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                        <Input name="lastName" required placeholder="Doe" className="h-12 rounded-xl" />
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input name="email" required placeholder="john@example.com" type="email" className="h-12 rounded-xl" />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                      <Input name="subject" required placeholder="How can we help?" className="h-12 rounded-xl" />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea name="message" required placeholder="Tell us more about your inquiry..." className="min-h-[150px] rounded-xl resize-none" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-full bg-foreground text-background text-base font-bold"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
                className="lg:col-span-2 space-y-4 sm:space-y-6"
              >
                {[
                  { icon: Mail, title: 'Email', content: 'hello@chrono.com', subtitle: 'We reply within 24 hours' },
                  { icon: Phone, title: 'Phone', content: '+91 98765 43210', subtitle: 'Mon-Fri, 9am-6pm IST' },
                  { icon: MapPin, title: 'Address', content: '123 Tech Park, Koramangala', subtitle: 'Bangalore, India 560034' },
                  { icon: Clock, title: 'Business Hours', content: 'Monday - Friday', subtitle: '9:00 AM - 6:00 PM IST' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-5 sm:p-6 hover:shadow-glass transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="text-foreground mt-1">{item.content}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* FAQ Link */}
                <Link to="/faq">
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-2xl p-6 cursor-pointer"
                  >
                    <h3 className="font-bold text-lg mb-2">Need quick answers?</h3>
                    <p className="text-background/80 mb-4">
                      Check out our FAQ section for instant answers to common questions.
                    </p>
                    <Button variant="secondary" className="rounded-full">
                      View FAQ
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
