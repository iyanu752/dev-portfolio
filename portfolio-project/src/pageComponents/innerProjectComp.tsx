import Noise from "@/effects/Animations/Noise/Noise";
import { motion } from "framer-motion";
import { useLocation} from "react-router-dom"; 
import juno from '@/assets/Juno.png';
export default function InnerProject() {
  const location = useLocation(); 

  const projects = [
    {
      id: 1,
      title: "Expert Listing",
      category: "Completed",
      image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=2000&q=80",
      link: "/expertlisting",
      route: "https://expert-listing-orpin.vercel.app/",
      useImage: false,
    },
    {
      id: 2,
      title: "E-COMMERCE API`",
      category: "Completed",
      image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=2000&q=80",
      link: "/ecommerceapi",
    route: "https://dev-portfolio-eosin-pi.vercel.app/ecommerceapi",
    useImage: false,
  },
  {
    id: 3,
    title: "TEMPO`",
    category: "Completed",
    image:
    "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=2000&q=80",
    link: "/tempo",
    route: "https://dev-portfolio-eosin-pi.vercel.app/tempo",
    useImage: false,
  },
  {
    id: 4,
    title: "JUNO",
    category: "Completed",
    image:juno,
    link: "/juno",
    route: "https://juno.build/" ,
    useImage: true,
  },
  {
    id: 5,
    title: "AGROMAT",
    category: "Completed",
    image:
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=2000&q=80",
    link: "/agromat",
    route: "https://agromat.vercel.app" ,
    useImage: false,
  },
    {
      id: 6,
      title: "SPEEDTYPE",
      category: "Completed",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=2000&q=80",
      link: "/speedtype",
      route: "https://speedtype-five.vercel.app",
      useImage: false,
    },
  ];

  return (
    <div className="w-full bg-black flex justify-center items-center text-white py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[98%] mx-auto px-2 md:px-4"
      >
        {projects
          .filter((project) => project.link !== location.pathname) 
          .map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl overflow-hidden group"
            >
              <a href={project.link}>
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                {project.useImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <iframe
                    src={project.route}
                    title={project.title}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] pointer-events-none overflow-hidden object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>

                <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay">
                  <Noise
                    patternSize={250}
                    patternScaleX={2}
                    patternScaleY={2}
                    patternRefreshInterval={1}
                    patternAlpha={50}
                  />
                </div>

               
                <div className="absolute top-5 left-5 flex flex-col space-y-2 z-10">
                  {/* <span className="px-3 py-1 bg-gray-800/70 rounded-full text-xs uppercase tracking-wide">
                    {project.category}
                  </span> */}
                </div>

          
              <h3 className="absolute bottom-5 left-5 z-10">
                <span className="px-4 py-2 bg-gray-800/80 backdrop-blur-md rounded-full text-lg sm:text-xl font-bold">
                  {project.title}
                </span>
              </h3>
              </a>
            </div>
          ))}
      </motion.div>
    </div>
  );
}
