import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function JourneySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const journey = [
    {
      year: "THE BEGINNING",
      tag: "UNIVERSITY",
      title: "Where It Started",
      text: "The first real pull was building with Python, experimenting across visual work, writing, and teaching, and discovering that software could hold all of those instincts at once.",
      highlight: "PYTHON|FACIAL RECOGNITION|TEACHING",
      story:
        "University was the first operating theater: a facial-recognition attendance project, practical classes, and the beginning of a habit of learning by making.",
    },
    {
      year: "GROWTH",
      tag: "INTERNSHIP",
      title: "First Pressure Test",
      text: "An early frontend role sharpened product instincts and gave real deadlines to design sensitivity, delivery speed, and implementation discipline.",
      highlight: "FRONTEND|DESIGN|UI UX",
    },
    {
      year: "TODAY",
      tag: "PRESENT",
      title: "Always Evolving",
      text: "Now the work spans fullstack applications, scalable flows, and whatever stack best fits the mission. Adaptation is part of the craft, not a side skill.",
      highlight: "FULL STACK|SCALABILITY|ADAPTABILITY",
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-4 py-24 md:px-6">
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]),
        }}
        className="pointer-events-none absolute inset-0 glow-grid"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="terminal-label">Timeline</span>
          <h2 className="section-title mt-5">
            The
            <br />
            <span className="accent">Journey</span>
          </h2>
        </motion.div>

        <div className="relative space-y-8">
          <motion.div
            style={{ scaleY: useTransform(scrollYProgress, [0, 0.9], [0, 1]) }}
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-[#d4ff42] md:block"
          />

          {journey.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative md:pl-12"
            >
              <div className="absolute left-0 top-8 hidden h-8 w-8 border border-[rgba(212,255,66,0.28)] bg-[rgba(212,255,66,0.12)] md:block" />
              <div className="tech-panel p-6 md:p-8">
                <div className="grid gap-5 lg:grid-cols-[0.36fr_1fr] lg:items-start">
                  <div>
                    <p className="font-terminal text-[0.68rem] uppercase tracking-[0.28em] text-[#d4ff42]">
                      {item.year}
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#fff5c9]">
                      {item.tag}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold uppercase tracking-[0.12em] text-white md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="muted-copy mt-5 max-w-3xl text-sm leading-7 md:text-base">
                      {item.text}
                    </p>

                    {item.story ? (
                      <p className="mt-4 border-l border-[rgba(255,77,77,0.34)] pl-4 text-sm leading-7 text-white/70">
                        {item.story}
                      </p>
                    ) : null}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.highlight.split("|").map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={`tech-chip ${skillIndex === 1 ? "border-[rgba(255,216,77,0.28)] bg-[#25200f] text-[#fff5c9]" : ""}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="tech-panel p-6">
            <p className="muted-copy mx-auto max-w-3xl text-center text-sm leading-7 md:text-base">
              The story keeps extending through projects, constraints, and better questions. Every shipped build adds another clear contour to the signal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
