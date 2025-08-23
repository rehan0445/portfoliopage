import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NexusLogo from "@/components/NexusLogo";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919574102202', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Technology network background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          className="mb-8"
        >
          <NexusLogo size="large" className="mx-auto shimmer-effect" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              India's First
            </span>
            <br />
            <span className="text-white">Hybrid Social Network</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where Real Connection Begins — For Humans and AI Companions Alike
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.6 }}
        >
          <button 
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-nexus-gold to-nexus-gold-dark hover:from-nexus-gold-dark hover:to-nexus-gold text-nexus-dark px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-nexus-gold/50 relative overflow-hidden"
            data-testid="join-nexus-button"
          >
            <span className="relative z-10">Join Nexus Community</span>
            <div className="absolute inset-0 shimmer-effect"></div>
          </button>
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
