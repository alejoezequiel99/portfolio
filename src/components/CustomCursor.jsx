import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with pointer/mouse
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Watch for hovering interactive elements
    const handleElementHover = () => {
      const interactiveEls = document.querySelectorAll('button, a, input, textarea, .glass-card, .rotating-glow-card, [role="button"]');
      
      const onEnter = () => setIsHovered(true);
      const onLeave = () => setIsHovered(false);

      interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });

      return () => {
        interactiveEls.forEach(el => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    const cleanup = handleElementHover();
    const interval = setInterval(handleElementHover, 2000);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
      {/* Central Sharp Dot - Violet Glow */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_14px_#a855f7]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1,
        }}
      />

      {/* Trailing Fluid Glowing Halo - Cyan Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#49A4BB] bg-[#49A4BB]/15 backdrop-blur-[1px] shadow-[0_0_22px_rgba(73,164,187,0.45)]"
        animate={{
          x: mousePosition.x - (isHovered ? 26 : 17),
          y: mousePosition.y - (isHovered ? 26 : 17),
          width: isHovered ? 52 : 34,
          height: isHovered ? 52 : 34,
          borderColor: isHovered ? '#49A4BB' : 'rgba(73, 164, 187, 0.7)',
          backgroundColor: isHovered ? 'rgba(73, 164, 187, 0.25)' : 'rgba(73, 164, 187, 0.12)',
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
        }}
      />
    </div>
  );
}
