import { useState } from 'react';
import { MessageSquareCode, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Instagram = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  const handleQuickScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-charcoal pt-20 pb-10 border-t border-brand-gold/10 relative overflow-hidden">
      
      {/* Decorative backdrop lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-around">
        <div className="w-[1px] h-full bg-brand-gold" />
        <div className="w-[1px] h-full bg-brand-gold" />
        <div className="w-[1px] h-full bg-brand-gold" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Top Segment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-brand-gold/10">
          
          {/* Brand Story Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/30 flex items-center justify-center bg-brand-brown">
                <img 
                  src="/images/logo.png" 
                  alt="SOCIO Logo" 
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <span className="text-2xl font-light tracking-[0.2em] text-brand-cream text-serif">
                SOCIO
              </span>
            </div>
            <p className="text-xs md:text-sm text-brand-cream/60 font-light leading-relaxed font-sans max-w-sm">
              SOCIO Kitchen & Bar is a luxury rooftop dining destination where earth tones meet elegant tastes. We combine aesthetic botanical design with artisanal mixology.
            </p>
            {/* Social channels */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-cream/75 hover:text-brand-gold hover:border-brand-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-cream/75 hover:text-brand-gold hover:border-brand-gold transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center text-brand-cream/75 hover:text-brand-gold hover:border-brand-gold transition-all"
                aria-label="Tripadvisor"
              >
                <MessageSquareCode size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs md:text-sm font-sans font-light">
              <li>
                <a href="#about" onClick={(e) => handleQuickScroll(e, '#about')} className="text-brand-cream/65 hover:text-brand-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#experiences" onClick={(e) => handleQuickScroll(e, '#experiences')} className="text-brand-cream/65 hover:text-brand-gold transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleQuickScroll(e, '#gallery')} className="text-brand-cream/65 hover:text-brand-gold transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleQuickScroll(e, '#menu')} className="text-brand-cream/65 hover:text-brand-gold transition-colors">
                  Featured Menu
                </a>
              </li>
              <li>
                <a href="#reservations" onClick={(e) => handleQuickScroll(e, '#reservations')} className="text-brand-cream/65 hover:text-brand-gold transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Location Summary Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Rooftop Location
            </h4>
            <p className="text-xs md:text-sm text-brand-cream/65 font-sans font-light leading-relaxed">
              7th Floor, Onyx Towers,<br />
              Koregaon Park Ext, Mundhwa,<br />
              Pune, MH 411001
            </p>
            <p className="text-xs md:text-sm text-brand-gold font-sans font-semibold">
              Call: +91 98765 43210
            </p>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Newsletter
            </h4>
            <p className="text-xs md:text-sm text-brand-cream/60 font-light leading-relaxed">
              Subscribe to receive weekly brunch event updates and exclusive chef menus.
            </p>
            
            {/* Input Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-brand-gold/30 focus-within:border-brand-gold transition-all pb-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="bg-transparent outline-none text-brand-cream text-xs py-2 w-full pr-8 placeholder:text-brand-cream/30 font-sans font-light"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-0 text-brand-gold hover:text-brand-gold-hover transition-colors animate-pulse"
                  aria-label="Subscribe email"
                >
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-brand-gold font-sans font-bold"
              >
                Subscription confirmed. Thank you!
              </motion.div>
            )}
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10 text-[10px] md:text-xs text-brand-cream/40 font-light font-sans uppercase tracking-widest">
          <p>© {new Date().getFullYear()} SOCIO KITCHEN & BAR. ALL RIGHTS RESERVED.</p>
          <p className="hover:text-brand-gold transition-colors cursor-default">DESIGNED WITH LUXURY Gastronomy AESTHETICS</p>
        </div>

      </div>
    </footer>
  );
}
