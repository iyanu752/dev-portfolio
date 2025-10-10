import { motion } from "framer-motion";
import { useState } from "react";

export default function Project() {
  const [, setHoveredId] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "ESTATE RUN",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      link: "/estaterun",
      route: "https://estate-run-client.vercel.app",
      description: "Real Estate Management Platform"
    },
    {
      id: 2,
      title: "AGROMAT",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      link: "/agromat",
      route: "https://agromat.vercel.app",
      description: "Agricultural Marketplace"
    },
    {
      id: 3,
      title: "SPEEDTYPE",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop",
      link: '/speedtype',
      route: "https://speedtype-five.vercel.app",
      description: "Typing Speed Trainer"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center text-white py-16 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Explore my latest work</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2 + (index * 0.15),
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
            
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-md" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
              
              {/* Main Card */}
              <a href={project.link} className="block relative">
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
                 
                  <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
                    <iframe
                      src={project.route}
                      title={project.title}
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-100 transition-transform duration-700 group-hover:scale-105"
                    />
                    
            
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                   
                    <div 
                      className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                      }}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    {/* Top Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + (index * 0.15),
                      }}
                      className="flex items-start"
                    >
                      <span className="px-4 py-2 bg-black backdrop-blur-md rounded-full text-xs uppercase tracking-wider border border-white/20 shadow-lg">
                        View Project
                      </span>
                    </motion.div>

                    {/* Bottom Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + (index * 0.15),
                      }}
                      className="space-y-3"
                    >
                      <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-300  mix-blend-difference text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        {project.description}
                      </p>
                      
                      {/* Animated Arrow */}
                      <div className="flex items-center mix-blend-difference gap-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                        <span className="text-sm font-medium">Explore</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}