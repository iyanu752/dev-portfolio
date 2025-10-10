import { motion } from "framer-motion";
export default function Hero() {

  return (
    <div className="w-full py-28 flex items-center justify-center  text-white font-future font-extrabold px-4">
      <div className="flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-future font-light text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-relaxed mb-6 max-w-3xl text-gray-400"
        >
          "You either go big, or you go out. And I'm not going out."
          <br />– David Martinez (Cyberpunk: Edgerunners)
        </motion.span>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            SOFTWARE
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5,
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.6]"
          >
            DEVELOPER
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
            className="flex flex-row gap-5 justify-center items-center py-12"
          >
            <div className="flex flex-wrap gap-3">
              {[
                { label: "About Me", href: "/about" },
                { label: "Resume", href: "https://drive.google.com/file/d/1epA7KghdaMWFsr6AIKxCsNxkAQ1OBMoR/view?usp=sharing" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 1.0 + (index * 0.1),
                  }}
                  className="
                    relative overflow-hidden border border-white text-white cursor-pointer
                    px-4 py-2 rounded-full text-sm font-medium
                    transition-colors duration-300
                    before:absolute before:inset-0 before:bg-orange-600 before:translate-y-full
                    before:transition-transform before:duration-300
                    hover:before:translate-y-0 hover:text-black hover:border-orange-600
                  "
                >
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}