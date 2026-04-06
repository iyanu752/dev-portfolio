import { motion } from "framer-motion";

export default function Stack() {
  return (
    <section className="px-4 py-18 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="tech-panel p-6 md:p-10">
          <span className="terminal-label">Tools / Systems / Discipline</span>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-6 max-w-3xl font-terminal text-sm uppercase tracking-[0.18em] text-[#9fb38a]"
          >
            Your mind is the interface, your tools are the extensions.
            <span className="ml-3 text-[#ff6b6b]">Imagined transmission</span>
          </motion.p>

          <div className="mt-8 flex flex-col gap-2 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55 }}
              className="section-title"
            >
              Tech
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="section-title"
            >
              <span className="accent">Stack</span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
