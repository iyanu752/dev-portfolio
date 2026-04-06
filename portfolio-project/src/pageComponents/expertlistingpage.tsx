import Noise from "@/effects/Animations/Noise/Noise";
import { motion } from "framer-motion";
import expertlisting1 from '@/assets/EXPERTLISTING1.png';
import expertlisting12 from '@/assets/EXPERTLISTING2.png';
import expertlisting13 from '@/assets/EXPERTLISTING3.png';
import expertlisting14 from '@/assets/EXPERTLISTING4.png';
export default function ExpertListingpage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const images = [
    expertlisting1,
    expertlisting12,
    expertlisting13,
    expertlisting14,
  ]
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
              EXPERT LISTING UI
            </motion.h1>

            <motion.p
              className="text-gray-300 text-2xl mt-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Code converted Ui design for expert listing page with subtle functionality included. Built with React, Tailwind CSS.
              This project was made to display my 1:1 UI conversion skills, and to show my ability to create pixel-perfect designs from Figma. The page is responsive and looks great on all devices.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS"].map(
                (tech) => (
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
                )
              )}
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
                Expert listing is a modern real estate platform designed to find verified property listings in Lagos with real map locations and pricing data. Browse apartments for rent, houses for sale, and commercial properties.
              </p>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://expert-listing-orpin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    cursor-pointer relative overflow-hidden border border-white text-white px-6 py-2 rounded-lg font-semibold shadow-md
                    transition-colors duration-300
                    before:absolute before:inset-0 before:bg-orange-600 before:translate-y-full before:transition-transform before:duration-300
                    hover:before:translate-y-0 hover:text-black hover:border-orange-600
                  "
                >
                  <span className="relative z-10">VIEW PROJECT</span>
                </a>

                <a
                  href="https://github.com/iyanu752/estate-run-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    cursor-pointer relative overflow-hidden border border-white text-white px-6 py-2 rounded-lg font-semibold shadow-md
                    transition-colors duration-300
                    before:absolute before:inset-0 before:bg-orange-600 before:translate-y-full before:transition-transform before:duration-300
                    hover:before:translate-y-0 hover:text-black hover:border-orange-600
                  "
                >
                  <span className="relative z-10">VIEW CODE</span>
                </a>
              </div>
              
            <div  className="flex space-x-4 pt-4">
                   <a
                  href="https://www.figma.com/design/4r4lQKWCS69Z22b8hKnwRA/Recruitment?node-id=0-1&p=f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    cursor-pointer relative overflow-hidden border border-white text-white px-6 py-2 rounded-lg font-semibold shadow-md
                    transition-colors duration-300
                    before:absolute before:inset-0 before:bg-orange-600 before:translate-y-full before:transition-transform before:duration-300
                    hover:before:translate-y-0 hover:text-black hover:border-orange-600
                  "
                >
                  <span className="relative z-10">VIEW FIGMA DESIGN</span>
                </a>
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
              {images.map((src, i) => (
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
                    src={src}
                    alt={`ExpertListing Preview ${i + 1}`}
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
  );
}
