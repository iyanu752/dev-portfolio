import Marquee from "react-fast-marquee";
import { useLocation } from "react-router-dom";

export default function MarqueeComp() {
  const location = useLocation();
  const marquees = [
    { id: 1, text: "[EXPERT LISTING] / SCAN OTHER PROJECTS /", link: "/expertlisting" },
    { id: 2, text: "[ECOMMERCE API] / SCAN OTHER PROJECTS /", link: "/ecommerceapi" },
    { id: 3, text: "[TEMPO] / SCAN OTHER PROJECTS /", link: "/tempo" },
    { id: 4, text: "[JUNO] / SCAN OTHER PROJECTS /", link: "/juno" },
    { id: 5, text: "[AGROMAT] / SCAN OTHER PROJECTS /", link: "/agromat" },
    { id: 6, text: "[SPEEDTYPE] / SCAN OTHER PROJECTS /", link: "/speedtype" },
  ];

  return (
    <div className="overflow-x-hidden px-4 py-10 md:px-6">
      <div className="tech-panel py-5">
        <Marquee gradient={false} speed={70} className="items-center overflow-hidden">
          {marquees
            .filter((marquee) => marquee.link === location.pathname)
            .map((marquee) => (
              <span
                key={marquee.id}
                className="mx-8 font-terminal text-3xl font-semibold uppercase tracking-[0.28em] text-[#d4ff42] md:text-6xl"
              >
                {marquee.text}
              </span>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
