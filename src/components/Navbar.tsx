import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, GlassWater, Utensils, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experiences', href: '#experiences', hasMega: true },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Menu', href: '#menu' },
  { name: 'Brunch', href: '#brunch' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setShowMega(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-brand-cream/90 backdrop-blur-xl border-b border-brand-brown/10 shadow-sm' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          
          {/* Logo Mark */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/30 group-hover:border-brand-gold transition-all duration-500 flex items-center justify-center bg-brand-brown">
              <img 
                src="/images/logo.png" 
                alt="SOCIO Logo" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <span className="text-xl font-light tracking-[0.25em] text-brand-charcoal text-serif group-hover:text-brand-gold transition-colors duration-500">
              SOCIO
            </span>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative py-2"
                onMouseEnter={() => link.hasMega && setShowMega(true)}
                onMouseLeave={() => link.hasMega && setShowMega(false)}
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-charcoal/80 hover:text-brand-gold transition-colors duration-300 flex items-center gap-1 group py-1"
                >
                  {link.name}
                  {link.hasMega && (
                    <ChevronDown size={10} className={`transition-transform duration-300 ${showMega ? 'rotate-180 text-brand-gold' : ''}`} />
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Reserve Table CTA */}
          <div className="hidden lg:block">
            <a
              href="#reservations"
              onClick={(e) => scrollToSection(e, '#reservations')}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal hover:text-brand-cream border border-brand-charcoal/20 hover:border-brand-charcoal px-6 py-3 transition-all duration-300 rounded-none bg-transparent hover:bg-brand-charcoal"
            >
              Reserve Table <ArrowRight size={12} />
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors lg:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega Menu Overlay Dropdown */}
        <AnimatePresence>
          {showMega && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
              className="absolute left-0 right-0 top-full bg-brand-cream/95 backdrop-blur-2xl border-b border-brand-brown/10 shadow-lg hidden lg:block z-40"
            >
              <div className="container mx-auto max-w-6xl px-4 py-12 grid grid-cols-12 gap-8">
                
                {/* Column 1 - Signature Offerings */}
                <div className="col-span-4 space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold mb-2">
                    Signature Experiences
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#experiences" onClick={(e) => scrollToSection(e, '#experiences')} className="flex items-center gap-2.5 text-xs text-brand-charcoal hover:text-brand-gold transition-colors font-medium">
                        <GlassWater size={14} className="text-brand-brown/60" /> Custom Mixology & Cocktails
                      </a>
                    </li>
                    <li>
                      <a href="#brunch" onClick={(e) => scrollToSection(e, '#brunch')} className="flex items-center gap-2.5 text-xs text-brand-charcoal hover:text-brand-gold transition-colors font-medium">
                        <Utensils size={14} className="text-brand-brown/60" /> Sunday Rooftop Brunches
                      </a>
                    </li>
                    <li>
                      <a href="#events" onClick={(e) => scrollToSection(e, '#events')} className="flex items-center gap-2.5 text-xs text-brand-charcoal hover:text-brand-gold transition-colors font-medium">
                        <Music size={14} className="text-brand-brown/60" /> Live Acoustic Nights & Bands
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 2 - Social Events */}
                <div className="col-span-4 space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold mb-2">
                    Weekly Calendar
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#events" onClick={(e) => scrollToSection(e, '#events')} className="flex items-center gap-2.5 text-xs text-brand-charcoal hover:text-brand-gold transition-colors font-medium">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> Wednesday Ladies Night
                      </a>
                    </li>
                    <li>
                      <a href="#events" onClick={(e) => scrollToSection(e, '#events')} className="flex items-center gap-2.5 text-xs text-brand-charcoal hover:text-brand-gold transition-colors font-medium">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> Sunday Live Unplugged
                      </a>
                    </li>
                    <li>
                      <a href="#reservations" onClick={(e) => scrollToSection(e, '#reservations')} className="flex items-center gap-2.5 text-xs text-brand-charcoal hover:text-brand-gold transition-colors font-medium">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" /> VIP Private Party Booking
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3 - Feature Promotion card */}
                <div className="col-span-4 bg-brand-beige/50 border border-brand-brown/5 p-5 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold block mb-1">Featured Event</span>
                    <h5 className="text-serif text-brand-charcoal text-base font-light mb-2">Brunch Above The City</h5>
                    <p className="text-[11px] text-brand-muted font-light leading-relaxed mb-4 font-sans">
                      Join Pune's ultimate aesthetic gathering under natural sunlight. Live sushi counters & bubbly options.
                    </p>
                  </div>
                  <a 
                    href="#brunch" 
                    onClick={(e) => scrollToSection(e, '#brunch')} 
                    className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold text-brand-gold hover:text-brand-brown transition-colors"
                  >
                    View Brunch Plan <ArrowRight size={10} />
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-45 bg-brand-cream flex flex-col justify-center items-center overflow-y-auto px-6 py-20"
          >
            <div className="absolute inset-0 noise-overlay opacity-[0.015]" />

            <nav className="flex flex-col items-center gap-5 mb-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 + 0.15 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl uppercase tracking-[0.2em] font-serif text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.04 + 0.15 }}
            >
              <a
                href="#reservations"
                onClick={(e) => scrollToSection(e, '#reservations')}
                className="btn-primary tracking-[0.2em] text-xs"
              >
                Reserve Table
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
