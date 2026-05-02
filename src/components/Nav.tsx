import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { Search, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);
  const blur = useTransform(scrollY, [0, 50], [0, 20]);
  const borderA = useTransform(scrollY, [0, 50], [0, 0.08]);

  const backgroundColor = useMotionTemplate`rgba(5,5,7,${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blur}px)`;
  const borderBottom = useMotionTemplate`1px solid rgba(255,255,255,${borderA})`;

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={isMounted ? { backgroundColor, backdropFilter, borderBottom } : {}}
      className="fixed top-0 w-full z-[100] h-12 md:h-14 flex items-center px-6 transition-colors"
    >
      <div className="flex-1">
        <span className="font-display font-bold text-xl tracking-wider text-text-primary">FORTIS</span>
      </div>

      <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-text-primary/70">
        <a href="#" className="hover:text-white transition-colors relative group">
          Products
          <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white transition-all group-hover:w-full group-hover:left-0" />
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Solutions
          <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white transition-all group-hover:w-full group-hover:left-0" />
        </a>
        <a href="#" className="hover:text-white transition-colors relative group">
          Support
          <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white transition-all group-hover:w-full group-hover:left-0" />
        </a>
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <button className="text-text-primary/80 hover:text-white transition-colors">
          <Search size={18} />
        </button>
        <button className="text-text-primary/80 hover:text-white transition-colors">
          <ShoppingBag size={18} />
        </button>
        <button className="bg-accent hover:bg-accent/90 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors ml-2 relative overflow-hidden group">
          <span className="relative z-10">Buy</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
      </div>
    </motion.nav>
  );
}
