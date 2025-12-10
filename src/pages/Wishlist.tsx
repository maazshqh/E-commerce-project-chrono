import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof items[0]) => {
    addToCart(product, product.colors[0]);
    toast({ 
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <PageTransition>
          <div className="min-h-[60vh] flex flex-col items-center justify-center pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground mb-2">Your wishlist is empty</h1>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Save items you love for later by clicking the heart icon on products.
              </p>
              <Link to="/products">
                <Button size="lg" className="rounded-full">
                  Browse Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </PageTransition>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageTransition>
        <div className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mb-10"
            >
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-foreground">
                  My Wishlist
                </h1>
                <p className="text-muted-foreground mt-2">{items.length} items saved</p>
              </div>
              <Link to="/products">
                <Button variant="outline" className="rounded-full">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {items.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-glass-lg transition-all duration-300"
                >
                  <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.5 }}
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" 
                    />
                  </Link>
                  
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-bold text-foreground hover:text-muted-foreground transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => removeFromWishlist(product.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                    
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-3 ${
                      product.category === 'Premium' 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' 
                        : product.category === 'Sport'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {product.category}
                    </span>
                    
                    <p className="text-xl font-bold text-foreground mb-4">
                      {product.priceFormatted}
                    </p>
                    
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Wishlist;
