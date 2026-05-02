import { motion, MotionValue, useTransform } from 'motion/react';
import { ReactNode } from 'react';

export interface LayerProps {
  start: number;
  end: number;
  position: 'centered' | 'bottom-left' | 'right' | 'left' | 'bottom-center';
  content: ReactNode;
}

const positionClasses = {
  'centered': 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4',
  'bottom-left': 'left-4 md:left-[8%] bottom-[12%] w-[calc(100%-2rem)] md:w-auto',
  'left': 'left-4 w-[calc(100%-2rem)] md:left-[8%] top-1/2 -translate-y-1/2 md:w-auto',
  'right': 'right-4 w-[calc(100%-2rem)] md:right-[8%] top-1/2 -translate-y-1/2 md:text-right md:w-auto',
  'bottom-center': 'left-1/2 bottom-[10%] -translate-x-1/2 text-center w-[calc(100%-2rem)] md:w-auto'
};

export function TextLayer({ 
  scrollYProgress, 
  layer 
}: { 
  scrollYProgress: MotionValue<number>; 
  layer: LayerProps 
}) {
  const { start, end, position, content } = layer;

  const maxFade = (end - start) / 2;
  const fadeInAmount = Math.min(0.04, maxFade);
  const fadeOutAmount = Math.min(0.04, maxFade);

  // Avoid floating point precision issues
  let point2 = Number((start + fadeInAmount).toFixed(4));
  let point3 = Number((end - fadeOutAmount).toFixed(4));

  if (point2 > point3) {
    point2 = point3 = Number(((start + end) / 2).toFixed(4));
  }

  const opacity = useTransform(
    scrollYProgress,
    [start, point2, point3, end],
    [0, 1, 1, 0]
  );

  const yOffset = useTransform(
    scrollYProgress,
    [start, point2, point3, end],
    [40, 0, 0, -40]
  );

  return (
    <motion.div
      style={{ opacity, y: yOffset }}
      className={`absolute z-10 max-w-2xl ${positionClasses[position]}`}
    >
      <div className="pointer-events-auto">
        {content}
      </div>
    </motion.div>
  );
}
