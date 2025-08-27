import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import OrnateLogo from "@/components/OrnateLogo";
import StylizedNexusText from "@/components/StylizedNexusText";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919574102202', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 parallax-bg"></div>
      <div className="absolute top-20 left-20 w-2 h-2 bg-nexus-gold rounded-full floating-animation opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-nexus-gold-light rounded-full floating-animation opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-40 w-3 h-3 bg-nexus-gold rounded-full floating-animation opacity-30" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-nexus-gold-light rounded-full floating-animation opacity-50" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 3.8, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="mb-8"
          whileHover={{ scale: 1.1, rotateY: 15, rotateX: 5 }}
        >
          <div className="perspective-1000 transform-style-3d pulse-glow rounded-full p-4">
            <OrnateLogo size="large" className="mx-auto rotate-3d" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="mb-6"
        >
          <div className="mb-6">
            <StylizedNexusText size="large" animate className="mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
                India's First Hybrid Social Network
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where Real Connection Begins — For Humans and AI Companions Alike
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.6 }}
        >
          <motion.button 
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-nexus-gold to-nexus-gold-dark hover:from-nexus-gold-dark hover:to-nexus-gold text-nexus-dark px-12 py-4 rounded-full text-xl font-semibold relative overflow-hidden pulse-glow"
            data-testid="join-nexus-button"
            whileHover={{ 
              scale: 1.05, 
              rotateX: 5, 
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10">Join Nexus Community</span>
            <div className="absolute inset-0 shimmer-effect"></div>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-nexus-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
