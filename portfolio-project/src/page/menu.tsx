import { FiArrowUpRight } from "react-icons/fi";
import { motion, easeInOut } from "framer-motion";
import Marquee from "react-fast-marquee";
import Noise from "@/effects/Animations/Noise/Noise";

type Item = { link: string; text: string };

const links = [
  { name: "LinkedIn", href: "www.linkedin.com/in/ahmed-iyanuoluwa-b4111a26a" },
  { name: "GitHub", href: "https://github.com/iyanu752" },
  {name: "Medium", href: "https://medium.com/@iyanu752"}
];

function FlowingMenu({ items }: { items: Item[] }) {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center justify-center h-full space-y-0">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative cursor-pointer overflow-hidden"
          >
      
            <div
              className="
                pointer-events-none absolute inset-0 z-20
                flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                overflow-hidden w-screen
              "
            >
              <Marquee
                gradient={false}
                speed={70}
                pauseOnHover={false}
                className="w-screen"
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-gray-300 text-base md:text-xl lg:text-2xl font-future font-light mx-8 tracking-wider opacity-90"
                  >
                    {`[ VIEW ${item.text.toUpperCase()} ]`}
                  </span>
                ))}
              </Marquee>
            </div>

            <a
              href={item.link}
              className="
                relative z-10 block
                text-white text-6xl md:text-8xl
                tracking-tight leading-[0.95]
                transition-all duration-300
                group-hover:opacity-50 group-hover:blur-sm group-hover:scale-95
                px-0 py-0
                font-future font-bold
              "
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Menu() {
  const underlineTransition = { duration: 0.28, ease: easeInOut };

  const underlineVariants = {
    rest: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  const demoItems = [
    { link: "/about", text: "ABOUT" },
    // { link: "#", text: "PLAYGROUND" },
    { link: "/contact", text: "CONTACT" },
  ];

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      <Noise
        patternSize={250}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={1}
        patternAlpha={20}
      />
<div className="leading-1 flex flex-col items-center space-y-2">
    <div className=" font-future font-extrabold">
        <FlowingMenu  items={demoItems} />
    </div>


 
  <div className="flex items-center justify-center gap-8 font-future  font-light">
    {links.map((link) => (
      <motion.a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 no-underline text-white text-lg"
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
</div>

    </div>
  );
}
