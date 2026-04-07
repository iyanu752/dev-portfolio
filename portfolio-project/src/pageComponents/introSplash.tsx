import { motion } from "framer-motion";

type IntroSplashProps = {
  onComplete: () => void;
};

const duration = 6;
const telemetry = ["RUNNER", "REBOOT", "TAU CETI IV", "SIGNAL", "SHELL", "ACTIVE"];
const scannerDigits = ["041", "889", "013", "776", "022", "541"];
const sceneStops = {
  one: [0, 0.04, 0.19, 0.23],
  two: [0, 0.27, 0.31, 0.46, 0.5],
  three: [0, 0.54, 0.58, 0.71, 0.75],
  four: [0, 0.79, 0.83, 0.94, 1],
};

const glitchStops = [0.24, 0.5, 0.75, 0.965];

export default function IntroSplash({ onComplete: _onComplete }: IntroSplashProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[#070b09]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <motion.div
        className="intro-grid absolute inset-0"
        animate={{ opacity: [0.08, 0.24, 0.12, 0.34, 0.14, 0.28, 0.08] }}
        transition={{
          duration,
          times: [0, 0.08, 0.24, 0.42, 0.58, 0.82, 1],
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[rgba(255,77,77,0.05)]"
        animate={{ opacity: [0.08, 0, 0.06, 0, 0.04, 0] }}
        transition={{ duration, times: [0, 0.18, 0.36, 0.58, 0.82, 1], ease: "linear" }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="intro-scan-line"
          initial={{ x: "-35%", y: "-15%" }}
          animate={{
            x: ["-35%", "12%", "52%", "96%"],
            y: ["-15%", "2%", "15%", "28%"],
            opacity: [0, 0.95, 0.95, 0],
          }}
          transition={{ duration: 1.4, delay: 0.16, times: [0, 0.24, 0.7, 1], ease: "easeInOut" }}
        />
        <motion.div
          className="intro-scan-line intro-scan-line--alt"
          initial={{ x: "105%", y: "70%" }}
          animate={{
            x: ["105%", "56%", "-8%"],
            y: ["70%", "58%", "42%"],
            opacity: [0, 0.92, 0],
          }}
          transition={{ duration: 1.35, delay: 1.65, times: [0, 0.56, 1], ease: "easeInOut" }}
        />
        <motion.div
          className="intro-scan-line"
          initial={{ x: "-24%", y: "40%" }}
          animate={{
            x: ["-24%", "10%", "94%"],
            y: ["40%", "48%", "58%"],
            opacity: [0, 0.92, 0],
          }}
          transition={{ duration: 1.45, delay: 3.15, times: [0, 0.55, 1], ease: "easeInOut" }}
        />
        <motion.div
          className="intro-scan-line intro-scan-line--alt"
          initial={{ x: "96%", y: "16%" }}
          animate={{
            x: ["96%", "34%", "-12%"],
            y: ["16%", "28%", "34%"],
            opacity: [0, 0.92, 0],
          }}
          transition={{ duration: 1.35, delay: 4.5, times: [0, 0.58, 1], ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="absolute inset-0 px-6 py-6"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration, times: sceneStops.one, ease: "linear" }}
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-between">
          <div className="grid gap-3 sm:grid-cols-3">
            {telemetry.map((item, index) => (
              <motion.div
                key={item}
                className="border border-[rgba(212,255,66,0.2)] bg-[#101511] px-3 py-2 font-terminal text-[0.68rem] uppercase tracking-[0.22em] text-[#d4ff42]"
                animate={{ opacity: [0.18, 1, 0.32], x: [-10, 0, 8] }}
                transition={{ duration: 0.72, delay: 0.12 + index * 0.06, ease: "easeInOut" }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="tech-panel p-5 sm:p-6">
              <p className="font-terminal text-[0.68rem] uppercase tracking-[0.28em] text-[#d4ff42]">
                Scanner Boot
              </p>
              <div className="mt-5 space-y-2">
                {scannerDigits.map((digit, index) => (
                  <motion.div
                    key={digit}
                    className="flex items-center justify-between border-b border-white/8 py-1 font-terminal text-sm uppercase tracking-[0.24em]"
                    animate={{ opacity: [0.12, 1, 0.28], x: [-12, 0, 10] }}
                    transition={{ duration: 0.7, delay: 0.24 + index * 0.08, ease: "easeInOut" }}
                  >
                    <span className="text-[#8d9a90]">#{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[#f3f7ef]">{digit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.p
                className="font-terminal text-[0.72rem] uppercase tracking-[0.3em] text-[#ff4d4d]"
                animate={{ opacity: [0, 1, 0.6], y: [14, 0, -4] }}
                transition={{ duration: 0.85, delay: 0.28, ease: "easeOut" }}
              >
                Runner reboot sequence
              </motion.p>
              <motion.h2
                className="mt-4 text-[clamp(2.8rem,9vw,6.8rem)] font-bold uppercase leading-[0.88] tracking-[0.12em] text-[#f3f7ef]"
                animate={{ opacity: [0, 1, 1], y: [22, 0, 0] }}
                transition={{ duration: 0.95, delay: 0.34, ease: "easeOut" }}
              >
                System
                <br />
                <span className="text-[#d4ff42]">Online</span>
              </motion.h2>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center px-6"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration, times: sceneStops.two, ease: "linear" }}
      >
        <div className="relative h-[19rem] w-[19rem] sm:h-[26rem] sm:w-[26rem]">
          <motion.div
            className="absolute inset-[7%] border border-[#d4ff42]"
            animate={{ scale: [0.76, 1.08, 0.84, 1.14], opacity: [0.22, 1, 0.52, 0.95] }}
            transition={{ duration: 1.15, times: [0, 0.34, 0.64, 1], ease: "easeInOut", repeat: 1, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute inset-[18%] border border-[#ffd84d]"
            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
            animate={{ rotate: [0, 45, 90], scale: [0.66, 1.04, 0.82], opacity: [0.18, 0.9, 0.46] }}
            transition={{ duration: 1.4, ease: "easeInOut", repeat: 1, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 border-2 border-[#d4ff42]"
            style={{ borderRadius: "999px" }}
            animate={{ scale: [0.54, 1.08, 0.74, 1.14], opacity: [0.18, 1, 0.58, 1] }}
            transition={{ duration: 1.15, times: [0, 0.32, 0.6, 1], ease: "easeInOut", repeat: 1, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 border-2 border-[#ff4d4d] bg-[#ff4d4d]"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            animate={{ scale: [0.24, 0.94, 0.68, 1.04], rotate: [0, -12, 0, 10], opacity: [0.1, 1, 0.72, 1] }}
            transition={{ duration: 1.06, times: [0, 0.28, 0.58, 1], ease: "easeInOut", repeat: 1, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 bg-[#d4ff42]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 78% 100%, 0 100%)" }}
            animate={{ scale: [0.3, 1, 0.7, 1.1], opacity: [0.16, 1, 0.64, 1] }}
            transition={{ duration: 0.95, times: [0, 0.28, 0.62, 1], ease: "easeInOut", repeat: 1, repeatType: "mirror" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center px-6"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration, times: sceneStops.three, ease: "linear" }}
      >
        <div className="w-full max-w-4xl text-center">
          <motion.p
            className="font-terminal text-[0.72rem] uppercase tracking-[0.34em] text-[#8d9a90]"
            animate={{ opacity: [0, 1, 1, 0.6], y: [16, 0, 0, -4] }}
            transition={{ duration: 0.95, times: [0, 0.24, 0.7, 1], ease: "easeInOut" }}
          >
            Incoming transmission
          </motion.p>
          <motion.p
            className="mt-4 text-[clamp(1.5rem,4.2vw,3.2rem)] font-semibold uppercase leading-tight tracking-[0.12em] text-[#f3f7ef]"
            animate={{ opacity: [0, 1, 1, 0.78], scale: [0.94, 1, 1, 0.98] }}
            transition={{ duration: 1.15, times: [0, 0.22, 0.72, 1], ease: "easeInOut" }}
          >
            I always knew you were <span className="text-[#d4ff42]">special</span>
          </motion.p>
          <motion.div
            className="mx-auto mt-6 h-[2px] w-40 bg-[#ff4d4d]"
            animate={{ opacity: [0, 1, 0.3], scaleX: [0.2, 1, 1.2] }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center px-6"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration, times: sceneStops.four, ease: "linear" }}
      >
        <div className="w-full max-w-5xl text-center">
          <motion.p
            className="font-terminal text-xs uppercase tracking-[0.34em] text-[#ff4d4d]"
            animate={{ opacity: [0, 1, 0.82], y: [10, 0, -4] }}
            transition={{ duration: 0.9, times: [0, 0.3, 1], ease: "easeOut" }}
          >
            Node zero / signal retained
          </motion.p>
          <motion.h2
            className="mt-5 text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[0.12em] text-[#f3f7ef]"
            animate={{ opacity: [0, 1, 1, 0.8], scale: [0.92, 1, 1.03, 0.94] }}
            transition={{ duration: 1.15, times: [0, 0.22, 0.72, 1], ease: "easeInOut" }}
          >
            JACX
            <br />
            <span className="text-[#d4ff42]">Enter</span>
          </motion.h2>
          <motion.div
            className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 font-terminal text-[0.64rem] uppercase tracking-[0.2em] text-[#8d9a90]"
            animate={{ opacity: [0, 1, 0.7] }}
            transition={{ duration: 1, delay: 0.1, times: [0, 0.28, 1], ease: "easeOut" }}
          >
            <span className="border border-white/8 bg-black/20 px-2 py-3">Builder</span>
            <span className="border border-white/8 bg-black/20 px-2 py-3">Systems</span>
            <span className="border border-white/8 bg-black/20 px-2 py-3">Interface</span>
          </motion.div>
        </div>
      </motion.div>

      {glitchStops.map((stop, index) => (
        <motion.div
          key={stop}
          className="pointer-events-none absolute inset-0"
          animate={{ opacity: [0, 0, 1, 0, 0.9, 0] }}
          transition={{
            duration,
            times: [
              Math.max(0, stop - 0.03),
              Math.max(0, stop - 0.012),
              stop,
              Math.min(1, stop + 0.012),
              Math.min(1, stop + 0.02),
              Math.min(1, stop + 0.035),
            ],
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-[rgba(255,255,255,0.02)]" />
          <div className="absolute inset-0 translate-x-[5px] border border-[#ff4d4d] opacity-45" />
          <div className="absolute inset-0 -translate-x-[5px] border border-[#d4ff42] opacity-45" />
          <div
            className="intro-glitch-bar absolute left-0 right-0 h-6"
            style={{ top: `${16 + index * 14}%` }}
          />
          <div
            className="intro-glitch-bar intro-glitch-bar--alt absolute left-0 right-0 h-10"
            style={{ top: `${28 + index * 12}%` }}
          />
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0 bg-[#d4ff42]"
        animate={{ opacity: [0, 0, 0, 0, 0.92, 0] }}
        transition={{ duration, times: [0, 0.92, 0.955, 0.976, 0.99, 1], ease: "easeOut" }}
      />
    </motion.div>
  );
}
