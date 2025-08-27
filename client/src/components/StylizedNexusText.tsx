import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StylizedNexusTextProps {
  size?: "small" | "medium" | "large";
  className?: string;
  animate?: boolean;
}

export default function StylizedNexusText({ 
  size = "medium", 
  className,
  animate = false 
}: StylizedNexusTextProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-6xl"
  };

  const textStyle = {
    fontFamily: "'Cinzel', 'Times New Roman', serif",
    background: "linear-gradient(135deg, #d4af37 0%, #f4e4bc 25%, #d4af37 50%, #b8860b 75%, #d4af37 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
    letterSpacing: "0.1em",
    fontWeight: 700
  };

  if (animate) {
    return (
      <motion.div 
        className={cn(sizeClasses[size], "font-bold tracking-wider", className)}
        style={textStyle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nexus
      </motion.div>
    );
  }

  return (
    <div 
      className={cn(sizeClasses[size], "font-bold tracking-wider", className)}
      style={textStyle}
    >
      Nexus
    </div>
  );
}