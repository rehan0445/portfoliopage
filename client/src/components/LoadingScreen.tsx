import { motion } from "framer-motion";
import OrnateLogo from "./OrnateLogo";
import StylizedNexusText from "./StylizedNexusText";
import nexusWordmark from "@assets/Screenshot 2025-08-27 220724.png";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="mb-8"
        >
          <OrnateLogo size="large" className="mx-auto floating-animation" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src={nexusWordmark} alt="Nexus" className="h-12 md:h-16 w-auto mx-auto mb-4" />
          <p className="text-gray-400 text-xl">India's First Hybrid Social Network</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
