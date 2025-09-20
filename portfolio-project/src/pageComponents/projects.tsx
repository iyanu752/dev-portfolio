import Noise from "@/effects/Animations/Noise/Noise";
import { motion } from "framer-motion";
import speedtype1 from '@/assets/Landing.png';
import agromat1 from '@/assets/agromatlg.png';
import estaterun1 from '@/assets/estaterun.png'
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "ESTATE RUN",
      category: "In-Progress",
      image:estaterun1,
      link: "/estaterun" , 
      route: "https://estate-run-client.vercel.app",
    },
    {
      id: 2,
      title: "AGROMAT",
      category: "In-Progress",
      image:agromat1,
      link: "/agromat" ,
      route: "https://agromat.vercel.app" 
    },
    // {
    //   id: 3,
    //   title: "City Lights",
    //   category: "Urban",
    //   label: "MODERN",
    //   image:
    //     "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=2000&q=80",
    // },
    {
      id: 3,
      title: "SPEEDTYPE",
      category: "Completed",
      image:speedtype1,
      link: '/speedtype',  
      route: "https://speedtype-five.vercel.app"
    },
  ];

  return (
    <div  className="w-full  bg-black flex justify-center cursor-pointer items-center text-white py-10">
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
        className="flex flex-wrap w-full max-w-[98%] mx-auto px-2 md:px-4 gap-4"
      >
        {projects.map((project) => (
        
          <div
            key={project.id}
            className="relative flex-1 min-w-[48%] rounded-2xl overflow-hidden group"
          >
            <a href={project.link}>
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                      <iframe
                        src={project.route}
                        title={project.title}
                        className="w-full h-full border-0 pointer-events-none scale-110 transition-transform duration-700 group-hover:scale-125"
                />
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
              <span className="px-3 py-1 bg-gray-800/70 rounded-full text-xs uppercase tracking-wide">
                {project.category}
              </span>
            </div>

            <h3 className="absolute bottom-5 left-5 z-10">
            <span className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-lg sm:text-xl font-bold">
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
