import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SlideInOnScrollProps {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

const SlideInOnScroll: React.FC<SlideInOnScrollProps> = ({
  direction = 'left',
  children,
  duration = 0.8,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { x: -100, opacity: 0 };
      case 'right':
        return { x: 100, opacity: 0 };
      case 'top':
        return { y: -100, opacity: 0 };
      case 'bottom':
        return { y: 100, opacity: 0 };
      default:
        return { x: 0, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration, delay }}
     
    >
      {children}
    </motion.div>
  );
};

export default SlideInOnScroll;
