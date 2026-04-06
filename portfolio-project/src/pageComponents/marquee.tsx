import Marquee from "react-fast-marquee";
import { useLocation } from "react-router-dom";

export default function MarqueeComp() {
  const location = useLocation(); 
  const marquees = [
    { id: 1, text: "[EXPERT LISTING]....CHECK OUT OTHER PROJECTS", link: "/expertlisting" },
    { id: 2, text: "[ECOMMERCE API]....CHECK OUT OTHER PROJECTS", link: "/ecommerceapi" },
    { id: 3, text: "[TEMPO]....CHECK OUT OTHER PROJECTS", link: "/tempo" },
    { id: 4, text: "[JUNO]....CHECK OUT OTHER PROJECTS", link: "/juno" },
    { id: 5, text: "[AGROMAT]....CHECK OUT OTHER PROJECTS", link: "/agromat" },
    { id: 6, text: "[SPEEDTYPE]....CHECK OUT OTHER PROJECTS", link: "/speedtype" },
  ];

  return (
    <div className="py-24 overflow-x-hidden">
      <Marquee
        gradient={true}
        gradientWidth={150}
        gradientColor="black"
        speed={100}
        className="items-center overflow-hidden"
      >
        {marquees
          .filter((marquee) => marquee.link === location.pathname) 
          .map((marquee) => (
            <span
              key={marquee.id}
              className="mx-8 text-9xl font-extrabold text-neutral-600 leading-none"
            >
              {marquee.text}
            </span>
          ))}
      </Marquee>
    </div>
  );
}
