import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
}

function AnimatedCounter({ target, suffix = "", label, sublabel }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const duration = 2000;
      const incrementTime = Math.max(Math.floor(duration / end), 20);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 40);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-6 flex flex-col items-center">
      {/* Stat Count */}
      <h3 className="text-5xl md:text-6xl font-light tracking-tight text-brand-gold text-serif mb-3">
        {count.toLocaleString()}{suffix}
      </h3>
      {/* Label */}
      <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-charcoal mb-1">
        {label}
      </span>
      {/* Sublabel */}
      <span className="text-[11px] text-brand-muted font-light tracking-wide max-w-[200px] leading-relaxed">
        {sublabel}
      </span>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      {/* Subtle backdrop glows */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-brand-gold/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Asymmetrical background grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] grid grid-cols-4 gap-8">
          <div className="border-r border-brand-brown" />
          <div className="border-r border-brand-brown" />
          <div className="border-r border-brand-brown" />
          <div className="border-r border-brand-brown" />
        </div>

        {/* Counter items row layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y divide-brand-brown/10 lg:divide-y-0 lg:divide-x divide-dashed lg:divide-brand-brown/15">
          
          <AnimatedCounter 
            target={2700} 
            suffix="+" 
            label="Instagram Community" 
            sublabel="A vibrant social circle sharing golden hour moments."
          />
          
          <AnimatedCounter 
            target={100} 
            suffix="+" 
            label="Signature Dishes" 
            sublabel="Handcrafted global courses by international chefs."
          />
          
          <AnimatedCounter 
            target={52} 
            suffix="+" 
            label="Every Weekend" 
            sublabel="Acoustic live music and unplugged sessions."
          />
          
          <AnimatedCounter 
            target={100} 
            suffix="%" 
            label="Rooftop Ambience" 
            sublabel="Breezy starlit dining deck overlooking Pune skyline."
          />

        </div>

      </div>
    </section>
  );
}
