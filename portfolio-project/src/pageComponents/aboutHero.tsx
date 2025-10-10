import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AudioPlayer from "./audioPlayer";
import JourneySection from "./journey";
function DecryptedText({ text }: { text: string }) {
  return <span>{text}</span>;
}

export default function AboutHero() {
  const containerRef = useRef(null);
  const fixedTextRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.1, 0.25], [50, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);

  const quotesOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const quotesY = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);

  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.8]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.8, 1],
    [1, 0.6, 0.6, 0]
  );

  return (
    <div className="bg-black font-sans text-white overflow-hidden">
      {/* Top quote */}
      <div className="h-screen flex flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg"
        >
          "I always told you, you were special."
        </motion.p>
        <div className="relative z-50 pointer-events-auto">
          <AudioPlayer/>
        </div>
        
      </div>

      <div ref={containerRef} className="h-[250vh] relative">
        <motion.div
          ref={fixedTextRef}
          style={{ scale, opacity: textOpacity }}
          className="fixed inset-0 flex flex-col items-center justify-center px-8 z-10"
        >
          <motion.div
            style={{ opacity: subtitleOpacity, y: subtitleY }}
            className="text-white/60 text-sm tracking-[0.3em] mb-8 font-light"
          >
            FULLSTACK DEVELOPER
          </motion.div>

          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
              IYANU
              <br />
              AHMED <DecryptedText text="(JACX)" />
            </h1>
          </motion.div>

          <motion.div
            style={{ opacity: quotesOpacity, y: quotesY }}
            className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mb-16 gap-8"
          >
            <div className="text-white/80 text-sm tracking-wider font-light text-justify lg:text-left">
              I'M WASTING MY DAYS AS I'VE WASTED MY NIGHTS
              <br /> AND I'VE WASTED MY YOUTH
            </div>

            <div className="text-white/80 text-sm tracking-wider font-light text-justify lg:text-right">
              YOU'RE WAITING FOR SOMETHING YOU'VE WAITED IN VAIN
              <br /> BECAUSE THERE'S NOTHING FOR YOU
            </div>
          </motion.div>
          <br />
          <motion.span style={{ opacity: quotesOpacity, y: quotesY }}>
            -Suffication - Crystal castles
          </motion.span>
        </motion.div>
      </div>

      <JourneySection />
    </div>
  );
}
