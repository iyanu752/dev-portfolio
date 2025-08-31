import { FiArrowUpRight } from "react-icons/fi";
import { motion, easeInOut } from "framer-motion";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "LinkedIn", href: "www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a" },
    { name: "GitHub", href: "https://github.com/iyanu752" },
  ];

  const underlineVariants = {
    rest: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  const underlineTransition = { duration: 0.28, ease: easeInOut }; 

  return (
    <footer className="flex items-center justify-between text-white py-6 px-6 font-future ">
      <div className="w-1/3" />


      <div className="w-full md:w-2/3 flex items-center justify-end gap-8">
        {/* Social Links */}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 no-underline"
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <span>{link.name}</span>
              <FiArrowUpRight size={18} />
              <motion.span
                className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-white"
                style={{ transformOrigin: "left center" }}
                variants={underlineVariants}
                transition={underlineTransition}
              />
            </motion.a>
          ))}
        </div>

        <span className="hidden md:block h-5 w-px bg-white/30" />

        {/* Back to Top */}
        <motion.button
          onClick={handleBackToTop}
          className="relative no-underline cursor-pointer"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <span>BACK TO TOP</span>
          <motion.span
            className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-white"
            style={{ transformOrigin: "left center" }}
            variants={underlineVariants}
            transition={underlineTransition}
          />
        </motion.button>
      </div>
    </footer>
  );
}
