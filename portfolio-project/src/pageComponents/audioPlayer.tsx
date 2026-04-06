import { motion } from "framer-motion";
import { AudioLines, Play } from "lucide-react";
import suffication from "../assets/audio/suffication.mp3";

export default function AudioPlayer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="w-full max-w-[26rem]"
    >
      <div className="tech-panel w-full p-4 sm:p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-terminal text-[0.68rem] uppercase tracking-[0.24em] text-[#d4ff42]">
              Audio Log
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white sm:text-base">
              Suffocation / Crystal Castles
            </p>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-[#111712] text-[#d4ff42]">
            <AudioLines className="h-4 w-4" />
          </div>
        </div>

        <div className="mb-4 flex items-center gap-2 border-y border-white/8 py-2">
          <Play className="h-3.5 w-3.5 text-[#ff6b6b]" />
          <p className="font-terminal text-[0.64rem] uppercase tracking-[0.22em] text-[#8d9a90]">
            Personal soundtrack / playback enabled
          </p>
        </div>

        <audio
          controls
          className="audio-terminal w-full min-w-0 pointer-events-auto"
        >
          <source src={suffication} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </motion.div>
  );
}
