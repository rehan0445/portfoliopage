import OrnateLogo from "./OrnateLogo";

interface BackgroundLogoProps {
  opacityClass?: string;
}

export default function BackgroundLogo({ opacityClass = "opacity-5" }: BackgroundLogoProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${opacityClass}`}>
        <OrnateLogo size="large" className="w-96 h-96 rotate-3d" />
      </div>
    </div>
  );
}
