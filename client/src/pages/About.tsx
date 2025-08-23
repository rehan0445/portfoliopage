import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section className="py-24 relative pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
                About Nexus
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-nexus-gold to-nexus-gold-light mx-auto"></div>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern collaborative workspace" 
              className="rounded-2xl shadow-2xl shadow-nexus-gold/20" 
            />
          </ScrollReveal>
          
          <ScrollReveal direction="right" className="space-y-6">
            <h3 className="text-3xl font-bold text-nexus-gold mb-8">India's Social Revolution</h3>
            <p className="text-xl leading-relaxed text-gray-300">
              Nexus is India's first indigenous hybrid social networking platform designed to foster real communication over doomscrolling. We combine the best of human-to-human interactions with the power of AI companions, giving users a space where meaningful conversations thrive.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              Nexus is more than just an app – it's a movement towards authentic connection in a digital-first world, where humans are more isolated than ever before.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <motion.div 
                className="text-center p-6 bg-nexus-gray/50 rounded-xl border border-nexus-gold/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-nexus-gold mb-2">10K+</div>
                <div className="text-gray-400">Beta Users</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-nexus-gray/50 rounded-xl border border-nexus-gold/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-nexus-gold mb-2">1st</div>
                <div className="text-gray-400">Hybrid Platform</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
