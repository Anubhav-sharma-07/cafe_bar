import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Scroller-based transforms
  const backgroundY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, 120]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Mouse coordinate tracker for parallax offsets
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-charcoal"
    >
      {/* Background Image Ken Burns Layer */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[115%] select-none pointer-events-none"
      >
        {/* Dark luxury gradient overlay to make light typography clearly readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-brand-cream z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="/images/brunch-table.png" 
          alt="Socio Skyline view"
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* Floating vector details with mouse-parallax physics */}
      <motion.div
        animate={{ x: mousePos.x * 1.5, y: mousePos.y * 1.5 }}
        transition={{ type: "spring", damping: 25 }}
        className="absolute top-[20%] right-[15%] w-16 h-16 pointer-events-none z-20 select-none opacity-20 hidden md:block"
      >
        {/* Golden floating leaf illustration */}
        <svg viewBox="0 0 100 100" fill="none" className="text-brand-gold w-full h-full">
          <path d="M10 90 C 40 60, 60 40, 90 10 M90 10 C 60 10, 40 30, 30 60 C 20 80, 10 90, 10 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 60 C 50 50, 70 30, 90 10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ x: -mousePos.x * 1.2, y: -mousePos.y * 1.2 }}
        transition={{ type: "spring", damping: 25 }}
        className="absolute bottom-[20%] left-[10%] w-24 h-24 pointer-events-none z-20 select-none opacity-20 hidden md:block"
      >
        {/* Floating circular gold orbits */}
        <svg viewBox="0 0 100 100" className="text-brand-gold w-full h-full animate-spin-slow">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Ambient warm particle simulation loops */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0.1, 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: 700 
            }}
            animate={{ 
              y: -100, 
              opacity: [0, 0.2, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10 + Math.random() * 8, 
              delay: Math.random() * 6,
              ease: "linear"
            }}
            className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 absolute filter blur-[0.5px]"
          />
        ))}
      </div>

      {/* Foreground Hero Card Container */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 text-center container mx-auto px-4 max-w-4xl flex flex-col items-center justify-center"
      >
        {/* Spaced Mini Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6 px-4 py-1.5 border border-brand-gold/30 bg-black/45 backdrop-blur-md text-brand-gold text-[10px] uppercase tracking-[0.3em] font-semibold"
        >
          <Sparkles size={11} className="text-brand-gold animate-pulse" />
          Pune's Ultimate Rooftop Social Destination
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-light tracking-wide text-brand-cream leading-[1.15] mb-6 text-serif"
        >
          Where Earth Tones<br />
          <span className="font-serif italic text-brand-gold">Meet Elegant Tastes</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs md:text-base font-light leading-relaxed text-brand-cream/80 max-w-2xl mb-12 tracking-wide font-sans"
        >
          Experience handcrafted cuisine, signature cocktails, rooftop sunsets, live music, and unforgettable celebrations at Pune's most aesthetic social destination.
        </motion.p>

        {/* CTA Button stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection('#reservations')}
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-cream text-brand-charcoal border-brand-cream hover:border-brand-gold hover:text-brand-charcoal hover:bg-brand-gold px-8 py-4"
          >
            <Calendar size={15} /> Reserve a Table
          </button>
          
          <button
            onClick={() => scrollToSection('#experiences')}
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 border-brand-cream/35 text-brand-cream hover:border-brand-cream hover:text-brand-cream hover:bg-brand-cream/10 px-8 py-4"
          >
            Explore Experiences <ArrowRight size={15} />
          </button>
        </motion.div>
      </motion.div>

      {/* Down indicator line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-brand-cream/40">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}
