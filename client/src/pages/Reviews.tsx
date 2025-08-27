import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";

const betaData = [
  { label: "Ease of Use", value: 87 },
  { label: "AI Conversation Quality", value: 91 },
  { label: "Group Chat Engagement", value: 76 }
];

const overallSatisfaction = Math.round(betaData.reduce((sum, item) => sum + item.value, 0) / betaData.length);

export default function Reviews() {
  return (
    <section className="py-24 bg-nexus-gray/30 pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-nexus-gold to-nexus-gold-light bg-clip-text text-transparent">
              Beta Testing Results
            </span>
          </h2>
          <p className="text-xl text-gray-300">Feedback from 100 beta testers</p>
          <div className="w-24 h-1 bg-gradient-to-r from-nexus-gold to-nexus-gold-light mx-auto mt-6"></div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <ScrollReveal direction="left" className="space-y-8">
            {betaData.map((item, index) => (
              <AnimatedProgressBar 
                key={item.label}
                value={item.value} 
                label={item.label} 
                delay={index * 0.3}
              />
            ))}
            
            <div className="bg-nexus-dark p-6 rounded-2xl border border-nexus-gold/20 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-nexus-gold">Overall Satisfaction</h3>
                <motion.span 
                  className="text-3xl font-bold text-nexus-gold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {overallSatisfaction}%
                </motion.span>
              </div>
              <div className="w-full bg-nexus-gray rounded-full h-4 relative overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-nexus-gold via-nexus-gold-light to-nexus-gold-dark h-full rounded-full shimmer-effect"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${overallSatisfaction}%` }}
                  transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </ScrollReveal>
          

        </div>
      </div>
    </section>
  );
}
