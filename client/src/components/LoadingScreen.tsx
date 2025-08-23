import { motion } from "framer-motion";
import NexusLogo from "./NexusLogo";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-nexus-dark z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <NexusLogo size="large" className="mx-auto shimmer-effect" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-nexus-gold mb-2">Nexus</h1>
          <p className="text-gray-400">India's First Hybrid Social Network</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
