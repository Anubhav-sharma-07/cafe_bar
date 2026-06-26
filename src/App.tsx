import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experiences from './sections/Experiences';
import WhyChooseUs from './sections/WhyChooseUs';
import Gallery from './sections/Gallery';
import Menu from './sections/Menu';
import SundayBrunch from './sections/SundayBrunch';
import Events from './sections/Events';
import Testimonials from './sections/Testimonials';
import Reservation from './sections/Reservation';
import InstagramShowcase from './sections/Instagram';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroller
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-cream text-brand-charcoal min-h-screen relative font-sans select-none md:select-text">
      {/* Initial luxury loader overlay */}
      <Loader />

      {/* Dual-ring spring cursor */}
      <CustomCursor />

      {/* Top scroll progress indicator line */}
      <ScrollProgress />

      {/* SVG-based ambient noise overlay */}
      <div className="noise-overlay" />

      {/* Mega menu float header */}
      <Navbar />

      {/* Main stacks */}
      <main>
        {/* Hero Banner */}
        <Hero />

        {/* Story Section */}
        <About />

        {/* Core Experiences */}
        <Experiences />

        {/* Statistics Counters */}
        <WhyChooseUs />

        {/* Photo Gallery Masonry */}
        <Gallery />

        {/* Premium Menu Book */}
        <Menu />

        {/* Storytelling Sunday Brunch */}
        <SundayBrunch />

        {/* Events Timeline */}
        <Events />

        {/* Guest Reviews Carousel */}
        <Testimonials />

        {/* Booking Form Layout */}
        <Reservation />

        {/* Instagram Grid Feed */}
        <InstagramShowcase />

        {/* Local Address & Maps */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
