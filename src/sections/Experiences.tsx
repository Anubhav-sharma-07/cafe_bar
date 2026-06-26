import { motion } from 'framer-motion';
import { GlassWater, Utensils, Music, Users, Landmark, PartyPopper } from 'lucide-react';

const EXPERIENCES = [
  {
    icon: <GlassWater className="text-brand-gold" size={26} />,
    title: 'Signature Cocktails',
    description: 'Handcrafted mixology featuring house infusions, theatrical smoke, and curated visual styling.',
    tag: 'Mixology'
  },
  {
    icon: <Utensils className="text-brand-gold" size={26} />,
    title: 'Sunday Brunch',
    description: "Pune's ultimate rooftop brunch with extensive live food stations, global cuisines, and bubbly.",
    tag: 'Brunch'
  },
  {
    icon: <Music className="text-brand-gold" size={26} />,
    title: 'Live Music',
    description: 'Soulful acoustic evenings, live local jazz ensembles, and eclectic indie artists under the stars.',
    tag: 'Events'
  },
  {
    icon: <Users className="text-brand-gold" size={26} />,
    title: 'Ladies Night',
    description: 'Mid-week high-energy gatherings with tailored perks, resident DJ beats, and custom mocktails.',
    tag: 'Nights'
  },
  {
    icon: <Landmark className="text-brand-gold" size={26} />,
    title: 'Rooftop Dining',
    description: 'Breathtaking starlit views of Pune skylines paired with lush greenery and intimate seating.',
    tag: 'Ambiance'
  },
  {
    icon: <PartyPopper className="text-brand-gold" size={26} />,
    title: 'Private Celebrations',
    description: 'Tailored event curation, custom set-menus, and premium hospitality for your milestone occasions.',
    tag: 'VIP'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any }
};

export default function Experiences() {
  return (
    <section id="experiences" className="py-20 md:py-32 bg-brand-beige/35 relative overflow-hidden border-t border-brand-brown/5">
      {/* Background Glow */}
      <div className="absolute left-[-10%] bottom-[10%] w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            Crafted Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal">
            Signature Experiences
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6 mb-4" />
          <p className="text-[10px] md:text-xs text-brand-muted font-semibold tracking-wider uppercase">
            Curating memories from sunset to starlight
          </p>
        </div>

        {/* Experience Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-panel-light p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[290px] shadow-xs"
            >
              {/* Corner accent border line */}
              <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-brand-gold to-transparent group-hover:w-24 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent group-hover:h-24 transition-all duration-500" />

              <div>
                {/* Top line with Icon and Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-brand-cream border border-brand-brown/5 rounded-full group-hover:border-brand-gold/30 transition-colors duration-500">
                    {exp.icon}
                  </div>
                  <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-brand-gold/80 group-hover:text-brand-gold transition-colors duration-500">
                    {exp.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-2xl font-light tracking-wide text-serif mb-4 text-brand-charcoal">
                  {exp.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>
              </div>

              {/* Read More button link */}
              <div className="flex items-center gap-1.5 mt-auto">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-500">
                  Discover Details
                </span>
                <div className="w-0 h-[1px] bg-brand-gold group-hover:w-8 transition-all duration-500 ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
