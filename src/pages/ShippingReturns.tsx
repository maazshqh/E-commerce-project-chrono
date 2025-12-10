import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/PageTransition";
import { Package, Truck, RefreshCcw, ShieldCheck } from "lucide-react";

const ShippingReturns = () => {
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
                Shipping & Returns
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Fast, secure delivery and hassle-free returns
              </motion.p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
              {/* Shipping Information */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Shipping Information</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Delivery Times</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Standard Shipping: 5-7 business days</li>
                      <li>• Express Shipping: 2-3 business days</li>
                      <li>• Next Day Delivery: Order before 2 PM for next-day delivery</li>
                      <li>• International Shipping: 10-15 business days</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Shipping Costs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Orders over ₹5,000: Free standard shipping</li>
                      <li>• Standard Shipping: ₹200</li>
                      <li>• Express Shipping: ₹500</li>
                      <li>• Next Day Delivery: ₹800</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Tracking Your Order</h3>
                    <p className="text-muted-foreground">
                      Once your order ships, you'll receive a tracking number via email. 
                      Use this number to track your package in real-time through our shipping partners.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Returns & Exchanges */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCcw className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Returns & Exchanges</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">30-Day Return Policy</h3>
                    <p className="text-muted-foreground mb-4">
                      We offer a 30-day return window for all unworn items in original condition 
                      with all tags and packaging intact. If you're not completely satisfied with 
                      your purchase, return it for a full refund or exchange.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Return Process</h3>
                    <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                      <li>Contact us at support@chrono.com or call +91 98765 43210</li>
                      <li>Receive your return authorization and prepaid shipping label</li>
                      <li>Pack your item securely in original packaging</li>
                      <li>Drop off at any authorized courier location</li>
                      <li>Refund processed within 5-7 business days after receipt</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Exchanges</h3>
                    <p className="text-muted-foreground">
                      Need a different size or style? We'll process exchanges immediately. 
                      Contact our customer service team to initiate an exchange, and we'll 
                      ship your replacement as soon as we receive your return.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Packaging & Quality */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Packaging & Quality</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every Chrono timepiece arrives in premium packaging designed to protect your 
                    watch during transit. Our packaging includes:
                  </p>
                  <ul className="space-y-2">
                    <li>• Luxury presentation box</li>
                    <li>• Protective watch cushion</li>
                    <li>• Certificate of authenticity</li>
                    <li>• Care instructions booklet</li>
                    <li>• Warranty card</li>
                  </ul>
                  <p>
                    All shipments are fully insured and require signature confirmation to ensure 
                    your valuable purchase reaches you safely.
                  </p>
                </div>
              </motion.section>

              {/* Secure Shipping */}
              <motion.section
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">Secure Shipping</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your security is our priority. All Chrono shipments include:
                  </p>
                  <ul className="space-y-2">
                    <li>• Tamper-evident security seals</li>
                    <li>• Discreet packaging with no external branding</li>
                    <li>• Full insurance coverage</li>
                    <li>• Real-time GPS tracking</li>
                    <li>• Signature required upon delivery</li>
                  </ul>
                  <p>
                    We partner with trusted carriers to ensure your timepiece arrives safely 
                    and on time.
                  </p>
                </div>
              </motion.section>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="bg-muted p-8 sm:p-10 rounded-lg text-center"
              >
                <h3 className="text-xl sm:text-2xl font-black mb-4">Questions About Shipping or Returns?</h3>
                <p className="text-muted-foreground mb-6">
                  Our customer service team is here to help with any questions about 
                  shipping, delivery, or returns.
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

export default ShippingReturns;
