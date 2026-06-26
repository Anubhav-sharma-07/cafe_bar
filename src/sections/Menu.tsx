import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Leaf, Flame, Sparkles } from 'lucide-react';

const MENU_CATEGORIES = ['Starters', 'Small Plates', 'Main Course', 'Desserts', 'Mocktails', 'Signature Cocktails'];

const MENU_DATA = {
  'Starters': [
    {
      name: 'Murg Shikari Kabab',
      price: '₹575',
      description: 'Tender chicken breast pieces marinated in signature wild forest berries and grilled in a clay oven. Served with spiced beetroot dip.',
      tag: 'Chef Special',
      icon: <Award size={14} className="text-brand-gold" />,
      image: '/images/kabab.png'
    },
    {
      name: 'Asparagus Tempura Blue Rice Sushi',
      price: '₹625',
      description: 'Crisp asparagus tempura wrapped in blue butterfly pea flower rice, served with pickled ginger and a visual gold wasabi emulsion.',
      tag: 'House Special',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/sushi.png'
    },
    {
      name: 'Truffle Edamame Dumplings',
      price: '₹525',
      description: 'Delicate steamed pockets stuffed with mashed edamame and water chestnuts, drizzled with authentic white truffle oil.',
      tag: 'Vegetarian',
      icon: <Leaf size={14} className="text-emerald-600" />,
      image: '/images/brunch-table.png'
    }
  ],
  'Small Plates': [
    {
      name: 'Truffle Cream Mushroom Crostini',
      price: '₹445',
      description: 'Toasted organic sourdough bread slices topped with rich creamed forest mushrooms and real black truffle shavings.',
      tag: 'House Signature',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/brunch-table.png'
    },
    {
      name: 'Beetroot Carpaccio & Greek Feta',
      price: '₹395',
      description: 'Thinly sliced roasted beets drizzled with fresh honey-lime reduction, estate mint, and crumbled premium feta cheese.',
      tag: 'Refreshing',
      icon: <Leaf size={14} className="text-emerald-600" />,
      image: '/images/sushi.png'
    },
    {
      name: 'Woodfire Peri-Peri Paneer Skewers',
      price: '₹465',
      description: 'Cottage cheese chunks rubbed in a spicy African bird’s eye chili blend, flame-grilled and served with herb curd sauce.',
      tag: 'Spicy Selection',
      icon: <Flame size={14} className="text-orange-500" />,
      image: '/images/kabab.png'
    }
  ],
  'Main Course': [
    {
      name: 'Murg Musallam Signature Course',
      price: '₹795',
      description: 'Slow-cooked spiced chicken breast stuffed with egg and minced mutton, served in a rich saffron-cashew nut gravy with gold leaf basmati rice.',
      tag: 'Chef Special',
      icon: <Award size={14} className="text-brand-gold" />,
      image: '/images/musallam.png'
    },
    {
      name: '8-Hour Braised Saffron Lamb Shank',
      price: '₹945',
      description: 'Aged lamb shank slow-braised in Kashmiri spices and saffron, served on a bed of warm pistachio and potato mash.',
      tag: 'Premium Selection',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/kabab.png'
    },
    {
      name: 'Wild Forest Mushroom Risotto',
      price: '₹695',
      description: 'Arborio rice cooked in wild porcini mushroom broth, finished with aged Parmigiano Reggiano shavings and fresh microgreens.',
      tag: 'Vegetarian',
      icon: <Leaf size={14} className="text-emerald-600" />,
      image: '/images/sushi.png'
    }
  ],
  'Desserts': [
    {
      name: '24K Gold Leaf Saffron Pannacotta',
      price: '₹445',
      description: 'Velvety cream pudding infused with premium Kashmiri saffron, dressed with real organic gold leaf and crushed roasted almonds.',
      tag: 'Chef Special',
      icon: <Award size={14} className="text-brand-gold" />,
      image: '/images/brunch-table.png'
    },
    {
      name: 'Smoked Chocolate Mousse Dome',
      price: '₹495',
      description: 'Rich Belgian dark chocolate dome with a liquid caramel core, smoked table-side with oak-wood chips under a glass cloche.',
      tag: 'Showstopper',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/brunch-drink.png'
    },
    {
      name: 'Crystallized Rose & Pistachio Tart',
      price: '₹425',
      description: 'Crisp pastry shell layered with sweet pistachio ganache, topped with organic rose water gel and candy-crystallized rose petals.',
      tag: 'Signature Dessert',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/sushi.png'
    }
  ],
  'Mocktails': [
    {
      name: 'Butterfly Pea Flower Elixir',
      price: '₹345',
      description: 'Butterfly pea flower tea muddled with lavender cordial and fresh lime juice, shifting colors dynamically before your eyes.',
      tag: 'Visual Tonic',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/brunch-drink.png'
    },
    {
      name: 'Cucumber Crisp & Basil Cooler',
      price: '₹325',
      description: 'Cold-pressed cucumber juice shaken with fresh estate basil leaves, lemon syrup, and top-up carbonated spring water.',
      tag: 'Refreshing',
      icon: <Leaf size={14} className="text-emerald-600" />,
      image: '/images/sushi.png'
    },
    {
      name: 'Alphonso Mango & Ginger Spritz',
      price: '₹325',
      description: 'Pure Alphonso mango pulp blended with organic ginger juice and fresh mint, carbonated with chilled club soda.',
      tag: 'Tropical',
      icon: <Flame size={14} className="text-brand-gold" />,
      image: '/images/brunch-table.png'
    }
  ],
  'Signature Cocktails': [
    {
      name: 'Socio Sunset Sour',
      price: '₹625',
      description: 'Premium bourbon whiskey infused with beetroot cordial extract, fresh citrus juice, egg white foam, and dried orange wheel.',
      tag: 'Mixology Star',
      icon: <Award size={14} className="text-brand-gold" />,
      image: '/images/brunch-drink.png'
    },
    {
      name: 'Blue Butterfly pea Tonic',
      price: '₹675',
      description: 'Butterfly pea flower infused dry Gin, premium elderflower tonic water, splash of key lime, sprayed with edible gold dust.',
      tag: 'Signature Mixer',
      icon: <Sparkles size={14} className="text-brand-gold" />,
      image: '/images/sushi.png'
    },
    {
      name: 'Smoked Lavender Old Fashioned',
      price: '₹695',
      description: 'Peated single malt scotch, home-brewed organic lavender reduction, orange peel oils, smoked with dried lavender buds.',
      tag: 'Spirit Forward',
      icon: <Flame size={14} className="text-orange-500" />,
      image: '/images/musallam.png'
    }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof MENU_DATA>('Starters');

  return (
    <section id="menu" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden border-t border-brand-brown/5">
      {/* Decorative backdrop shapes */}
      <div className="absolute left-[5%] top-[10%] w-[300px] h-[300px] bg-brand-brown/3 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] w-[350px] h-[350px] bg-brand-gold/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 block">
            The Gastronomy Book
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-serif text-brand-charcoal">
            Featured Menu
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 border-b border-brand-brown/10 pb-6 max-w-5xl mx-auto">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as keyof typeof MENU_DATA)}
              className={`px-3 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 relative ${
                activeCategory === cat
                  ? 'text-brand-gold'
                  : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeMenuTab"
                  className="absolute bottom-[-25px] left-0 right-0 h-[2px] bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            >
              {MENU_DATA[activeCategory].map((dish, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  key={dish.name}
                  className="flex flex-col sm:flex-row gap-6 p-6 border border-brand-brown/5 bg-brand-beige/20 backdrop-blur-sm group hover:border-brand-gold/30 hover:bg-brand-cream/80 transition-all duration-355 shadow-xs"
                >
                  {/* Dish Small Preview */}
                  <div className="w-full sm:w-28 h-28 shrink-0 overflow-hidden relative border border-brand-brown/5">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Dish Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Pricing */}
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg md:text-xl font-light text-serif text-brand-charcoal group-hover:text-brand-gold transition-colors duration-300">
                          {dish.name}
                        </h3>
                        <span className="text-brand-gold font-medium tracking-wide text-serif text-lg">
                          {dish.price}
                        </span>
                      </div>

                      {/* Ingredients / Description */}
                      <p className="text-xs md:text-sm text-brand-muted font-light leading-relaxed mb-4">
                        {dish.description}
                      </p>
                    </div>

                    {/* Badge */}
                    <div className="flex items-center gap-1.5 mt-auto">
                      <div className="p-1 bg-brand-gold/10 rounded-full">
                        {dish.icon}
                      </div>
                      <span className="text-[9px] tracking-wider uppercase font-bold text-brand-gold/80">
                        {dish.tag}
                      </span>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
