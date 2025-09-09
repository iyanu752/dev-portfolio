import Noise from "@/effects/Animations/Noise/Noise";
import { motion } from "framer-motion";
import { useLocation} from "react-router-dom"; 

export default function InnerProject() {
  const location = useLocation(); 

  const projects = [
    {
      id: 1,
      title: "ESTATE RUN",
      category: "AR/VR",
      label: "FUTURE",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=2000&q=80",
      link: "/estaterun",
    },
    {
      id: 2,
      title: "AGROMAT",
      category: "Architecture",
      label: "ARCHITECTURE",
      image:
        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=2000&q=80",
      link: "/agromat",
    },
    {
      id: 3,
      title: "SPEEDTYPE",
      category: "Architecture",
      label: "FUTURE",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=2000&q=80",
      link: "/speedtype",
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

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
                  <span className="text-sm font-medium text-orange-400">
                    {project.label}
                  </span>
                </div>

          
                <h3 className="absolute bottom-5 left-5 text-3xl sm:text-4xl font-bold z-10">
                  {project.title}
                </h3>
              </a>
            </div>
          ))}
      </motion.div>
    </div>
  );
}
