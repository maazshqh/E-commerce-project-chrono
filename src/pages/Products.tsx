import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/PageTransition';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

type CategoryFilter = 'all' | 'Classic' | 'Sport' | 'Premium';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryFilter) || 'all';
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(initialCategory);

  const filters: { label: string; value: CategoryFilter; count: number }[] = [
    { label: 'All', value: 'all', count: products.length },
    { label: 'Classic', value: 'Classic', count: products.filter(p => p.category === 'Classic').length },
    { label: 'Sport', value: 'Sport', count: products.filter(p => p.category === 'Sport').length },
    { label: 'Premium', value: 'Premium', count: products.filter(p => p.category === 'Premium').length },
  ];

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', filter.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <PageTransition>
        <div className="pt-24 pb-20 bg-gradient-to-b from-background via-secondary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-4">
                Our Collection
              </span>
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
                Discover<br />Excellence
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Each Chrono timepiece is crafted with precision and passion,
                designed to elevate your lifestyle.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full"
              >
                <span className="text-sm font-bold text-foreground">{products.length}</span>
                <span className="text-sm text-muted-foreground">Premium Products</span>
              </motion.div>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {filters.map((filter) => (
                <Button
                  key={filter.value}
                  onClick={() => handleFilterChange(filter.value)}
                  variant={activeFilter === filter.value ? 'default' : 'outline'}
                  className={`rounded-full px-8 h-14 transition-all duration-300 font-bold ${
                    activeFilter === filter.value
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                      : 'hover:bg-secondary/50 border-border/50 backdrop-blur-sm'
                  }`}
                >
                  {filter.label}
                  <span className={`ml-2 text-xs px-2.5 py-1 rounded-full font-semibold ${
                    activeFilter === filter.value
                      ? 'bg-white/20 text-white'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {filter.count}
                  </span>
                </Button>
              ))}
            </motion.div>

            {/* Category Description */}
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              {activeFilter === 'Premium' && (
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Luxury timepieces with premium materials and exclusive features for the discerning professional.
                </p>
              )}
              {activeFilter === 'Sport' && (
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Engineered for athletes with advanced tracking, GPS, and rugged durability.
                </p>
              )}
              {activeFilter === 'Classic' && (
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Timeless designs that blend traditional aesthetics with modern smart features.
                </p>
              )}
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -10, scale: 1.02, rotateZ: 1 }}
                    className="group"
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-32"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 rounded-full border-2 border-orange-500/20" />
                  </motion.div>
                  <Filter className="w-16 h-16 mx-auto text-muted-foreground mb-6 relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No Products Found</h3>
                <p className="text-muted-foreground text-lg">
                  Try selecting a different category.
                </p>
              </motion.div>
            )}

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-20"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/30 backdrop-blur-sm rounded-full border border-border/50">
                <span className="text-sm font-bold text-foreground">Showing {filteredProducts.length}</span>
                <span className="text-sm text-muted-foreground">of {products.length} products</span>
              </div>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default Products;
