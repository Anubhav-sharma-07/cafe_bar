import { motion } from 'framer-motion';
import { Sparkles, Clock, Star } from 'lucide-react';

const EVENTS = [
  {
    day: 'Wednesday',
    frequency: 'Weekly',
    title: 'Ladies Night — Glamour & Glitz',
    description: 'A premium mid-week escape dedicated to the ladies. Enjoy complimentary artisanal mocktails/mixers, custom botanical cocktails, and a high-energy house set by our resident DJ.',
    time: '8:00 PM onwards',
    icon: <Star size={16} className="text-brand-gold" />
  },
  {
    day: 'Sunday',
    frequency: 'Weekly',
    title: 'Live Music Sundays',
    description: 'Wind down your week with soulful, acoustic sets by Pune’s top indie artists, fusion singer-songwriters, and smooth jazz performers under the twilight sky.',
    time: '12:30 PM — 4:30 PM',
    icon: <Star size={16} className="text-brand-gold" />
  },
  {
    day: 'Saturday',
    frequency: 'Weekly',
    title: 'DJ Evenings & Night Beats',
    description: 'Immersive themed nights featuring guest DJ line-ups, electronic acts, and international mixologists executing pop-up takeovers at our rooftop deck.',
    time: '9:00 PM onwards',
    icon: <Sparkles size={16} className="text-brand-gold" />
  },
  {
    day: 'Corporate / Birthday',
    frequency: 'Flexible Booking',
    title: 'Private Celebrations & Gatherings',
    description: 'From corporate mixers to intimate family gatherings or birthdays, we offer bespoke rooftop sections, custom culinary layouts, and designated butler services.',
    time: 'Tailored Hours',
    icon: <Sparkles size={16} className="text-brand-gold" />
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-gold/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            Weekly Calendar
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal">
            Events & Timeline
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central gold line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-gold/45 via-brand-gold/15 to-transparent transform md:-translate-x-1/2" />

          {EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={event.title} 
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 last:mb-0"
              >
                {/* Node Dot on Timeline */}
                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 bg-brand-cream border border-brand-gold rounded-full transform -translate-x-1.5 md:-translate-x-1.5 z-20 shadow-xs" />

                {/* Left/Right layout wrapper */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel-light p-6 md:p-8 relative hover:border-brand-gold/45 transition-all duration-300 shadow-xs"
                  >
                    {/* Badge */}
                    <div className={`flex items-center gap-2 mb-4 justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold border border-brand-gold/30 px-2.5 py-0.5 rounded-none bg-brand-cream shadow-xs">
                        {event.day}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-brand-muted">
                        ({event.frequency})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-light text-serif text-brand-charcoal mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed mb-4 font-sans">
                      {event.description}
                    </p>

                    {/* Timing details */}
                    <div className={`flex items-center gap-4 text-[10px] text-brand-gold font-semibold justify-start ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {event.time}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Empty block for layout grid spacing on other side */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-2' : 'md:order-1'}`} />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
