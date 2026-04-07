import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Crosshair, ExternalLink, Orbit } from "lucide-react";
import juno from "@/assets/Juno.png";

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [, setHoveredId] = useState<number | null>(null);

  const categories = [
    "ALL",
    "FRONTEND/FULLSTACK",
    "API",
    "VS CODE EXTENSIONS",
    "GITHUB CONTRIBUTIONS",
  ] as const;

  const projects = [
    {
      id: 1,
      title: "EXPERT LISTING",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      link: "/expertlisting",
      route: "https://expert-listing-orpin.vercel.app/",
      description: "Verified real-estate search system with a cleaner property discovery flow.",
      categories: ["FRONTEND/FULLSTACK"],
      signal: "GRID / MAP / TRUST",
      useImage: false,
    },
    {
      id: 2,
      title: "E-COMMERCE API TEMPLATE",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop",
      link: "/ecommerceapi",
      route: "https://dev-portfolio-eosin-pi.vercel.app/ecommerceapi",
      description: "Production-minded API starter with Redis, Docker, Paystack, and MongoDB.",
      categories: ["API"],
      signal: "AUTH / CACHE / PAYMENTS",
      useImage: false,
    },
    {
      id: 3,
      title: "TEMPO",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      link: "/tempo",
      route: "https://dev-portfolio-eosin-pi.vercel.app/tempo",
      description: "AI-assisted VS Code extension focused on faster code completion workflows.",
      categories: ["VS CODE EXTENSIONS"],
      signal: "EDITOR / SPEED / SUGGESTION",
      useImage: false,
    },
    {
      id: 4,
      title: "JUNO",
      image: juno,
      link: "/juno",
      route: "https://juno.build/",
      description: "Serverless tooling contribution with strong ownership and self-hosting control.",
      categories: ["GITHUB CONTRIBUTIONS", "FRONTEND/FULLSTACK"],
      signal: "OSS / SERVERLESS / CONTROL",
      useImage: true,
    },
    {
      id: 5,
      title: "AGROMAT",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      link: "/agromat",
      route: "https://agromat.vercel.app",
      description: "Agricultural commerce platform connecting inventory, buyers, and investment flows.",
      categories: ["FRONTEND/FULLSTACK"],
      signal: "COMMERCE / SUPPLY / GROWTH",
      useImage: false,
    },
    {
      id: 6,
      title: "SPEEDTYPE",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop",
      link: "/speedtype",
      route: "https://speedtype-five.vercel.app",
      description: "Typing trainer designed as a focused practice loop with lightweight game cues.",
      categories: ["FRONTEND/FULLSTACK"],
      signal: "PRACTICE / SCORE / RHYTHM",
      useImage: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <section className="px-4 py-18 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="terminal-label">Featured Projects</span>
            <h2 className="section-title mt-5">
              Mission
              <br />
              <span className="accent">Archive</span>
            </h2>
          </div>
          <div className="tech-panel max-w-xl p-5">
            <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#ff6b6b]">
              Select a channel
            </p>
            <p className="muted-copy mt-3 text-sm leading-7">
              Each card keeps the forms sharp and the information minimal, with strong color calls and terminal-like tags instead of decorative noise.
            </p>
          </div>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`tech-button ${selectedCategory === category ? "tech-button--solid" : ""}`}
            >
              {selectedCategory === category ? <Orbit className="h-4 w-4" /> : <Crosshair className="h-4 w-4" />}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: index * 0.08,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <a href={project.link} className="block tech-panel overflow-hidden">
                <div className="hazard-bar" />
                <div className="relative" style={{ paddingBottom: "63%" }}>
                  {project.useImage ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={project.route}
                      title={project.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full border-0 pointer-events-none"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/35" />
                  <div className="scanlines absolute inset-0 opacity-20" />

                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    {project.categories.map((category, categoryIndex) => (
                      <span
                        key={category}
                        className={`tech-chip ${
                          categoryIndex % 2 === 0
                            ? ""
                            : "border-[rgba(255,77,77,0.28)] bg-[#201110] text-[#fff1f1]"
                        }`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative grid gap-5 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-terminal text-xs uppercase tracking-[0.24em] text-[#d4ff42]">
                        {project.signal}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[0.12em] md:text-4xl">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="mt-1 h-5 w-5 text-[#ffd84d]" />
                  </div>

                  <p className="muted-copy max-w-xl text-sm leading-7 md:text-base">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    <span className="tech-button tech-button--solid px-4 py-3">
                      View Project
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
