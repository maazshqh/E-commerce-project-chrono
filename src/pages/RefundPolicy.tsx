import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy - Chrono";
  }, []);

  return (
    <Layout>
      <PageTransition>
        <div className="pt-24 pb-20 bg-gradient-to-b from-background via-secondary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.header 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 text-center"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">Legal</span>
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-6">Refund Policy</h1>
              <p className="text-muted-foreground">Last updated: December 10, 2025</p>
            </motion.header>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none space-y-8"
            >
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">30-Day Money-Back Guarantee</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Chrono, we stand behind the quality of our products. If you're not completely satisfied with your purchase, we offer a 30-day money-back guarantee from the date of delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility for Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To be eligible for a refund, your item must meet the following conditions:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Product must be returned within 30 days of delivery</li>
                  <li>Item must be in original, unused condition</li>
                  <li>Original packaging and all accessories must be included</li>
                  <li>Proof of purchase (order number or receipt) must be provided</li>
                  <li>Product must not show signs of wear or damage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Items</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personalized or custom-made products</li>
                  <li>Products with broken seals or tampered packaging</li>
                  <li>Gift cards and promotional items</li>
                  <li>Downloaded digital content or software</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Refund Process</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">1. Initiate Return</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contact our customer support at support@chrono.com or call +91 98765 43210 to initiate your return. Provide your order number and reason for return.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">2. Return Authorization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We'll provide you with a Return Authorization (RA) number and shipping instructions within 24-48 hours.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">3. Ship Product</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Package the item securely with all original accessories and ship it to the address provided. We recommend using a trackable shipping method.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">4. Inspection & Processing</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Refund Method</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Refunds will be issued to the original payment method used for the purchase. Please allow 5-10 business days for the refund to appear in your account, depending on your financial institution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Exchanges</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you'd like to exchange your product for a different model or color, please follow the same return process and place a new order for your desired item. This ensures faster processing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Shipping Costs</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Original shipping costs are non-refundable</li>
                  <li>Return shipping costs are the customer's responsibility</li>
                  <li>If the return is due to our error or a defective product, we'll cover return shipping</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Damaged or Defective Items</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive a damaged or defective item, please contact us immediately at support@chrono.com with photos of the damage. We'll arrange for a replacement or full refund, including shipping costs, at no additional charge to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions about our refund policy, please contact:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p>Email: support@chrono.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default RefundPolicy;
