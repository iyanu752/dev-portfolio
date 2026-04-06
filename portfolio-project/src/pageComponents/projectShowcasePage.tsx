import Noise from "@/effects/Animations/Noise/Noise";
import { motion } from "framer-motion";
import { ArrowUpRight, SquareTerminal } from "lucide-react";

type ProjectShowcasePageProps = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  images: string[];
  links: Array<{ label: string; href: string }>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectShowcasePage({
  title,
  subtitle,
  description,
  tech,
  images,
  links,
}: ProjectShowcasePageProps) {
  return (
    <section className="relative min-h-screen px-5 pb-20 pt-28 text-white md:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="glow-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(320px,0.88fr)_minmax(0,1.12fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="tech-panel p-6 md:p-8">
            <div className="hazard-bar mb-6" />
            <span className="terminal-label">Case File</span>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="mt-6 flex items-start justify-between gap-4"
            >
              <div>
                <h1 className="section-title text-[clamp(2.8rem,7vw,5.8rem)]">
                  {title}
                </h1>
                <p className="mt-4 max-w-xl font-terminal text-sm uppercase tracking-[0.22em] text-[#d4ff42]">
                  {subtitle}
                </p>
              </div>
              <div className="symbol-mark shrink-0" />
            </motion.div>

            <motion.p
              className="muted-copy mt-8 max-w-xl text-base leading-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {tech.map((item) => (
                <span key={item} className="tech-chip">
                  <SquareTerminal className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 space-y-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              <div>
                <p className="terminal-label">System Notes</p>
                <p className="muted-copy mt-4 text-sm leading-7">
                  Build notes, visual slices, and captured interfaces from the project are archived below in a clean, high-contrast layout for quick scanning.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {links.map(({ label, href }, index) => (
                  <a
                    key={`${label}-${href}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tech-button ${index === 0 ? "tech-button--solid" : ""}`}
                  >
                    {label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16 },
            },
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="tech-panel group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute left-5 top-5 z-20">
                <span className="tech-chip border-[rgba(255,77,77,0.28)] bg-[#201110] text-[#fff2f2]">
                  Frame {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 opacity-60 mix-blend-screen">
                <Noise
                  patternSize={250}
                  patternScaleX={2}
                  patternScaleY={2}
                  patternRefreshInterval={1}
                  patternAlpha={35}
                />
              </div>
              <div className="scanlines pointer-events-none absolute inset-0 z-10 opacity-25" />
              <img
                src={src}
                alt={`${title} preview ${index + 1}`}
                className="relative z-0 h-[28vh] w-full object-cover sm:h-[34vh] md:h-[42vh] lg:h-[80vh]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
