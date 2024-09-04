"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateHoverListeners = () => {
      const hoverElements = document.querySelectorAll(".cursor-read-more");
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        hoverElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    };

    const cleanupListeners = updateHoverListeners();

    // Reattach event listeners when the pathname changes
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cleanupListeners(); // Clean up hover listeners
    };
  }, [mouseX, mouseY, pathname]); // Re-run effect on pathname change

  useEffect(() => {
    setIsHovering(false); // Reset hovering state on route change
  }, [pathname]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        willChange: "transform",
      }}
      className={`fixed pointer-events-none z-50 ${
        isHovering
          ? "w-auto h-auto px-4 py-2 bg-black text-white text-sm -left-12 -top-2"
          : "rounded-full w-3 h-3 bg-white"
      } flex items-center justify-center`}
    >
      {isHovering && "Read More"}
    </motion.div>
  );
};

export default CustomCursor;
