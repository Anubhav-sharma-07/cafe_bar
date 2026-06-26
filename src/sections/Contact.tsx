import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Compass } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      
      {/* Decorative Blob */}
      <div className="glow-blob blob-gold bottom-[5%] right-[-10%] opacity-5" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            Plan Your Visit
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal">
            Contact & Location
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Block - Contact & Logistics Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-beige/50 border border-brand-brown/10 text-brand-gold shrink-0 rounded-full">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1.5">Our Address</h4>
                  <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed font-sans max-w-xs">
                    7th Floor, Onyx Towers, Koregaon Park Ext, Mundhwa, Pune, MH 411001
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-beige/50 border border-brand-brown/10 text-brand-gold shrink-0 rounded-full">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1.5">Opening Hours</h4>
                  <div className="text-xs md:text-sm text-brand-muted font-semibold space-y-1 font-sans">
                    <p><span className="text-brand-gold font-medium">Mon — Thu:</span> 12:00 PM — 12:30 AM</p>
                    <p><span className="text-brand-gold font-medium">Fri — Sat:</span> 12:00 PM — 1:30 AM</p>
                    <p><span className="text-brand-gold font-medium">Sunday:</span> 12:00 PM — 12:30 AM</p>
                  </div>
                </div>
              </div>

              {/* Parking details */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-beige/50 border border-brand-brown/10 text-brand-gold shrink-0 rounded-full">
                  <Car size={18} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1.5">Parking Logistics</h4>
                  <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed font-sans max-w-xs">
                    Complimentary valet parking is available directly at the ground lobby reception of Onyx Towers.
                  </p>
                </div>
              </div>

              {/* Directions details */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-beige/50 border border-brand-brown/10 text-brand-gold shrink-0 rounded-full">
                  <Compass size={18} />
                </div>
                <div>
                  <h4 className="text-serif font-light text-brand-charcoal text-base mb-1.5">Directions</h4>
                  <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed font-sans max-w-xs">
                    Located near the Mundhwa bridge intersection, easily accessible via the main road of Koregaon Park Annex.
                  </p>
                </div>
              </div>

              {/* Direct Lines & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-brown/5">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2">Direct Calls</h4>
                  <p className="text-xs text-brand-charcoal font-semibold space-y-1 font-sans">
                    <a href="tel:+919876543210" className="hover:text-brand-gold block">+91 98765 43210</a>
                    <a href="tel:+912054321098" className="hover:text-brand-gold block">+91 20 5432 1098</a>
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-2">Email Desk</h4>
                  <p className="text-xs text-brand-charcoal font-semibold space-y-1 font-sans">
                    <a href="mailto:reservations@sociopune.com" className="hover:text-brand-gold block">reservations@sociopune.com</a>
                    <a href="mailto:events@sociopune.com" className="hover:text-brand-gold block">events@sociopune.com</a>
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Block - Maps Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-[350px] md:h-[450px] w-full"
          >
            {/* Dark styled map block */}
            <div className="w-full h-full border border-brand-brown/10 shadow-2xl relative overflow-hidden bg-brand-beige">
              <iframe
                title="Google Map Location for SOCIO Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9961605389656!2d73.90562917597818!3d18.528994768916368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1eb757f00ff%3A0x6b40e3f05b1b4ffb!2sKoregaon%20Park%20Annexe%20Mundhwa!5e0!3m2!1sen!2sin!4v1703664000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: 'invert(10%) hue-rotate(180deg) grayscale(85%) contrast(95%) brightness(95%)',
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
