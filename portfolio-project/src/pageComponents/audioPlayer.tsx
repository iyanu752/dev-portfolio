import { motion } from "framer-motion";
import suffication from "../assets/audio/suffication.mp3";

export default function AudioPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-96 mt-8"
    >
      <div className="relative group">
        {/* Ornamental border glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-red-900/20 blur-sm group-hover:blur transition-all duration-500"></div>

        {/* Main audio container */}
        <div
          className="relative bg-black border border-red-900/50 p-6 shadow-2xl rounded-md"
          style={{ transform: "none" }} // Prevents transform stacking issue
        >
          {/* Gothic decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-900/70"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-900/70"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-900/70"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-900/70"></div>

          {/* Audio player */}
          <audio
            controls
            className="w-full pointer-events-auto"
            style={{
              filter:
                "invert(1) brightness(0.5) contrast(1.2) hue-rotate(180deg)",
            }}
          >
            <source src={suffication} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Decorative line underneath */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-900/50"></div>
            <div className="text-red-900/50 text-xs">♦</div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-900/50"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
