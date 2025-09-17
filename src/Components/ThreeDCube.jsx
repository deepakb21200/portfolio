// components/ThreeDCube.js
import { motion } from "framer-motion";

export default function ThreeDCube() {
  return (
    <motion.div
      className="cube-wrapper relative w-40 h-40"
      animate={{ rotateY: 360 }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    >
      <div className="cube absolute inset-0">
        {["front", "back", "left", "right", "top", "bottom"].map((face, i) => (
          <div
            key={i}
            className={`cube-face cube-${face} absolute w-40 h-40 bg-gradient-to-br from-blue-500 to-green-400 opacity-80 border border-white/20 flex items-center justify-center`}
          >
            <span className="text-white font-bold text-lg">{face}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
