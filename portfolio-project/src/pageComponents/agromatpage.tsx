import Noise from "@/effects/Animations/Noise/Noise";
import { motion } from "framer-motion";
export default function AgromatPage() {
          const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
    return (
        <>
            <div className="bg-black text-white min-h-screen flex flex-col px-6 md:px-12 py-28">
     
      <div className="flex flex-col md:flex-row">

        <div className="md:w-1/2 md:pr-12 space-y-6 md:sticky md:top-12 self-start">
          <motion.h1
            className="text-6xl font-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            AGROMAT
          </motion.h1>

          <motion.p
            className="text-gray-300 text-2xl mt-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Agricultural E-Commerce And Investment Platform
          </motion.p>

       
          <div className="flex flex-wrap gap-3">
            {["React", "NodeJs", "MongoDb", "Material Tailwind"].map((tech) => (
              <span
                key={tech}
                className="
                  relative overflow-hidden border border-white text-white cursor-default px-4 py-2 rounded-full text-sm font-medium
                  transition-colors duration-300
                  before:absolute before:inset-0 before:bg-orange-600 before:translate-y-full before:transition-transform before:duration-300
                  hover:before:translate-y-0 hover:text-black hover:border-orange-600
                "
              >
                <span className="relative z-10">{tech}</span>
              </span>
            ))}
          </div>

          
          <motion.div
            className="space-y-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h5 className="text-lg font-semibold">ABOUT</h5>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                AgroMat is a comprehensive agricultural e-commerce and investment platform that bridges the gap between farmers, agribusinesses, and consumers. It empowers users to buy fresh farm produce directly from farmers, access high-quality agricultural inputs and factory-made materials, and also participate in agricultural investments.
            </p>

            <div className="flex space-x-4 pt-4">
              {[
                { label: "VIEW PROJECT", link: "https://agromat.vercel.app/" },
                { label: "VIEW CODE", link: "https://github.com/iyanu752/Agromat" },
              ].map(({ label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    cursor-pointer relative overflow-hidden border border-white text-white px-6 py-2 rounded-lg font-semibold shadow-md
                    transition-colors duration-300
                    before:absolute before:inset-0 before:bg-orange-600 before:translate-y-full before:transition-transform before:duration-300
                    hover:before:translate-y-0 hover:text-black hover:border-orange-600
                  "
                >
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </div>

          </motion.div>
        </div>

       
        <div className="md:w-full mt-10 md:mt-0 space-y-10 pr-2">
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-3xl shadow-lg"
                initial={{ opacity: 0, y: 40, scale: 1.02 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <Noise
                  patternSize={250}
                  patternScaleX={2}
                  patternScaleY={2}
                  patternRefreshInterval={1}
                  patternAlpha={50}
                />
                <img
                  src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=2000&q=80"
                  alt={`SpeedType Preview ${i}`}
                  className="
                    object-cover w-full rounded-3xl
                    h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[90vh]
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
        </>
    )
}