import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative h-[100vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(41,151,255,0.08)_0%,rgba(5,5,7,0)_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="z-10"
      >
        <span className="text-accent uppercase tracking-[0.2em] font-semibold text-xs md:text-sm mb-6 block">
          Introducing
        </span>
        <h1 className="font-display font-bold text-5xl md:text-[8rem] leading-none mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
          FORTIS Eye 360°
        </h1>
        <p className="text-text-secondary text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium">
          The most advanced security camera we've ever made.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center text-text-secondary text-xs uppercase tracking-widest font-semibold"
      >
        <span className="mb-4 text-white/50">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
