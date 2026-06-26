import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    rating: 5,
    feedback: 'The ambiance is spectacular! Having signature cocktails on a rooftop in Pune with such a gorgeous skyline view was a dream. The Asparagus Tempura Blue Rice Sushi is a must-try!',
    designation: 'Pune Lifestyle Blogger'
  },
  {
    id: 2,
    name: 'Raghav Malhotra',
    rating: 5,
    feedback: 'SOCIO is our absolute favorite for Sunday brunches. The live cooking stations are incredible, and the atmosphere feels so premium and welcoming. Instantly convinces you of luxury hospitality.',
    designation: 'Connoisseur Club Member'
  },
  {
    id: 3,
    name: 'Michelle Fernandes',
    rating: 5,
    feedback: 'The attention to detail in every aspect of the design and food is outstanding. We celebrated our anniversary here, and the hospitality was world-class. The Murg Musallam is outstanding.',
    designation: 'VIP Guest'
  },
  {
    id: 4,
    name: 'Tanya Sen',
    rating: 5,
    feedback: 'The Ladies Night on Wednesday has the best crowd and music beats in Pune. Handcrafted cocktails are top-tier and the dry-ice cocktail presentation is pure visual theater.',
    designation: 'Regular Patron'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      
      {/* Background Shapes */}
      <div className="absolute left-[10%] top-[20%] w-[300px] h-[300px] bg-brand-brown/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            Guest Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal">
            Customer Reviews
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          
          <div className="glass-panel-light p-8 md:p-16 relative flex flex-col items-center text-center overflow-hidden min-h-[350px] shadow-sm">
            {/* Quote Icon watermark */}
            <Quote size={80} className="absolute text-brand-gold/5 top-6 left-6 select-none pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center flex-1"
              >
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#C9A86A" className="text-brand-gold" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-base md:text-xl font-light leading-relaxed text-brand-charcoal italic mb-8 max-w-2xl text-serif">
                  "{REVIEWS[activeIndex].feedback}"
                </p>

                {/* Separator line */}
                <div className="w-8 h-[1px] bg-brand-gold/40 mb-4" />

                {/* Reviewer Details */}
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-1">
                  {REVIEWS[activeIndex].name}
                </h4>
                <span className="text-[10px] uppercase tracking-wider text-brand-muted font-bold font-sans">
                  {REVIEWS[activeIndex].designation}
                </span>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers */}
          <button
            onClick={() => handleNavigate('prev')}
            className="absolute left-[-20px] md:left-[-10px] top-1/2 transform -translate-y-1/2 p-3 border border-brand-brown/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold hover:bg-brand-cream transition-all bg-brand-cream rounded-full z-10 shadow-xs"
            aria-label="Previous Review"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => handleNavigate('next')}
            className="absolute right-[-20px] md:right-[-10px] top-1/2 transform -translate-y-1/2 p-3 border border-brand-brown/10 hover:border-brand-gold text-brand-charcoal hover:text-brand-gold hover:bg-brand-cream transition-all bg-brand-cream rounded-full z-10 shadow-xs"
            aria-label="Next Review"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeIndex === i ? 'w-8 bg-brand-gold' : 'w-1.5 bg-brand-brown/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
