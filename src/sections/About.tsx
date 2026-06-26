import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-0 w-80 h-80 bg-brand-brown/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block - Storytelling Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-4 block">
              The Socio Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8 text-brand-charcoal text-serif">
              A Culinary Sanctuary<br />
              <span className="italic font-serif text-brand-gold">Above the Canopy</span>
            </h2>
            
            <div className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-6 font-sans space-y-6">
              <p>
                <span className="text-5xl font-serif text-brand-gold float-left mr-3 line-height-1 mt-1 font-light">S</span>
                OCIO Kitchen & Bar is more than a restaurant. It is a thoughtfully designed social destination where exceptional cuisine, handcrafted cocktails, rooftop ambience, and meaningful conversations come together.
              </p>
              <p>
                Whether you're celebrating milestones, enjoying Sunday brunch, or unwinding after sunset, every detail is curated to create unforgettable moments.
              </p>
            </div>

            {/* Overlapping luxury quote badge */}
            <div className="border-l-2 border-brand-gold/40 pl-6 my-8 py-2 relative">
              <span className="text-serif italic text-lg md:text-xl text-brand-brown block mb-1">
                "Crafted for Conversations."
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">
                — Our Curated Signature
              </span>
            </div>
          </motion.div>

          {/* Right Block - Overlapping Asymmetric Media Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center h-[420px] md:h-[550px] w-full"
          >
            {/* Matte Gold Frame Backdrop lines */}
            <div className="absolute top-[8%] left-[8%] w-[72%] h-[75%] border border-brand-gold/25 z-0 translate-x-4 translate-y-4" />

            {/* Background Image: Murg Musallam */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="absolute left-[5%] top-[10%] w-[62%] h-[68%] shadow-xl z-10 border border-brand-brown/5 overflow-hidden bg-brand-beige"
            >
              <img 
                src="/images/musallam.png" 
                alt="Signature Gastronomy"
                className="w-full h-full object-cover filter brightness-[0.97] hover:brightness-100 transition-all duration-700"
              />
            </motion.div>

            {/* Overlay Foreground Image: Handcrafted Cocktails */}
            <motion.div 
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ duration: 0.5 }}
              className="absolute right-[5%] bottom-[5%] w-[52%] h-[58%] shadow-2xl z-20 border-8 border-brand-cream overflow-hidden bg-brand-beige"
            >
              <img 
                src="/images/brunch-drink.png" 
                alt="Signature Mixology"
                className="w-full h-full object-cover filter brightness-[0.95] hover:brightness-100 transition-all duration-700"
              />
            </motion.div>

            {/* Little floating date tag */}
            <div className="absolute right-[45%] top-[6%] bg-brand-gold text-brand-charcoal text-[9px] uppercase tracking-[0.25em] font-bold px-4 py-2.5 rotate-[-90deg] origin-right z-30 select-none shadow-sm">
              Est. 2024
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
