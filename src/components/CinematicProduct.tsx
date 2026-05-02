import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react';
import { TextLayer, LayerProps } from './TextLayer';

interface CinematicProductProps {
  heightClass?: string;
  imageSrc: string;
  layers: LayerProps[];
}

export function CinematicProduct({ heightClass = "h-[400vh]", imageSrc, layers }: CinematicProductProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apple-style cinematic zoom transforms
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.6, 0.8, 1], [1, 1.15, 1.4, 1.6, 1.8, 2.1]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.6, 0.8, 1], [0, -20, -40, -60, -60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [1, 1, 0, 0]);
  
  // For blur and brightness, using independent transforms combined into a template
  const blur = useTransform(scrollYProgress, [0, 0.6, 0.7, 0.8, 1], [0, 0, 4, 10, 20]);
  const bright = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.6, 0.7, 1], [1, 1, 1.1, 1.1, 1.2, 1.15]);

  const filter = useMotionTemplate`blur(${blur}px) brightness(${bright})`;

  return (
    <div ref={containerRef} className={`relative w-full ${heightClass}`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden cinematic-overlay flex items-center justify-center bg-brand-dark contain-layout contain-paint">
        <motion.img
          src={imageSrc}
          style={{ scale, y, opacity, filter }}
          className="product-image absolute inset-[-10%] w-[120%] h-[120%] object-cover object-center"
          alt="Product showcase"
        />
        {layers.map((layer, i) => (
          <TextLayer key={i} scrollYProgress={scrollYProgress} layer={layer} />
        ))}
      </div>
    </div>
  );
}
