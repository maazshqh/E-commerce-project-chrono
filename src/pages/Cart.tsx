import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const shipping = totalPrice > 10000 ? 0 : 499;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

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
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground mb-2">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Looks like you haven't added any watches to your cart yet.
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
        <div className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-10"
            >
              Shopping Cart
              <span className="text-muted-foreground font-normal ml-2">({totalItems} items)</span>
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.product.id}-${item.selectedColor}`}
                    initial={{ opacity: 0, x: -50, rotateY: -15 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.02, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-card rounded-2xl border border-border hover:shadow-glass transition-all"
                  >
                    <Link to={`/product/${item.product.id}`}>
                      <motion.img
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full sm:w-28 h-28 object-cover rounded-xl"
                      />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link to={`/product/${item.product.id}`}>
                            <h3 className="font-bold text-foreground hover:text-muted-foreground transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{item.selectedColor}</p>
                          <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                            item.product.category === 'Premium' 
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' 
                              : item.product.category === 'Sport'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                              : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                          }`}>
                            {item.product.category}
                          </span>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        <div className="flex items-center gap-1 bg-secondary rounded-full">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 hover:bg-secondary-foreground/10 rounded-full transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <motion.span 
                            key={item.quantity}
                            initial={{ scale: 1.5 }}
                            animate={{ scale: 1 }}
                            className="w-8 text-center font-medium"
                          >
                            {item.quantity}
                          </motion.span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-secondary-foreground/10 rounded-full transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <p className="text-xl font-bold text-foreground">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl border border-border p-6 sticky top-24"
                >
                  <h2 className="text-lg font-bold text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground font-medium">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground font-medium">
                        {shipping === 0 ? (
                          <span className="text-emerald-600 dark:text-emerald-400">Free</span>
                        ) : (
                          `₹${shipping}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (18% GST)</span>
                      <span className="text-foreground font-medium">₹{tax.toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-foreground">₹{grandTotal.toLocaleString()}</span>
                  </div>

                  <Link to="/checkout">
                    <Button className="w-full h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>

                  <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Free shipping on orders over ₹10,000
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Continue Shopping
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Cart;
