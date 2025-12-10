import { motion } from 'framer-motion';
import ReviewProduct from './ReviewProduct';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-4 h-4 ${star <= rating ? 'text-foreground' : 'text-muted-foreground/30'}`}
      >
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
          clipRule="evenodd"
        />
      </svg>
    ))}
  </div>
);

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

const ProductReviews = () => {
  // Mock reviews data - in a real app this would come from an API
  const reviews: Review[] = [
    {
      id: 1,
      author: 'Michael T.',
      rating: 5,
      date: 'December 2, 2024',
      title: 'Exceptional quality and design',
      content: 'This smartwatch exceeded all my expectations. The build quality is outstanding, and the battery life is exactly as advertised. The health monitoring features are accurate and the display is crisp even in direct sunlight.',
      verified: true
    },
    {
      id: 2,
      author: 'Sarah K.',
      rating: 5,
      date: 'November 28, 2024',
      title: 'Perfect for everyday wear',
      content: 'I\'ve worn this watch every day for the past month and it still looks brand new. The titanium case is incredibly light and comfortable. The notifications are seamless and the fitness tracking is spot on.',
      verified: true
    },
    {
      id: 3,
      author: 'James L.',
      rating: 4,
      date: 'November 15, 2024',
      title: 'Great watch, minor software issues',
      content: 'The hardware is premium quality and the watch looks stunning. Had some initial syncing issues with the app, but customer support was helpful in resolving them. Overall very satisfied with my purchase.',
      verified: true
    },
    {
      id: 4,
      author: 'Emily R.',
      rating: 5,
      date: 'November 8, 2024',
      title: 'Worth every penny',
      content: 'Coming from a cheaper smartwatch, the difference is night and day. The sapphire crystal display, the smooth animations, and the precise health sensors make this a true premium device.',
      verified: false
    },
  ];

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(
    rating => reviews.filter(r => r.rating === rating).length
  );

  return (
    <div className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-light text-foreground mb-8">Customer Reviews</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/30 p-8 border border-border">
                <div className="text-center mb-6">
                  <p className="text-5xl font-light text-foreground mb-2">{averageRating.toFixed(1)}</p>
                  <StarRating rating={Math.round(averageRating)} />
                  <p className="text-sm text-muted-foreground mt-2">Based on {reviews.length} reviews</p>
                </div>
                
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating, index) => (
                    <div key={rating} className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground w-3">{rating}</span>
                      <div className="flex-1 h-2 bg-border overflow-hidden">
                        <div 
                          className="h-full bg-foreground transition-all duration-500"
                          style={{ width: `${(ratingCounts[index] / reviews.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-6">{ratingCounts[index]}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <ReviewProduct />
                </div>
              </div>
            </div>
            
            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-border pb-6 last:border-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <StarRating rating={review.rating} />
                        {review.verified && (
                          <span className="text-xs text-muted-foreground border border-border px-2 py-0.5">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-foreground">{review.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">{review.content}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{review.author}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductReviews;