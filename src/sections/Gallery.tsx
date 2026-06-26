import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const CATEGORIES = ['All', 'Food', 'Cocktails', 'Brunch', 'Interiors', 'Events', 'Rooftop', 'Instagram Moments'];

const GALLERY_ITEMS = [
  {
    id: 1,
    image: '/images/sushi.png',
    title: 'Asparagus Tempura Blue Rice Sushi',
    category: 'Food',
  },
  {
    id: 2,
    image: '/images/kabab.png',
    title: 'Murg Shikari Kabab',
    category: 'Food',
  },
  {
    id: 3,
    image: '/images/musallam.png',
    title: 'Murg Musallam Signature Course',
    category: 'Food',
  },
  {
    id: 4,
    image: '/images/brunch-drink.png',
    title: 'Artisanal Cocktail Pouring',
    category: 'Cocktails',
  },
  {
    id: 5,
    image: '/images/brunch-table.png',
    title: 'Sunday Brunch Spreads',
    category: 'Brunch',
  },
  {
    id: 6,
    image: '/images/brunch-table.png',
    title: 'Rooftop Lounge Skyline Vistas',
    category: 'Rooftop',
  },
  {
    id: 7,
    image: '/images/sushi.png',
    title: 'Signature Blue Ocean Tonic',
    category: 'Cocktails',
  },
  {
    id: 8,
    image: '/images/brunch-table.png',
    title: 'Aesthetic Botanical Decor & Pampas',
    category: 'Interiors',
  },
  {
    id: 9,
    image: '/images/brunch-drink.png',
    title: 'Live Acoustic Sunset Events',
    category: 'Events',
  },
  {
    id: 10,
    image: '/images/kabab.png',
    title: 'Cherished Dining Memories',
    category: 'Instagram Moments',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            Visual Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal">
            Gallery Experience
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12 max-w-4xl mx-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'border border-brand-charcoal bg-brand-charcoal text-brand-cream'
                  : 'border border-brand-brown/10 bg-transparent text-brand-muted hover:border-brand-gold/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry columns layout */}
        <motion.div 
          layout 
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer border border-brand-brown/5 bg-brand-beige/25"
                onClick={() => openLightbox(idx)}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-auto object-cover filter brightness-[0.98] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Cover Overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold mb-1 block">
                        {item.category}
                      </span>
                      <h4 className="text-sm text-white font-light text-serif leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="p-2 border border-brand-gold/40 rounded-full text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-colors duration-300">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Slider overlay Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-brand-charcoal/95 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close trigger click outside image */}
            <div className="absolute inset-0" onClick={closeLightbox} />

            {/* Top Bar inside modal */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-white pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                {filteredItems[lightboxIndex].category}
              </span>
              <button 
                onClick={closeLightbox} 
                className="p-3 bg-black/45 border border-white/10 hover:border-brand-gold text-brand-cream hover:text-brand-gold pointer-events-auto transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>

            {/* Slider Controls */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 md:left-8 p-3 bg-black/45 border border-white/10 hover:border-brand-gold text-brand-cream hover:text-brand-gold transition-colors rounded-full z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 md:right-8 p-3 bg-black/45 border border-white/10 hover:border-brand-gold text-brand-cream hover:text-brand-gold transition-colors rounded-full z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Image Slider Wrapper */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-4xl w-full h-[70vh] flex flex-col items-center justify-center z-10"
            >
              <img 
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[80%] object-contain border border-white/5 shadow-2xl"
              />
              <p className="text-serif italic text-brand-cream mt-6 text-center text-base md:text-lg font-light tracking-wide">
                {filteredItems[lightboxIndex].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
