import { motion } from "framer-motion";

interface AnimatedProgressBarProps {
  value: number;
  label: string;
  delay?: number;
}

export default function AnimatedProgressBar({ value, label, delay = 0 }: AnimatedProgressBarProps) {
  return (
    <div className="bg-nexus-dark p-6 rounded-2xl border border-nexus-gold/20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-nexus-gold">{label}</h3>
        <motion.span 
          className="text-2xl font-bold text-nexus-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {value}%
        </motion.span>
      </div>
      <div className="w-full bg-nexus-gray rounded-full h-3 relative overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-nexus-gold to-nexus-gold-dark h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 2, delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
