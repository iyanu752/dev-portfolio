import { motion } from "framer-motion";

export default function AppLoader() {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#070b09] px-6 text-white">
      <div className="w-full max-w-md">
        <div className="tech-panel p-6 sm:p-8">
          <p className="font-terminal text-[0.7rem] uppercase tracking-[0.28em] text-[#d4ff42]">
            Loading Signal
          </p>
          <div className="mt-6 flex items-center gap-4">
            <motion.div
              className="h-14 w-14 border border-[#d4ff42]"
              animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 0.88, 1.04, 0.92, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex-1">
              <p className="text-xl font-semibold uppercase tracking-[0.14em] text-white">
                Initializing
              </p>
              <p className="mt-2 font-terminal text-[0.68rem] uppercase tracking-[0.22em] text-[#8d9a90]">
                Routing components, images, and interface modules
              </p>
            </div>
          </div>

          <div className="mt-6 h-3 w-full overflow-hidden border border-[rgba(212,255,66,0.24)] bg-[#111712]">
            <motion.div
              className="h-full bg-[#d4ff42]"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
