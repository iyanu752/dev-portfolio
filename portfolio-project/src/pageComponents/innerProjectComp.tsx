import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import juno from "@/assets/Juno.png";

export default function InnerProject() {
  const location = useLocation();

  const projects = [
    {
      id: 1,
      title: "EXPERT LISTING",
      link: "/expertlisting",
      route: "https://expert-listing-orpin.vercel.app/",
      useImage: false,
      signal: "PROPERTY / TRUST",
    },
    {
      id: 2,
      title: "E-COMMERCE API",
      link: "/ecommerceapi",
      route: "https://dev-portfolio-eosin-pi.vercel.app/ecommerceapi",
      useImage: false,
      signal: "API / PAYMENTS",
    },
    {
      id: 3,
      title: "TEMPO",
      link: "/tempo",
      route: "https://dev-portfolio-eosin-pi.vercel.app/tempo",
      useImage: false,
      signal: "EDITOR / SPEED",
    },
    {
      id: 4,
      title: "JUNO",
      link: "/juno",
      route: "https://juno.build/",
      useImage: true,
      image: juno,
      signal: "OSS / SERVERLESS",
    },
    {
      id: 5,
      title: "AGROMAT",
      link: "/agromat",
      route: "https://agromat.vercel.app",
      useImage: false,
      signal: "AGRI / COMMERCE",
    },
    {
      id: 6,
      title: "SPEEDTYPE",
      link: "/speedtype",
      route: "https://speedtype-five.vercel.app",
      useImage: false,
      signal: "RHYTHM / PRACTICE",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <span className="terminal-label">More Projects</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1,
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects
            .filter((project) => project.link !== location.pathname)
            .map((project) => (
              <a key={project.id} href={project.link} className="group block">
                <div className="tech-panel overflow-hidden">
                  <div className="relative h-[320px] overflow-hidden">
                    {project.useImage ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <iframe
                        src={project.route}
                        title={project.title}
                        className="h-full w-full border-0 pointer-events-none"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="scanlines absolute inset-0 opacity-15" />
                  </div>

                  <div className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="font-terminal text-[0.68rem] uppercase tracking-[0.22em] text-[#d4ff42]">
                        {project.signal}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold uppercase tracking-[0.12em]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-[#ffd84d]">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
