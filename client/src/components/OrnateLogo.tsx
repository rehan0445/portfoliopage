import { cn } from "@/lib/utils";
import ornateLogoPath from "@assets/image_1756291350656.png";

interface OrnateLogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function OrnateLogo({ size = "medium", className }: OrnateLogoProps) {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-24 h-24", 
    large: "w-40 h-40"
  };

  return (
    <div className={cn(
      "flex items-center justify-center relative",
      sizeClasses[size],
      className
    )}>
      <img 
        src={ornateLogoPath} 
        alt="Nexus Ornate Logo" 
        className="w-full h-full object-contain filter drop-shadow-lg"
      />
    </div>
  );
}