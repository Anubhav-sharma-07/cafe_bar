import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after assets/layout render
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-brand-cream flex flex-col justify-center items-center pointer-events-auto"
        >
          {/* Subtle noise in loader */}
          <div className="absolute inset-0 noise-overlay opacity-[0.02]" />

          {/* Golden background aura */}
          <div className="absolute w-[300px] h-[300px] bg-brand-gold/10 rounded-full filter blur-[80px]" />

          <div className="text-center relative z-10 space-y-4">
            {/* Spaced logo */}
            <motion.h1 
              initial={{ letterSpacing: '0.1em', opacity: 0, y: 30 }}
              animate={{ letterSpacing: '0.35em', opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-light text-brand-charcoal uppercase text-serif"
            >
              SOCIO
            </motion.h1>

            {/* Subtle brand tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[9px] uppercase tracking-[0.25em] text-brand-charcoal font-semibold"
            >
              KITCHEN & BAR • PUNE
            </motion.p>
          </div>

          {/* Gold loading indicator line */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-brand-charcoal/10 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1/2 h-full bg-brand-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
