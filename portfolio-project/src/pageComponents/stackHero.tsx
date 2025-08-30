import { motion } from "framer-motion";

export default function Stack() {
  return (
    <div className="w-full py-28 flex items-center justify-center text-white font-future font-extrabold px-4">
      <div className="flex flex-col items-center">

        <span className="font-future font-light text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed mb-6 max-w-3xl text-gray-400">
          “Your mind is the interface, your tools are the extensions.”  
          <br />– Some Random Dude (My Imagination)
        </span>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            TECH
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.6]"
          >
            STACK
          </motion.p>
        </div>

      </div>
    </div>
  );
}
