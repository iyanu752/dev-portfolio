import  { useState } from "react";
import Noise from "@/effects/Animations/Noise/Noise";

// FlowingMenu with hover scroll overlay
const FlowingMenu = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center justify-center h-full space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Hover scroll overlay */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden pointer-events-none">
                <div className="flex animate-scroll whitespace-nowrap">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-gray-300 text-3xl md:text-5xl lg:text-6xl font-mono mx-12 tracking-wider opacity-80"
                    >
                      {`[ VIEW ${item.text.toUpperCase()} ]`}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Main text */}
            <a
              href={item.link}
              className={`relative block text-white text-6xl md:text-8xl font-black tracking-tight transition-all duration-500 ease-out px-8 py-4
                ${
                  hoveredIndex === index
                    ? "opacity-50 blur-sm scale-95"
                    : "opacity-100 blur-none scale-100"
                }`}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

// Main Menu
export default function Menu() {
  const demoItems = [
    { link: "#", text: "ABOUT" },
    { link: "#", text: "PLAYGROUND" },
    { link: "#", text: "CONTACT" },
  ];

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* Keep your noise effect intact */}
      <Noise
        patternSize={250}
        patternScaleX={2}
        patternScaleY={2}
        patternRefreshInterval={1}
        patternAlpha={20}
      />

      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}
