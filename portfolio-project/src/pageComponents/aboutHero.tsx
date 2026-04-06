import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Binary, ScanSearch } from "lucide-react";
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

  const subtitleOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  const subtitleY = useTransform(scrollYProgress, [0.08, 0.22], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.14, 0.28], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.14, 0.28], [48, 0]);
  const quotesOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const quotesY = useTransform(scrollYProgress, [0.2, 0.35], [42, 0]);
  const scale = useTransform(scrollYProgress, [0.32, 0.6], [1, 0.86]);
  const textOpacity = useTransform(scrollYProgress, [0.32, 0.62, 0.82, 1], [1, 0.7, 0.45, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.1, 0.16, 1], [0, 0, 1, 1]);
  const overlayY = useTransform(scrollYProgress, [0, 0.1, 0.18], [80, 80, 0]);

  return (
    <div className="overflow-hidden text-white">
      <section className="relative flex min-h-screen items-center px-4 py-28 md:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="glow-grid absolute inset-0" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="tech-panel p-6 md:p-10">
            <p className="terminal-label">Identity Log</p>
            <h1 className="section-title mt-6">
              Iyanu
              <br />
              <span className="accent">Ahmed</span> <DecryptedText text="JACX" />
            </h1>
            <p className="mt-8 max-w-2xl font-terminal text-sm uppercase tracking-[0.18em] text-[#9fb38a]">
              I always told you, you were special.
            </p>
            <p className="muted-copy mt-6 max-w-2xl text-base leading-7 md:text-lg">
              Fullstack developer with a strong pull toward clean interfaces, resilient product flows, and systems that still feel human once they leave the whiteboard.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="symbol-mark h-12 w-12 shrink-0" />
              <div className="relative z-10 w-full">
                <AudioPlayer />
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="tech-panel p-5">
              <div className="flex items-center gap-3">
                <ScanSearch className="h-5 w-5 text-[#d4ff42]" />
                <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#d4ff42]">
                  Profile Scan
                </p>
              </div>
              <p className="mt-4 text-xl font-semibold uppercase tracking-[0.12em] text-white">
                Fullstack Developer
              </p>
              <p className="muted-copy mt-3 text-sm leading-7">
                Frontend craft, backend delivery, and a habit of learning new environments quickly instead of staying boxed in.
              </p>
            </div>

            <div className="tech-panel p-5">
              <div className="flex items-center gap-3">
                <Binary className="h-5 w-5 text-[#ff6b6b]" />
                <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#ff6b6b]">
                  Signal Trace
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "SYSTEM DESIGN WRITING",
                  "PRODUCT UI CONVERSION",
                  "VISUAL EXPERIMENTS",
                  "ADAPTABLE ENGINEERING",
                ].map((item) => (
                  <div key={item} className="border border-white/8 bg-black/25 p-3">
                    <p className="font-terminal text-[0.68rem] uppercase tracking-[0.18em] text-[#fff5c9]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={containerRef} className="relative h-[230vh]">
        <motion.div
          ref={fixedTextRef}
          style={{ scale, opacity: overlayOpacity }}
          className="pointer-events-none fixed inset-0 flex items-center justify-center px-4 md:px-6"
        >
          <motion.div
            style={{ y: overlayY, opacity: textOpacity }}
            className="tech-panel w-full max-w-6xl p-6 md:p-10"
          >
            <motion.div
              style={{ opacity: subtitleOpacity, y: subtitleY }}
              className="terminal-label"
            >
              Human / Builder / Operator
            </motion.div>

            <motion.div style={{ opacity: titleOpacity, y: titleY }} className="mt-8 text-center">
              <h2 className="section-title text-[clamp(3rem,11vw,8rem)]">
                Quiet
                <br />
                <span className="accent">Signal</span>
              </h2>
            </motion.div>

            <motion.div
              style={{ opacity: quotesOpacity, y: quotesY }}
              className="mt-10 grid gap-5 lg:grid-cols-2"
            >
              <div className="tech-panel bg-[rgba(7,10,8,0.78)] p-5">
                <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#d4ff42]">
                  Left Channel
                </p>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  I&apos;m wasting my days as I&apos;ve wasted my nights and I&apos;ve wasted my youth.
                </p>
              </div>

              <div className="tech-panel bg-[rgba(7,10,8,0.78)] p-5">
                <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#ff6b6b]">
                  Right Channel
                </p>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  You&apos;re waiting for something you&apos;ve waited in vain because there&apos;s nothing for you.
                </p>
              </div>
            </motion.div>

            <motion.p
              style={{ opacity: quotesOpacity, y: quotesY }}
              className="mt-6 text-center font-terminal text-xs uppercase tracking-[0.28em] text-[#8d9a90]"
            >
              Suffocation / Crystal Castles
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <JourneySection />
    </div>
  );
}
