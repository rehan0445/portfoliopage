import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const missions = [
  {
    emoji: "🤝",
    title: "Combat Loneliness",
    description: "To combat loneliness and boredom by providing a platform where both humans and AI foster genuine conversations"
  },
  {
    emoji: "🇮🇳",
    title: "Indian Innovation",
    description: "To build India's homegrown social network, inspiring global adoption and showcasing Indian tech excellence"
  },
  {
    emoji: "🛡️",
    title: "Safe Ecosystem",
    description: "To create a safe, inclusive, and engaging ecosystem where every user feels heard, valued, and connected"
  }
];

export default function Mission() {
  return (
    <section className="py-24 relative pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple yet powerful goals that drive everything we do
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-nexus-gold to-nexus-gold-light mx-auto mt-6"></div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {missions.map((mission, index) => (
            <ScrollReveal 
              key={mission.title} 
              delay={index * 0.3}
              direction="scale"
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-nexus-gold to-nexus-gold-dark rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-nexus-gold/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{mission.emoji}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-nexus-gold mb-4">{mission.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {mission.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
