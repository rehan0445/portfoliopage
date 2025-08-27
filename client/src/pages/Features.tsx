import { motion } from "framer-motion";
import { MessageCircle, Bot, Eye, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: MessageCircle,
    title: "Real People Chats",
    description: "Connect through meaningful group discussions and intimate 1-on-1 conversations"
  },
  {
    icon: Bot,
    title: "AI Companions",
    description: "Interact with AI personalities inspired by anime, movies, and unique characters"
  },
  {
    icon: Eye,
    title: "Anonymous Mode",
    description: "Safe spaces for confession pages, anonymous chats, and skill sharing"
  },
  {
    icon: Globe,
    title: "Community Discovery",
    description: "Find communities tailored to your interests, values, and emotions"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-nexus-gray/30 pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Nexus, we create a safe and vibrant space where meaningful connections flourish
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-nexus-gold to-nexus-gold-light mx-auto mt-6"></div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.title} 
              delay={index * 0.2}
              direction="scale"
              className="h-full"
            >
              <motion.div 
                className="bg-nexus-dark p-8 rounded-2xl border border-nexus-gold/20 hover:border-nexus-gold/50 transition-all duration-300 group h-full flex flex-col"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-nexus-gold to-nexus-gold-dark rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-nexus-dark" />
                </div>
                <h3 className="text-xl font-bold text-nexus-gold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
