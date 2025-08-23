import { cn } from "@/lib/utils";

interface NexusLogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function NexusLogo({ size = "medium", className }: NexusLogoProps) {
  const sizeClasses = {
    small: "w-10 h-10",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  const innerSizeClasses = {
    small: "inset-2 text-sm",
    medium: "inset-4 text-3xl",
    large: "inset-6 text-4xl"
  };

  const borderClasses = {
    small: "border",
    medium: "border-2",
    large: "border-4"
  };

  return (
    <div className={cn(
      "bg-gradient-to-br from-nexus-gold to-nexus-gold-dark rounded-full relative",
      sizeClasses[size],
      className
    )}>
      <div className={cn(
        "absolute border-nexus-gold-light rounded-full flex items-center justify-center",
        innerSizeClasses[size],
        borderClasses[size]
      )}>
        <span className="font-bold text-nexus-gold-light">N</span>
      </div>
    </div>
  );
}
