"use client";

import Marquee from "react-fast-marquee";
import Noise from "@/effects/Animations/Noise/Noise";

type Item = { link: string; text: string };

function FlowingMenu({ items }: { items: Item[] }) {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center justify-center h-full space-y-0">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative cursor-pointer overflow-hidden"
          >
            {/* MARQUEE OVERLAY */}
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
                    className="text-gray-300 text-base md:text-xl lg:text-2xl font-mono mx-8 tracking-wider opacity-90"
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
                text-white text-6xl md:text-8xl font-black
                tracking-tight leading-[0.95]
                transition-all duration-300
                group-hover:opacity-50 group-hover:blur-sm group-hover:scale-95
                px-0 py-0
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
  const demoItems = [
    { link: "#", text: "ABOUT" },
    { link: "#", text: "PLAYGROUND" },
    { link: "#", text: "CONTACT" },
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

      <div
        className="leading-1"
        style={{ height: "600px", position: "relative" }}
      >
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}
