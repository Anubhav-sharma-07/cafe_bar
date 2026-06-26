import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const INSTA_POSTS = [
  { id: 1, image: '/images/sushi.png', likes: '1,420', comments: '56', caption: 'Blue butterfly pea flower rice sushi paired with ocean mojitos. 🍣🍸' },
  { id: 2, image: '/images/kabab.png', likes: '984', comments: '38', caption: 'Tender Murg Shikari Kababs fresh from our clay oven. 🔥' },
  { id: 3, image: '/images/musallam.png', likes: '1,245', comments: '44', caption: 'Rich cashew and saffron textures. Murg Musallam. 👑' },
  { id: 4, image: '/images/brunch-drink.png', likes: '2,110', comments: '98', caption: 'Mixology theatre above the city canopy. You, me & Brunch? 🥂' },
  { id: 5, image: '/images/brunch-table.png', likes: '1,860', comments: '72', caption: 'Vibrant spreads, sunny vibes, and live acoustic music. 🎵🍽' },
  { id: 6, image: '/images/brunch-table.png', likes: '2,320', comments: '112', caption: 'Aesthetic corners and conversations under starlit skylines. ✨' }
];

export default function InstagramShowcase() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            Social Journal
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal mb-6">
            Moments From Socio
          </h2>
          
          {/* Follow Button */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-cream bg-brand-charcoal hover:bg-brand-gold hover:text-brand-charcoal px-6 py-3 transition-colors duration-300 font-bold"
          >
            <InstagramIcon size={14} /> Follow @socio_pune
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {INSTA_POSTS.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: post.id * 0.05 }}
              whileHover={{ y: -4 }}
              className="relative aspect-square overflow-hidden group border border-brand-brown/5 bg-brand-beige"
            >
              {/* Image */}
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />

              {/* Hover overlay with likes and comment count */}
              <div className="absolute inset-0 bg-brand-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3 p-4 text-center">
                <InstagramIcon size={18} className="text-brand-gold mb-1" />
                
                <div className="flex items-center gap-4 text-xs font-bold text-brand-cream">
                  <span className="flex items-center gap-1.5">
                    <Heart size={14} fill="#C9A86A" className="text-brand-gold" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle size={14} fill="white" className="text-brand-cream" /> {post.comments}
                  </span>
                </div>
                
                <span className="text-[10px] text-brand-cream/60 font-light line-clamp-2 mt-2 leading-relaxed font-sans">
                  {post.caption}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
