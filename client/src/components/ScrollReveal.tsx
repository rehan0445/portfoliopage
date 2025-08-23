import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  className 
}: ScrollRevealProps) {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
