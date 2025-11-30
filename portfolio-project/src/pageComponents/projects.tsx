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
              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main Card */}
              <a href={project.link} className="block relative">
                <div className="relative bg-zinc-950 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 
                  <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
                    <iframe
                      src={project.route}
                      title={project.title}
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-100 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Strong gradient overlay for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />
                    
                    {/* Additional solid overlay at bottom for guaranteed text contrast */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 pointer-events-none">
                    {/* Top Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + (index * 0.15),
                      }}
                      className="flex items-start pointer-events-auto"
                    >
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-xs uppercase tracking-wider border border-white/30 shadow-2xl font-semibold">
                        Live Preview
                      </span>
                    </motion.div>

                    {/* Bottom Content with enhanced visibility */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + (index * 0.15),
                      }}
                      className="relative z-10"
                    >
                      {/* Text background for extra contrast */}
                      <div className="absolute -inset-4 bg-gradient-to-t from-black via-black/80 to-transparent blur-xl" />
                      
                      <div className="relative space-y-3">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5)' }}>
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm md:text-base max-w-md drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                          {project.description}
                        </p>
                        
                        {/* Animated Arrow with background */}
                        <div className="flex items-center gap-2 pt-2 pointer-events-auto">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                            <span>View Project</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
