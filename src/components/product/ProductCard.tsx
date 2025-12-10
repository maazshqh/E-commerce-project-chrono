import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative bg-card rounded-2xl border border-border overflow-hidden product-card-hover"
      >
        {/* Image Container */}
        <div className="aspect-square overflow-hidden bg-secondary/50 relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Wishlist Button */}
          <motion.button
            onClick={handleWishlistClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-background/80 backdrop-blur-sm text-foreground hover:bg-background"
            )}
          >
            <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
          </motion.button>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              product.category === 'Premium' && "bg-amber-100 text-amber-800",
              product.category === 'Sport' && "bg-emerald-100 text-emerald-800",
              product.category === 'Classic' && "bg-slate-100 text-slate-800"
            )}>
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description.slice(0, 60)}...
          </p>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-foreground">
              {product.priceFormatted}
            </span>
            <span className="text-xs text-muted-foreground">
              {product.colors.length} colors
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
