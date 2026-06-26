import { motion } from 'framer-motion';
import { Music, Landmark, CheckSquare, Sparkles } from 'lucide-react';

export default function SundayBrunch() {
  const scrollToReservations = () => {
    const target = document.querySelector('#reservations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="brunch" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      {/* Decorative Blur */}
      <div className="glow-blob blob-gold bottom-[10%] left-[-10%] opacity-5" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block - Overlapping Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[450px] md:h-[550px] w-full flex justify-center items-center"
          >
            {/* Main Image: Brunch Buffet spreads */}
            <div className="absolute left-0 top-0 w-[82%] h-[75%] border border-brand-brown/5 overflow-hidden shadow-xl bg-brand-beige">
              <img 
                src="/images/brunch-table.png" 
                alt="Sunday Brunch Spread" 
                className="w-full h-full object-cover filter brightness-[0.97] hover:brightness-100 transition-all duration-700 hover:scale-103"
              />
            </div>

            {/* Overlapping Image: Mixologist Drink */}
            <div className="absolute right-[5%] bottom-[5%] w-[48%] h-[55%] border-8 border-brand-cream overflow-hidden shadow-2xl z-10 bg-brand-beige">
              <img 
                src="/images/brunch-drink.png" 
                alt="Sunday Cocktail Pour" 
                className="w-full h-full object-cover filter brightness-[0.98] hover:brightness-100 transition-all duration-700 hover:scale-103"
              />
            </div>

            {/* Float Ribbon */}
            <div className="absolute bottom-[38%] left-[5%] bg-brand-gold text-brand-charcoal px-6 py-3 font-serif italic text-xs z-20 shadow-md select-none font-medium">
              Sundays, 12:00 PM to 4:00 PM
            </div>
          </motion.div>

          {/* Right Block - Content & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-4 block">
              Weekend Culinary Tradition
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6 text-serif text-brand-charcoal">
              Brunch Above <br />
              <span className="italic font-serif text-brand-gold">The City Canopy</span>
            </h2>

            <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed mb-8 font-sans">
              Elevate your Sundays with Pune's premier social dining tradition. Overlooking the city from our elevated deck, our Sunday Brunch is a multisensory journey combining global food charts, fresh desserts, live visual grills, custom cocktails, and acoustic music.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              
              <div className="flex items-start gap-4">
                <div className="p-2 border border-brand-brown/10 bg-brand-cream text-brand-gold shrink-0 rounded-full">
                  <Music size={16} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1">Live Acoustic Music</h4>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Soulful acoustic bands playing soft tunes under the breezy sunshine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-brand-brown/10 bg-brand-cream text-brand-gold shrink-0 rounded-full">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1">Curated Buffet</h4>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Extensive cold cuts, fresh desserts, waffles, and live sushi counters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-brand-brown/10 bg-brand-cream text-brand-gold shrink-0 rounded-full">
                  <Landmark size={16} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1">Golden Hour Vibe</h4>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Scenic outdoor layout with pampas decor and breezy rooftop seating.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 border border-brand-brown/10 bg-brand-cream text-brand-gold shrink-0 rounded-full">
                  <CheckSquare size={16} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1">Free Flowing Cocktails</h4>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    Unlimited package add-ons including sparkling wine and botanical gin.
                  </p>
                </div>
              </div>

            </div>

            <div>
              <button 
                onClick={scrollToReservations}
                className="btn-primary"
              >
                Reserve Sunday Brunch
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
