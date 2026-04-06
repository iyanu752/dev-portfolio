import { motion } from "framer-motion";
import { ArrowUpRight, Command, Radar, ShieldAlert } from "lucide-react";

const links = [
  { label: "About Me", href: "/about", solid: true },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1fvNU9Voo_Wh5ZLamhHiY4LWjqV91My_l/view?usp=sharing",
  },
  { label: "Github", href: "https://github.com/iyanu752" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a",
  },
];

const metrics = [
  { label: "Focus", value: "Fullstack Systems", icon: Command, tone: "text-[#d4ff42]" },
  { label: "Mode", value: "Interface + Backend", icon: Radar, tone: "text-[#ffd84d]" },
  { label: "Signal", value: "Shipping Clean Products", icon: ShieldAlert, tone: "text-[#ff6b6b]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-32 text-white md:px-6 md:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="glow-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="tech-panel p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="terminal-label"
          >
            Marathon / Tech-Noir / Interface
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 max-w-2xl font-terminal text-sm uppercase tracking-[0.16em] text-[#9fb38a]"
          >
            You either go big, or you go out. And I&apos;m not going out.
            <span className="ml-3 text-[#ff6b6b]">David Martinez</span>
          </motion.p>

          <div className="mt-8">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="section-title2"
            >
              Software
              <br />
              <span className="accent">Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="muted-copy mt-8 max-w-2xl text-base leading-7 md:text-lg"
            >
              I build focused, modern interfaces and practical backend systems with a strong bias for clean structure, sharp interactions, and products that feel deliberate under pressure.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`tech-button ${item.solid ? "tech-button--solid" : ""}`}
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-5">
          {metrics.map(({ label, value, icon: Icon, tone }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.18 + index * 0.1 }}
              className="tech-panel flex items-center gap-4 p-5"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-black/40">
                <Icon className={`h-6 w-6 ${tone}`} />
              </div>
              <div>
                <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#8d9a90]">
                  {label}
                </p>
                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.08em] text-white">
                  {value}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="tech-panel relative min-h-[220px] overflow-hidden p-5"
          >
            <div className="hazard-bar mb-5" />
            <p className="terminal-label">System Overlay</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "GRID-LOCKED LAYOUTS",
                "TERMINAL UI ELEMENTS",
                "MINIMAL MOTION",
                "INDUSTRIAL COLOR SIGNALS",
              ].map((item) => (
                <div key={item} className="border border-white/8 bg-black/30 p-3">
                  <p className="font-terminal text-[0.68rem] uppercase tracking-[0.18em] text-[#d4ff42]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-20 scanlines" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
