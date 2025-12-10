import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Products',
      questions: [
        {
          q: 'What materials are your smartwatches made from?',
          a: 'Our smartwatches are crafted from premium materials including aerospace-grade titanium, surgical-grade stainless steel, and sapphire crystal glass. Each component is selected for durability, comfort, and aesthetic appeal.'
        },
        {
          q: 'Are your watches water resistant?',
          a: 'Yes, all our smartwatches are water resistant to at least 5ATM (50 meters), making them suitable for swimming, showering, and everyday water exposure. Some models offer enhanced water resistance for diving.'
        },
        {
          q: 'How long does the battery last?',
          a: 'Battery life varies by model and usage. Our Classic series offers up to 7 days, Sport series up to 10 days, and Premium series up to 14 days on a single charge with typical usage including always-on display.'
        },
        {
          q: 'What health features are included?',
          a: 'Our smartwatches include comprehensive health monitoring: heart rate tracking, blood oxygen (SpO2) measurement, ECG capability (Premium models), sleep tracking, stress monitoring, and activity tracking for over 100 workout types.'
        },
        {
          q: 'Are the bands interchangeable?',
          a: 'Yes, all our watch bands feature a quick-release mechanism allowing easy swapping without tools. We offer a wide range of band materials including leather, silicone, metal, and fabric in various colors.'
        },
      ]
    },
    {
      title: 'Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 5-7 business days. Express shipping delivers in 2-3 business days, and overnight shipping is available for next-business-day delivery. International shipping times vary by destination.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination. All international orders are shipped with tracking and insurance included.'
        },
        {
          q: 'Is shipping free?',
          a: 'We offer free standard shipping on all orders over €100. Express and overnight shipping options are available for an additional fee. International shipping costs are calculated at checkout based on destination.'
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive an email with tracking information. You can also track your order by logging into your account or contacting our customer support team.'
        },
        {
          q: 'Can I change my shipping address after ordering?',
          a: 'Address changes can be made within 24 hours of placing your order by contacting our customer support. Once the order has shipped, address changes are not possible.'
        },
      ]
    },
    {
      title: 'Returns & Warranty',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day return policy for all unworn items in original packaging. Returns are free within the EU. International return shipping costs may apply. Refunds are processed within 5-7 business days of receiving the return.'
        },
        {
          q: 'What warranty do you offer?',
          a: 'All our smartwatches come with a 5-year manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available for purchase. Accidental damage is not covered under standard warranty.'
        },
        {
          q: 'How do I initiate a return?',
          a: 'To start a return, log into your account and select the order you wish to return, or contact our customer support team. You\'ll receive a prepaid shipping label and instructions for returning your item.'
        },
        {
          q: 'Can I exchange an item?',
          a: 'Yes, exchanges are available for different sizes or colors within 30 days of purchase. If the new item is a different price, we\'ll adjust your payment accordingly.'
        },
        {
          q: 'What happens if my watch needs repair?',
          a: 'For warranty repairs, contact our support team to arrange shipping. Repairs typically take 7-14 business days. We offer expedited repair service for Premium members. Out-of-warranty repairs are available for a fee.'
        },
      ]
    },
    {
      title: 'Account & Orders',
      questions: [
        {
          q: 'Do I need an account to place an order?',
          a: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, access order history, and receive exclusive member benefits and early access to new releases.'
        },
        {
          q: 'How do I reset my password?',
          a: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes. Check your spam folder if you don\'t see it.'
        },
        {
          q: 'Can I modify or cancel my order?',
          a: 'Orders can be modified or cancelled within 24 hours of placement. Contact our customer support team immediately. Once an order has been shipped, it cannot be cancelled but can be returned.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. Payment plans through Klarna and Affirm are also available.'
        },
        {
          q: 'Is my payment information secure?',
          a: 'Absolutely. We use industry-standard SSL encryption and are PCI DSS compliant. We never store your complete credit card information on our servers. All transactions are processed through secure payment gateways.'
        },
      ]
    },
  ];

  return (
    <Layout>
      <PageTransition>
        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-medium text-muted-foreground uppercase tracking-widest inline-block"
              >
                Support
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-foreground mt-4 mb-6"
              >
                Frequently Asked<br />Questions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Find answers to common questions about our products, shipping, returns, and more.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="pb-20 sm:pb-32 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: -50, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1, type: "spring" }}
                >
                  <motion.h2 
                    whileHover={{ x: 10, color: "var(--foreground)" }}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-6 pb-4 border-b-2 border-border cursor-pointer"
                  >
                    {category.title}
                  </motion.h2>
                  
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.title}-${index}`}
                        className="border border-border px-6 data-[state=open]:bg-secondary/30"
                      >
                        <AccordionTrigger className="text-left font-light hover:no-underline py-5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-light text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our customer support team is here to help 24/7.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm"
              >
                Contact Support
              </a>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default FAQ;