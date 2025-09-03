import { Box } from '@mui/material';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface SlideInSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  threshold?: number;
  stagger?: number; // Delay between child animations
  distance?: number; // How far it slides from
  duration?: number; // Animation duration
}

const SlideInSection: React.FC<SlideInSectionProps> = ({
  children,
  direction = 'up',
  threshold = 0.2,
  stagger = 0.15,
  distance = 200,
  duration = 2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animate when entering
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Reset when out of viewport
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return `translateX(-${distance}px)`;
      case 'right':
        return `translateX(${distance}px)`;
      case 'down':
        return `translateY(${distance}px)`;
      default:
        return `translateY(-${distance}px)`;
    }
  };

  const childArray = React.Children.toArray(children);

  return (
    <Box ref={sectionRef} sx={{ width: 1, overflowX: 'hidden' }}>
      {childArray.map((child, index) => (
        <Box
          key={index}
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate(0, 0)' : getTransform(),
            transition: `all ${duration}s ease-out ${index * stagger}s`,
            willChange: 'transform, opacity',
            width: 1,
          }}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default SlideInSection;
