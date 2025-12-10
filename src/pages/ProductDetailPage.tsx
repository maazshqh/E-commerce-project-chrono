import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ChevronLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';
import ProductReviews from '@/components/product/ProductReviews';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { toast } = useToast();

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-light">Product not found</h1>
          <Link to="/products" className="text-muted-foreground hover:text-foreground mt-4 inline-block underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, product.colors[0]);
    toast({ title: "Added to cart", description: `${product.name} has been added to your cart.` });
  };

  return (
    <Layout>
      <PageTransition>
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 text-sm">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Images */}
              <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0.95 }} 
                animate={{ opacity: 1, x: 0, scale: 1 }} 
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="order-2 lg:order-1"
              >
                <motion.div 
                  className="aspect-square overflow-hidden bg-secondary mb-4 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={product.images[selectedImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {product.images.map((img, i) => (
                    <motion.button 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(i)}
                      className={cn(
                        "aspect-square overflow-hidden border-2 transition-all rounded-xl",
                        selectedImage === i ? "border-foreground shadow-lg" : "border-transparent hover:border-muted-foreground"
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Info */}
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.95 }} 
                animate={{ opacity: 1, x: 0, scale: 1 }} 
                transition={{ duration: 0.7, type: "spring", stiffness: 100, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs text-muted-foreground uppercase tracking-widest"
                >
                  {product.category}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mt-2 mb-4"
                >
                  {product.name}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-6"
                >
                  {product.priceFormatted}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed"
                >
                  {product.description}
                </motion.p>

                {/* Features */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mb-8"
                >
                  <h3 className="text-sm font-bold mb-4 text-foreground uppercase tracking-wider">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.slice(0, 4).map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-orange-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Actions */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button 
                      onClick={handleAddToCart} 
                      size="lg" 
                      className="w-full h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base font-bold"
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button 
                      onClick={() => toggleWishlist(product)} 
                      variant="outline" 
                      size="lg" 
                      className="h-14 w-14 rounded-full p-0 border-2 border-foreground"
                    >
                      <Heart className={cn("w-5 h-5", isInWishlist(product.id) && "fill-foreground")} />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Specs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="border-t border-border pt-8"
                >
                  <h3 className="text-lg sm:text-xl font-light mb-6">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <motion.div 
                        key={key} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.02)" }}
                        className="py-4 border-b border-border px-2 rounded-lg transition-colors"
                      >
                        <p className="text-muted-foreground capitalize mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="font-medium text-foreground">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Additional Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 border-t border-border pt-12 sm:pt-16">
              {/* Warranty */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="space-y-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-background to-secondary/30 border border-border"
              >
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">Warranty & Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 2-year international warranty</li>
                  <li>• 30-day money-back guarantee</li>
                  <li>• Free software updates for life</li>
                  <li>• 24/7 customer support</li>
                  <li>• Premium care program available</li>
                </ul>
              </motion.div>

              {/* Compatibility */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="space-y-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-background to-secondary/30 border border-border"
              >
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">Compatibility</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• iOS 14.0 or later</li>
                  <li>• Android 8.0 or later</li>
                  <li>• Bluetooth 5.0+ required</li>
                  <li>• Works with Chrono app</li>
                  <li>• Third-party app support</li>
                </ul>
              </motion.div>

              {/* What's In The Box */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="space-y-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-background to-secondary/30 border border-border"
              >
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">What's In The Box</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {product.name}</li>
                  <li>• Magnetic charging cable</li>
                  <li>• Quick start guide</li>
                  <li>• Warranty card</li>
                  <li>• Premium gift box</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <ProductReviews />
      </PageTransition>
    </Layout>
  );
};

export default ProductDetailPage;