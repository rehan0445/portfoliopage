import { cn } from "@/lib/utils";

interface OrnateLogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function OrnateLogo({ size = "medium", className }: OrnateLogoProps) {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-24 h-24", 
    large: "w-32 h-32"
  };

  return (
    <div className={cn(
      "flex items-center justify-center relative",
      sizeClasses[size],
      className
    )}>
      {/* Ornate SVG Logo inspired by the attached image */}
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="25%" stopColor="#f4e4bc" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="75%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Ornate decorative elements */}
        <path d="M100 20 L120 40 L140 20 L130 50 L160 30 L140 60 L170 50 L150 80 L180 70 L160 100 L190 90 L170 120 L200 110 L180 140 L190 170 L160 150 L170 180 L140 160 L150 190 L120 170 L130 200 L100 180 L70 200 L80 170 L50 190 L60 160 L30 180 L40 150 L10 170 L20 140 L0 110 L30 120 L10 90 L40 100 L20 70 L50 80 L30 50 L60 60 L40 30 L70 50 L60 20 L80 40 Z" 
              fill="url(#goldGradient)" 
              filter="url(#glow)"
              opacity="0.3"/>
        
        {/* Central N letter */}
        <text x="100" y="130" 
              textAnchor="middle" 
              fontSize="80" 
              fontFamily="Cinzel, serif" 
              fontWeight="700"
              fill="url(#goldGradient)"
              filter="url(#glow)">
          N
        </text>
        
        {/* Decorative swirls */}
        <path d="M 70 70 Q 60 60 70 50 Q 80 60 70 70 Z" fill="url(#goldGradient)" opacity="0.7"/>
        <path d="M 130 70 Q 140 60 130 50 Q 120 60 130 70 Z" fill="url(#goldGradient)" opacity="0.7"/>
        <path d="M 70 130 Q 60 140 70 150 Q 80 140 70 130 Z" fill="url(#goldGradient)" opacity="0.7"/>
        <path d="M 130 130 Q 140 140 130 150 Q 120 140 130 130 Z" fill="url(#goldGradient)" opacity="0.7"/>
      </svg>
    </div>
  );
}