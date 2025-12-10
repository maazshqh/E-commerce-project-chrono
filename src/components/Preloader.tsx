import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9] as any
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.5,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as any
      }
    }
  };

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as any
      }
    }
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Circles */}
          <motion.div
            variants={circleVariants}
            animate="animate"
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
          />
          <motion.div
            variants={circleVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          />

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Letters */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {['C', 'H', 'R', 'O', 'N', 'O'].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm md:text-base text-muted-foreground uppercase tracking-widest"
            >
              Precision Engineered Time
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="mt-8 w-48 h-1 bg-muted rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-1/2 bg-gradient-to-r from-orange-500 to-red-600"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
