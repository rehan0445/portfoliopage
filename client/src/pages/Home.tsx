import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import OrnateLogo from "@/components/OrnateLogo";
import StylizedNexusText from "@/components/StylizedNexusText";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const handleWhatsAppRedirect = () => {
    window.open('https://chat.whatsapp.com/FIc1S7pMKdzGXvNaqeHPsO?mode=ems_share_c', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 3.8, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="mb-8"
          whileHover={{ scale: 1.1, rotateY: 15, rotateX: 5 }}
        >
          <OrnateLogo size="large" className="mx-auto rotate-3d" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="mb-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              India's First Hybrid Social Network
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
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
            className="bg-gradient-to-r from-nexus-gold to-nexus-gold-dark hover:from-nexus-gold-dark hover:to-nexus-gold text-nexus-dark px-6 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold relative overflow-hidden whitespace-nowrap"
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
