import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/PageTransition";
import { ShieldCheck, Clock, Wrench, Award } from "lucide-react";

const Warranty = () => {
  return (
    <Layout>
      <PageTransition>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20"
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="mb-12 sm:mb-16 text-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-4 sm:mb-6">
                Warranty Information
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Comprehensive protection for your timepiece investment
              </motion.p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
              {/* Warranty Coverage */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Warranty Coverage</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">2-Year International Warranty</h3>
                    <p className="text-muted-foreground mb-4">
                      Every Chrono timepiece comes with a comprehensive 2-year international warranty 
                      covering manufacturing defects and material issues. This warranty is valid worldwide 
                      and can be serviced at any authorized Chrono service center.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">What's Covered</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Manufacturing defects in materials and workmanship</li>
                      <li>• Movement malfunctions under normal use</li>
                      <li>• Case and crystal defects</li>
                      <li>• Crown and pusher functionality</li>
                      <li>• Water resistance as specified (when properly sealed)</li>
                      <li>• Strap/bracelet manufacturing defects</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">What's Not Covered</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Normal wear and tear (scratches, dents, worn straps)</li>
                      <li>• Damage from accidents, misuse, or improper care</li>
                      <li>• Battery replacement (for quartz models)</li>
                      <li>• Damage from unauthorized repairs or modifications</li>
                      <li>• Loss of water resistance due to impact or aging seals</li>
                      <li>• Cosmetic changes like discoloration or aging</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Warranty Period */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Warranty Period</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your warranty begins on the date of purchase as shown on your original receipt 
                    or invoice. The warranty card must be properly completed and stamped by an 
                    authorized Chrono retailer.
                  </p>
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-3">Extended Warranty Available</h4>
                    <p>
                      Extend your warranty coverage to 5 years with our Premium Care program. 
                      Contact us within 30 days of purchase to enroll.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Service & Repair */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Service & Repair</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">How to Submit a Warranty Claim</h3>
                    <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                      <li>Contact our customer service at support@chrono.com or +91 98765 43210</li>
                      <li>Provide your warranty card number and proof of purchase</li>
                      <li>Describe the issue in detail with photos if possible</li>
                      <li>Receive prepaid shipping label and instructions</li>
                      <li>Pack your watch securely with all documentation</li>
                      <li>Ship to our authorized service center</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Service Time</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Warranty repairs: 10-15 business days</li>
                      <li>• Battery replacement: 3-5 business days</li>
                      <li>• Full service: 3-4 weeks</li>
                      <li>• Complex repairs: 4-6 weeks</li>
                    </ul>
                    <p className="mt-4">
                      We'll keep you updated throughout the service process via email and provide 
                      a tracking number when your watch is returned.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Authorized Service Centers</h3>
                    <p className="text-muted-foreground">
                      Chrono maintains authorized service centers in major cities worldwide. 
                      All repairs are performed by certified watchmakers using genuine Chrono parts. 
                      Visit our website or contact customer service to find your nearest location.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Care & Maintenance */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Care & Maintenance</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To maintain your warranty and keep your timepiece in optimal condition:
                  </p>
                  <ul className="space-y-2">
                    <li>• Have your watch serviced every 3-5 years by authorized technicians</li>
                    <li>• Avoid exposing your watch to extreme temperatures or magnetic fields</li>
                    <li>• Check water resistance seals annually if regularly exposed to water</li>
                    <li>• Clean your watch with a soft, damp cloth regularly</li>
                    <li>• Store in a cool, dry place when not wearing</li>
                    <li>• Wind automatic watches if not worn for extended periods</li>
                    <li>• Never attempt to open the case yourself</li>
                  </ul>
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="bg-muted p-8 sm:p-10 rounded-lg text-center"
              >
                <h3 className="text-xl sm:text-2xl font-black mb-4">Questions About Your Warranty?</h3>
                <p className="text-muted-foreground mb-6">
                  Our customer service team is available to help with warranty questions, 
                  service inquiries, or any concerns about your timepiece.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:support@chrono.com" 
                    className="text-foreground hover:underline font-medium"
                  >
                    support@chrono.com
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">|</span>
                  <a 
                    href="tel:+919876543210" 
                    className="text-foreground hover:underline font-medium"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </PageTransition>
    </Layout>
  );
};

export default Warranty;
