import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";

const testimonial = {
  text: "Nexus has completely changed how I interact online. The AI companions feel genuinely helpful, and the human connections are more meaningful than anything I've experienced on other platforms. It's refreshing to have conversations that matter.",
  author: "Arjun K.",
  location: "Beta Tester, Mumbai"
};

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
          
          <ScrollReveal direction="right">
            <div className="bg-nexus-dark p-8 rounded-2xl border border-nexus-gold/20">
              <h3 className="text-2xl font-bold text-nexus-gold mb-6">User Testimonial</h3>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-nexus-gold to-nexus-gold-dark rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-nexus-dark">A</span>
                </div>
                <div>
                  <p className="text-nexus-gold font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
