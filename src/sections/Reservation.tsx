import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, Calendar, Clock, Users, CheckCircle2, Loader2, Award, Clipboard } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'Casual Dining',
    requests: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
      setValidationError('Please complete all field requirements to confirm booking.');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      occasion: 'Casual Dining',
      requests: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="reservations" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      
      {/* Decorative blobs */}
      <div className="glow-blob blob-gold top-[10%] right-[5%] opacity-5" />
      <div className="glow-blob blob-brown bottom-[10%] left-[5%] opacity-5" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block - Informational Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-4 block">
              Direct Bookings
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6 text-serif text-brand-charcoal">
              Reserve Your <br />
              <span className="italic font-serif text-brand-gold">Rooftop Table</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-8" />
            
            <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed mb-6 font-sans">
              Due to our limited high-tier rooftop seating capacity, we advise reserving your tables in advance, especially for weekend Sunday brunches and sunset dinner decks.
            </p>

            <ul className="space-y-4 text-xs text-brand-muted font-semibold font-sans">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                15-Minute Grace Period on reservations.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                Smart-casual dress codes apply in the evening.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                Valet parking available at our ground reception lobby.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                Contact us directly for bookings exceeding 12 guests.
              </li>
            </ul>
          </motion.div>

          {/* Right Block - Booking Form Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-panel-light p-8 md:p-10 relative overflow-hidden min-h-[480px] flex flex-col justify-center shadow-xs">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-xl md:text-2xl font-light text-serif text-brand-charcoal mb-2">
                      Online Booking Details
                    </h3>
                    
                    {validationError && (
                      <p className="text-red-500 text-xs font-semibold tracking-wide">
                        {validationError}
                      </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 rounded-none"
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 rounded-none"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 rounded-none"
                        />
                      </div>

                      {/* Guests */}
                      <div className="relative">
                        <Users size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold pointer-events-none" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 appearance-none cursor-pointer rounded-none"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7+">7+ Guests (Requires review)</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div className="relative">
                        <Calendar size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold pointer-events-none" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 cursor-pointer rounded-none"
                        />
                      </div>

                      {/* Time */}
                      <div className="relative">
                        <Clock size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold pointer-events-none" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 appearance-none cursor-pointer rounded-none"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="12:00 PM">12:00 PM (Brunch)</option>
                          <option value="1:30 PM">1:30 PM (Brunch)</option>
                          <option value="3:00 PM">3:00 PM (Brunch)</option>
                          <option value="6:00 PM">6:00 PM (Sunset Deck)</option>
                          <option value="7:30 PM">7:30 PM (Dinner)</option>
                          <option value="9:00 PM">9:00 PM (Dinner)</option>
                          <option value="10:30 PM">10:30 PM (Late Dining)</option>
                        </select>
                      </div>

                      {/* Occasion */}
                      <div className="relative md:col-span-2">
                        <Award size={15} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-brand-gold pointer-events-none" />
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 appearance-none cursor-pointer rounded-none"
                        >
                          <option value="Casual Dining">Casual Dining</option>
                          <option value="Birthday Celebration">Birthday Celebration</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Date Night">Date Night</option>
                          <option value="Business Meeting">Business Meeting</option>
                          <option value="Other">Other Occasion</option>
                        </select>
                      </div>

                      {/* Special Requests */}
                      <div className="relative md:col-span-2">
                        <Clipboard size={15} className="absolute left-3.5 top-4 text-brand-gold pointer-events-none" />
                        <textarea
                          name="requests"
                          value={formData.requests}
                          onChange={handleChange}
                          placeholder="Special Requests (Seating preference, dietary needs, surprise setup...)"
                          rows={3}
                          className="w-full bg-brand-cream/50 border border-brand-brown/10 focus:border-brand-gold text-brand-charcoal text-xs py-3.5 pl-11 pr-4 outline-none transition-all duration-300 rounded-none resize-none font-sans"
                        />
                      </div>

                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full flex items-center justify-center gap-3 py-4"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 size={15} className="animate-spin text-brand-cream" /> Checking Seats...
                          </>
                        ) : (
                          'Confirm Table Request'
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-center py-6 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
                      className="p-4 bg-brand-gold/10 border border-brand-gold rounded-full text-brand-gold mb-6 shadow-xs"
                    >
                      <CheckCircle2 size={46} />
                    </motion.div>
                    
                    <h3 className="text-2xl md:text-3xl font-light text-serif text-brand-charcoal mb-3">
                      Reservation Requested!
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed max-w-sm mb-8 font-sans">
                      Thank you, <span className="font-semibold text-brand-charcoal">{formData.name}</span>. A booking confirmation SMS and email summary has been sent.
                    </p>

                    {/* Booking summary slip */}
                    <div className="w-full max-w-sm bg-brand-cream/50 border border-brand-gold/10 p-5 mb-8 text-left space-y-2.5 text-xs font-sans font-light shadow-xs">
                      <div className="flex justify-between border-b border-brand-brown/5 pb-2">
                        <span className="text-brand-muted font-medium">Guests</span>
                        <span className="text-brand-charcoal font-semibold">{formData.guests} Persons</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-brown/5 pb-2">
                        <span className="text-brand-muted font-medium">Date & Time</span>
                        <span className="text-brand-charcoal font-semibold">{formData.date} at {formData.time}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-brown/5 pb-2">
                        <span className="text-brand-muted font-medium">Occasion</span>
                        <span className="text-brand-charcoal font-semibold">{formData.occasion}</span>
                      </div>
                      {formData.requests && (
                        <div className="flex flex-col pt-1">
                          <span className="text-brand-muted font-medium mb-1">Notes</span>
                          <span className="text-brand-charcoal font-light leading-relaxed italic">"{formData.requests}"</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={resetForm}
                      className="btn-secondary px-6 py-2.5 text-xs font-semibold"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
